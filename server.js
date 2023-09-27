const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const port = process.env.port || 7000;

dotenv.config({ path: './config.env'});

mongoose.connect("mongodb://127.0.0.1:27017/newproject", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("No connection", e);
})

app.listen(port, () => {
    console.log(`Server running `)
});