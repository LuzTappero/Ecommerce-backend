import express, { Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from './node_modules/helmet/index.cjs';
import cors from 'cors'
import rateLimit from 'express-rate-limit';
import errorHandler from './src/middlewares/errorHandler';
import userRoutes from './src/routes/userRoutes';
import profileRoutes from './src/routes/profileRoutes'
import productRoutes from './src/routes/productRoutes';
import categoryRoutes from './src/routes/categoryRoutes';
import orderRoutes from './src/routes/orderRoutes';
import './src/models/associations'

const app = express()

const TIMES: number = parseInt(process.env.TIMES || '900000', 10)
const MAX: number = parseInt(process.env.MAX || '100', 10);
const ORIGIN_ACCEPTED :string = process.env.ORIGIN_ACCEPTED ?? "http://localhost:4000";
const PORT= process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

dotenv.config()

app.use(morgan("dev", {
    skip: (req: Request, res: Response) => res.statusCode === 304,
}));

app.use(helmet());


app.use(
    rateLimit({
        windowMs: TIMES,
        max: MAX,
    })
);

const corsOptions ={
    origin: ORIGIN_ACCEPTED,
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}
app.use(cors(corsOptions))

app.use('/user', userRoutes)
app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/profile', profileRoutes)
app.use('/orders', orderRoutes)

app.use(errorHandler);

app.listen(PORT, ()=>{console.log(`Listening on PORT ${PORT}`)})
