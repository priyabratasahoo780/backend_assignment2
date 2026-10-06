const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

const ErrorMiddleware = require('./middleware/errorMiddleware');

const UsersRoutes = require('./routes/userRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users',UsersRoutes);

app.use(ErrorMiddleware);

app.get('/', (req,res) => {
  res.json({
    message: `Node MVC is running in the port ${PORT}!`
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  `server is running in the ${PORT}`
})



