import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
// import { ENV_VARS } from './constants/index.js';
import {
  notFoundMiddleware,
  errorHandlerMiddleware,
} from './middlewares/index.js';
import { studentService } from './services/index.js';
const PORT = env(env('PORT'), '3000');

export const startServer = () => {
  const app = express();

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );

  app.use(cors());

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world',
    });
  });

  // app.get('/students', async (req, res) => {
  //   const students = await studentService.getAllStudents();
  //   res.status(200).json({ data: students });
  // });

  // app.get('/students/:studentId', async (req, res, next) => {
  //   const { studentId } = res.params;
  //   const student = await studentService.getStudentsById(studentId);

  //   if (!student) {
  //     res.status(404).json({
  //       message: 'Student not found',
  //     });
  //     return;
  //   }
  //   res.status(200).json({ data: student });
  // });
  app.use(notFoundMiddleware);

  app.use(errorHandlerMiddleware);

  app.listen(PORT, () => {});
};
