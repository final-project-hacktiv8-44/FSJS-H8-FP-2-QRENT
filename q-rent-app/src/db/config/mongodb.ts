const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI
// const uri = "mongodb://localhost:27017";
if (!uri) {
  throw new Error("MONGO_URI is not defined");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const database = client.db("q-rent");
