import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import proxy from 'express-http-proxy';
import axios from 'axios';
import cookieParser from 'cookie-parser';

const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-gateway!' });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
