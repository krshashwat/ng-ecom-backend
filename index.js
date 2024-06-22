require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Welcome to NG-ECOM' });
})


// Starting the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT - ${PORT}`);
});