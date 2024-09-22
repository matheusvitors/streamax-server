import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT || 8000, () => {
    console.log(`Streamax running on port ${PORT} at ${process.env.NODE_ENV || 'desconhecido'}`);
})
