// app.js
const express = require('express');
const axios = require('axios');
const os = require('os');

const app = express();

app.get('/api', async (req, res) => {
  const images = [];
  for (let i = 1; i <= 1000; i++) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${i}`);
      images.push(response.data);
    } catch (error) {
      images.push({ id: i, error: 'Image not found' });
    }
  }
  res.json({ message: "Hello, World!", hostname: os.hostname(), images });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
