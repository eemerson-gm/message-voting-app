
// Imports
const Express = require("express");
const Port = process.env.PORT || 3001;
const App = Express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const Uri = "mongodb+srv://admin:Fk6BHzMwoajEmTRC@cluster0.d8ivu.mongodb.net";
const Client = new MongoClient(Uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

App.listen(Port, () => {
    console.log(`Server listening on port ${Port}!`);
});

// Sends back an array of all the messages
App.get("/api/all", (req, res) => {
    Client.connect(async err => {
        const collection = Client.db("mvb").collection("messages");
        await collection.find({}).toArray((err, result) => {
            res.send(result);
        });
    });
});

// Creates a new message in the database
App.get("/api/new/:text", (req, res) => {
    Client.connect(async err => {
        const collection = Client.db("mvb").collection("messages");
        await collection.insertOne({ text: req.params.text, likes: 0 });
        Client.close();
    });
    res.send("Success");
});

App.get("/api/like/:id/:num", (req, res) => {
    let newLikes = Math.sign(req.params.num);
    Client.connect(async err => {
        const collection = Client.db("mvb").collection("messages");
        await collection.updateOne({_id: ObjectId(req.params.id)}, {$inc:{likes: newLikes}});
        console.log(req.params.id);
        Client.close();
    });
    res.send("Success");
});
