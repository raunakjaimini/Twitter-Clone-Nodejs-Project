const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();

mongoose.connect("mongodb+srv://jaiminiraunak30:password1234@cluster0.upwxnvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),()=>{
    console.log("Connected to MongoDB")
};

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.get("/users",(req,res)=>{
//     res.send("Welcome to users")
// })

// app.get("/",(req,res)=>{
//     res.send("Welcome to homepage")
// })


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});