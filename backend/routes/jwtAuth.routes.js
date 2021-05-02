const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcryptjs");
const jwtGenerator = require("../utils/jwtGenerator")
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")


//RESGISTERING
 router.post("/register", validInfo, async (req, res) => {
     try {
            //1. destructure the req.body (name, email,Password)
            const {username,email, password } = req.body;

            //2. check if user exist (if user exist the throw error)
            const user = await pool.query("SELECT * FROM jdvusers WHERE email = $1",[email]);
        //  res.json(user.rows)

        if(user.rows.length !== 0){
            return res.status(401).send("User already exist")
        }
            

        //3. bcrypt  the user password
        const salRound = 10;
        const salt = await bcrypt.genSalt(salRound);

        const bcryptPassword = await bcrypt.hash(password,salt)


        //4. enter the new user inside our database
        const newUser = await pool.query(
            "INSERT INTO jdvusers (fullname,documentid,phonenumber,email,username,password,createdat,modifiedat,modifiedby) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
            ["Wade Winston Wilson",7,8095542224,email,username,bcryptPassword,"2020-03-10 00:00:00.000000","2020-03-10 00:00:00.000000","Admin"]
        );

        // res.json(newUser.rows[0]);

        //5. genrarting our jwt token
        const token = jwtGenerator(newUser.rows[0].userid);

        res.json({ token })
         
     } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
     }
 })

 //LOGIN
 router.post("/login",  async (req, res) => {
     
    try {

        //1. destructure the req.boy
        const {username,password} = req.body;

        //2. check if user doesn't exist (if not then we throw error)
        const user = await pool.query("SELECT * FROM jdvusers WHERE username = $1 AND password = $2 ",[username,password]);
        // console.log(user.rows)

        if(user.rows.length === 0){
            return res.status(401).json("Password or email is incorrect")
        }

        //3. check if incoming password is the same the database password
        // const validPassword = await bcrypt.compare(password,user.rows[0].password);
        const validPassword = await user.rows[0].password;
        
        if(!validPassword){
            return res.status(401).json("Password or email is incorrect")
        }
        
        //4. give them the jwt token
        const token = jwtGenerator(user.rows[0].userid);
        res.json({token})
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");       
    }
 });

router.get("/verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
       console.error(err.message);
        res.status(500).send("server error");   
    }

});

//   obterner el nombre de usuario
 router.post("/fullname", async (req, res) => {
   
    try {
        
        const {username} = req.body;

        const fullname = await pool.query("SELECT fullname FROM jdvusers WHERE username = $1",[username]);
        const profile = fullname.rows[0].fullname;
        res.json({profile})

    } catch (error) {
        console.error(err.message);
        res.status(500).send("server error");   
    }
 });



module.exports = router;
