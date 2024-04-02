import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import exampleRoutes from "./src/routes/exampleRoutes";
import complementaryRoutes from "./src/routes/complementaryRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', complementaryRoutes);
app.use('/example', exampleRoutes);

app.use((req: Request, res: Response) => {
    res.status(404).send({ error: "Sorry, the requested URL was not found." });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;