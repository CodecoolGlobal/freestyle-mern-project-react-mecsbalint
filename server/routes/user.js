import express from "express";
import User from "../model/User.js";
const router = express.Router();

router.use((req, res, next) => {
    try {
        if(!req.body?.email || req.method !== "POST") {
            return next();
        }
        const {email} = req.body;
        if (email.split("@").length !== 2) {
            return res.status(406).send("invalid e-mail");
        }
        next();
    } catch (error) {
        next();
    }
});

router.get(`/:email`, async (req, res, next) => {
    try {
        const {email} = req.params;
        const password = req.headers.authorization;
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(404).json({error: "User Not Found"});
        }
        if (user.password !== password) {
            return res.status(401).json({error: "Password Incorrect"});
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.get("/all", async (req, res, next) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newUserData = req.body;
        const response = await User.create(newUserData);
        res.json(response);
    } catch (error) {
        res.status(403);
        res.json({
            _id: null,
            error: error,
        });
    }
})

export default router;
