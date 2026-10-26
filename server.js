require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { ObjectID } = require('bson')
const MongoClient = require('mongodb').MongoClient
let db, collection;

const url = process.env.MONGODB_URI
const dbName = "thoughts";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.error('MongoDB connection failed:', error);
        return;
    }

    db = client.db(dbName);
    console.log("Connected to `" + dbName + "`!");

    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('thoughts').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {thoughts: result})
  })
})

app.post('/thoughts', (req, res) => {
  db.collection('thoughts').insertOne({
    date: req.body.date || new Date().toISOString().split('T')[0],
    feeling: req.body.feeling,
    thought: req.body.thought
  }, (err, result) => {
    if (err) return console.log(err)
    console.log('Saved thought to Brain Drain')
    res.redirect('/')
  })
})

//UPDATE 
app.put('/thoughts', (req, res) => {
  db.collection('thoughts')
  .findOneAndUpdate(
    {_id: ObjectID(req.body.id)}, 
    { 
      $set: { 
        date: req.body.date,
        feeling: req.body.feeling, 
        thought: req.body.thought
      }
    }, 
    {
      sort: { _id: -1}, 
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

app.delete('/thoughts', (req, res) => {
  db.collection('thoughts').findOneAndDelete(
    { _id: new ObjectId(req.body.id)}, 
    (err, result) => {
    if (err) return res.send(500, err)
    res.send('Thought cleared!')
  })
})
