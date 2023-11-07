const router = require("express").Router();

module.exports = db => {
  router.post("/photos", (req, res) => {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image URL is required." });
    }

    // Construct the SQL query to insert the imageUrl into the database
    const query = {
      text: `INSERT INTO PHOTO (ID, FULL_URL, REGULAR_URL, CITY, COUNTRY, USER_ID, TOPIC_ID)
      VALUES (nextval('photo_id_sequence'), $1, $2, $3, $4, $5, $6)`,
      values: [imageUrl, imageUrl, "Montreal", "Canada", 1, 1], // Replace these values as needed
    };

    // Execute the SQL query
    db.query(query)
      .then(() => {
        // Respond with a success message or the created photo object
        res.status(201).json({ message: "Photo inserted successfully" });
      })
      .catch((error) => {
        // Handle the database error
        console.error("Error inserting photo:", error);
        res.status(500).json({ error: "Internal server error" });
      });
  });


  router.get("/photos", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    db.query(`
      SELECT 
      json_agg(
          json_build_object(
            'id', photo.id,
            'urls', json_build_object(
              'full', concat('${serverUrl}/images/', photo.full_url),
              'regular', concat('${serverUrl}/images/', photo.regular_url)
            ),
            'user', json_build_object(
              'username', user_account.username,
              'name', user_account.fullname,
              'profile', concat('${serverUrl}/images/', user_account.profile_url)
            ),
            'location', json_build_object(
              'city', photo.city,
              'country', photo.country
            ),
            'similar_photos', (
              SELECT 
                json_agg(
                  json_build_object(
                    'id', similar_photo.id,
                    'urls', json_build_object(
                      'full', concat('${serverUrl}/images/', similar_photo.full_url),
                      'regular', concat('${serverUrl}/images/', similar_photo.regular_url)
                    ),
                    'user', json_build_object(
                      'username', similar_user_account.username,
                      'name', similar_user_account.fullname,
                      'profile', concat('${serverUrl}/images/', similar_user_account.profile_url)
                    ),
                    'location', json_build_object(
                      'city', similar_photo.city,
                      'country', similar_photo.country
                    )
                  )
                )
              FROM photo AS similar_photo
              JOIN user_account AS similar_user_account ON similar_user_account.id = similar_photo.user_id
              WHERE similar_photo.id <> photo.id
              AND similar_photo.topic_id = photo.topic_id
              LIMIT 4
            )
          )
        ) as photo_data
      FROM photo
      JOIN user_account ON user_account.id = photo.user_id;
    `).then(({ rows }) => {
      response.json(rows[0].photo_data);
    });
  });


  return router;
};
