import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../../../packages/error-handler/error-middleware';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 6001;
app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.use(errorMiddleware);
app.use(express.json());
app.use(cookieParser());
const server = app.listen(port, () => {
  console.log(`Auth service is running at http://localhost:${port}/api`);
});

server.on('error', (err) => {
  console.log('Server Error:', err);
});
