const router = require('express').Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');

//Register

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
});

///Login

router.post('/login', async (req, res) => {
    try {


        const user = await User.findOne({
            username: req.body.username,
        });
        const email = await User.findOne({
            email: req.body.email,
        });
        !user && !email && res.status(404).json("User not fond");
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            !validPassword && res.status(404).json("Wrong password");
            res.status(200).json(user);
        } else {
            const validPasswordemail = await bcrypt.compare(req.body.password, email.password);
            !validPasswordemail && res.status(404).json("Wrong password");
            res.status(200).json(email);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;