import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

