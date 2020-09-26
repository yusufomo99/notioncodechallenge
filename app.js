require("dotenv").config();

const express = require("express");
const express_graphql = require("express-graphql");
const myPort = process.env.PORT || 3000;

// GraphQL Schema
const mySchema = require("./schema");

// Api Service
const apiService = require("./service");

// Root Resolver
var root = {
  calculatePrice: apiService.getPrice
};

// Express Server and GraphQL Endpoint
var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: mySchema,
    rootValue: root,
    graphiql: true
  })
);

// Start Node Server
app.listen(myPort, () => {
  console.log(`GraphQL Server Running - :${myPort}/graphql`);
});
