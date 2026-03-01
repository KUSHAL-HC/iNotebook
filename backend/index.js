const connectToMongo = require("./db");
connectToMongo();

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  // if u do not fet this above console then run node index.js inside a new terminal
});
  
  