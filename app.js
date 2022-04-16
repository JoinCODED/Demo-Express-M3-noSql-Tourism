const connectDb = require('./database');

const express = require('express');
const app = express();
const monumentsRoutes = require('./api/monuments/monuments.routes');
connectDb();
app.use(express.json());
app.use('/monuments', monumentsRoutes);

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
