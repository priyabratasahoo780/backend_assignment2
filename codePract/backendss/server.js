const express = require('express');
const dotenv = require('dotenv');
const Errormiddleware = require('./middleware/usersMiddleware');
const ConnectDB = require('./config/db');
// const UsersRouter = require('./routes/usersRouters');

 dotenv.config();
 ConnectDB;

 const app = express();

 app.use(express.json());

 app.use(Errormiddleware);

 app.get('/', (req,res) => {
    res.json({
      message:'server MVC connected successfully',
    })
 })

 const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  `server is running in the ${PORT}`
})


