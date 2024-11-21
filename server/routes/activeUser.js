import express from "express";
import ActiveUser from "../model/ActiveUser.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const activeUser = await ActiveUser.find({}).populate("userData");
        activeUser.length > 0 ? res.json(activeUser[0]) : res.status(404).send("Not ggFound");
    } catch (error) {
        next(error);
    }
});

router.post("/:id", async (req, res) => {
    try {
        await ActiveUser.deleteMany({});
        const {id} = req.params;
        await ActiveUser.create({userData: id});
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).send();
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        const response = await ActiveUser.findOneAndDelete({userData: id});
        return response ? res.status(200).json(response) : res.status(404).send("Not Found");
    } catch (error) {
        next(error);
    }
});

export default router;
