const cookieSession = require("cookie-session");
const express = require("express");
//const { initialize } = require("passport");
const passport = require("passport");
const passportSetup = require ("./passport");
const cors = require("cors")
const authRoute = require ("./routes/auth")
const app = express();

app.use(
    cookieSession({
        name: "session",
        keys: ["oyindamola"],
        maxAge: 24 * 60 * 60 * 100

    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        Credentials: true,
    })
)

app.use("/auth", authRoute);

app.listen ("5000", ()=>{
    console.log("Server is running!")
})