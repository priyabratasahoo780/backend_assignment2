// customer middleware

const validateUser = (req,res, next) => {
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({
            message:"Name or email are required",
        })
    }
        next();
}

module.exports = validateUser;


// router middleware

const express = require('express');
const router = express.Router();

const routerMiddleware = (req, res, next) => {
    console.log("Router middleware");
    next();
}

router.use(routerMiddleware);

router.get("/users", (req,res) => {
    res.send("users list");
});



// auth middleware

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message:"Token required",
        });
    }

         next();
}


// error middleware

const errorMiddleware = (err, req, res, next) => {
    res.status(500).json({
        message: "internal server error",
    });
}

module.exports = errorMiddleware;