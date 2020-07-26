const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const artikels = require('./routes/api/artikels');

const app = express();

// Bodyparser punya Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect ke Mongo

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/artikels', artikels);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //bikim static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));