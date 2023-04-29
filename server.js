const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: `http://localhost:3000`
}));

app.get(`/home`, (req, res, next) => {
    res.send(`Hii`);
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})