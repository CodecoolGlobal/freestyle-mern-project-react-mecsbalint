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

router.get(`/`, async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email, password: password});
        if (!user) {
            return res.status(404).json({error: "Not Found"});
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
        const response = await User.create(newUserDat);
        res.json(response);
    } catch (error) {
        res.status(404);
        res.json({
            _id: null,
            error: error,
        });
    }
})

export default router;
