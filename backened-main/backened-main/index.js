const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Enable JSON body parsing

// Sample API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Backend!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
+
