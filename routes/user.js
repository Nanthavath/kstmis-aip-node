const router = require('express').Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');


///Update User
router.put('/:id', async (req, res) => {
    if (req.body.userID === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);

            } catch (err) {
                return res.status(500).json(err);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }


    } else {
        return res.status(403).json("You can't update");
    }
});

///Delete 
router.delete('/:id', async (req, res) => {
    if (req.body.userID === req.params.id || req.body.isAdmin) {

        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }

    } else {
        return res.status(403).json("You can't delete");
    }
});

///Get a User
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc

        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;