const router = require("express").Router();
const pool = require("../db");


//Obtener la informacion de los recidentes
 router.get('/residents', async (req, res) => {
  try {
      const data = await pool.query("SELECT * FROM jdvusers");
      const listResidents = data.rows
      res.json(listResidents)
  } catch (error) {
       console.error(err.message);
        res.status(500).send("server error");  
  }
});


module.exports = router;
