const { ApolloServer } = require("apollo-server-express");
const fs = require("fs");
const express = require("express");
const http = require("http");
const path = require("path");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const Query = require("./resolvers/Query");

const resolvers = {
  Query,
};

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.static(path.join(__dirname, "../../client", "build")));
  app.use(express.static("public"));

  app.get("/rest", (req, res) => {
    res.json({ data: "rest works" });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client", "build", "index.html"));
  });

  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT || 80 }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT || 80}${
      server.graphqlPath
    }`
  );
}

startApolloServer(typeDefs, resolvers);
