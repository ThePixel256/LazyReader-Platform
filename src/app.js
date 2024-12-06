import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js";
import clientRoutes from "./routes/client.routes.js";
import taskRoutes from './routes/task.routes.js'
import bookRoutes from './routes/book.routers.js'
import providerRoutes from './routes/provider.routers.js'
import {setupSwagger} from "./shared/configuration/documentation/openapi.js";

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
setupSwagger(app);

app.use('/api/v1/tasks',taskRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/clients', clientRoutes)
app.use('/api/v1/providers', providerRoutes)
app.use('/api/v1/books', bookRoutes)

app.get('/', (req, res) => {
    res.send('<h1> Hola Mundo en UTP 2024 </h1>')
})

export default app