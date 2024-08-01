require('dotenv').config({ path: './utils/.env' });
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const contactRoute = require("./router/contact-route");
const serviceRoute = require("./router/service-route");    


const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// app.us  e(bodyParser.json());
// const express = require('express');
// const app = express();  
// const router = require("./Router/auth-router");
// // const connectDb = require("./utils/db");
// app.use("/api/auth", router);
// app.use(express.json());

//1.using simple method

// app.get('/', (req, res) => {
//   res.status(200).send('GET request to the homepage of our MERN');
// });

// app.get('/register', (req, res) => {
//     res.status(200).send('GET request to the register of our MERN');
//   });

// app.get('/login', (req, res) => {
//     res.status(200).send('GET request to the help of our MERN');
//   });

// app.get('/find', (req, res) => {
//     res.status(200).send('GET request to the find of our MERN');
//   });



app.use("/api/auth", authRoute);
const PORT = 5000;
// app.post('/', (req, res)=>{
//     const val = req.body;
//      console.log(val);
//      res.status(203).json({val});
// });

// app.listen(PORT, () => {
//     console.log(`server is running on port : ${PORT}`);

// });
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port : ${PORT}`);

    });

});