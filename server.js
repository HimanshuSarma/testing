const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: `https://644d28f71e322e1e4f3bfa16--heartfelt-lokum-93dbd2.netlify.app`
}));

app.get(`/home`, (req, res, next) => {
    res.send(`Hello from home`);
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})