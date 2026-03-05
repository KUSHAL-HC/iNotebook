const express = require('express');
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "mysecretkey";
router.post('/createuser',[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass =await bcrypt.hash(req.body.password,salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });

      const data = 
      {
        user:{id:user.id}
      }
      const authtoken = await jwt.sign(data,JWT_SECRET);

      res.json({authtoken});
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
);

//Authenticate a user using:POST "/api/auth/login".No login required
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        let user =await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({eroor:"Please try to login with correct credentials"});
        }

        const passwordCompare =await bcrypt.compare(password,user.password);
        if(!passwordCompare)
        {
            return res.status(400).json({error:"Please try to login with with correct ceadentials"});
        }
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json({authtoken});
    } catch (err) {
        res.status(500).send({ error: "Server error" });
      }
  })
module.exports = router;