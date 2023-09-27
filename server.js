const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');



dotenv.config({ path: './config.env'});

const DB = process.env.DATABASE_LOCAL
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("The DB is Connected"))
    .catch((error) => console.log("Connection Failed", error.message));
const port = process.env.port || 7000;

app.listen(port, () => {
    console.log(`Server running ${port}`)
});