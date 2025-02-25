const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
// npm i cors express
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Route to handle GET requests
app.get('/get-data', (req, res) => {
    console.log('Received GET request with query:', req.query);
    res.send({ message: 'GET request received', data: req.query });
});


app.post('/post-data', (req, res) => {
    console.log('Received POST request with body:', req.body);
    res.json({ message: 'POST request received', data: req.body });
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

