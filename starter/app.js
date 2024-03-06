const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' , app: "Natours app"});
});

app.post('/', (req, res) => {
  res.status(200).send('You can post to this endpoint' );
});