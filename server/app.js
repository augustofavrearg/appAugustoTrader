import express from 'express';
import cors from 'cors'
import router from './routes/index.routes.js';


const app = express();

// Configura CORS con opciones específicas
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

app.use(express.json());

// Rutas
app.use('/api', router)

export default app