require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(express.json());



// User Service

app.use(
    "/api/auth",

    createProxyMiddleware({

        target: process.env.USER_SERVICE,

        changeOrigin: true

    })

);

app.use(
    "/api/users",

    createProxyMiddleware({

        target: process.env.USER_SERVICE,

        changeOrigin: true

    })

);



// Product Service

app.use(
    "/api/products",

    createProxyMiddleware({

        target: process.env.PRODUCT_SERVICE,

        changeOrigin: true

    })

);



// Cart Service

app.use(
    "/api/cart",

    createProxyMiddleware({

        target: process.env.CART_SERVICE,

        changeOrigin: true

    })

);



app.get("/", (req, res) => {

    res.send("Nexura API Gateway Running");

});



app.listen(process.env.PORT, () => {

    console.log(`API Gateway running on port ${process.env.PORT}`);

});