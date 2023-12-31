const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const dotenv = require('dotenv');

dotenv.config(); // ...........Load environment .........//

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

//.........Connect to MongoDB...............//

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to urlshort API ")
})

// .........Use routes.............//
 app.use('/auth', authRoutes);
 app.use('/url', urlRoutes);




//.............Start the server...............//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
