const mongoose = require('mongoose');
const url = `mongodb+srv://iqbal:database123@cluster0.qofpz.mongodb.net/app?retryWrites=true&w=majority`;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

mongoose.set("strictQuery", false);
const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect(url,connectionParams)
    .then(() => {
        console.log('successfully connect into database');
    })
    .catch(err => console.log(err))
    
const User = mongoose.model('user',{
    username: String,
    password: String,
    secret: String
});

app.get('/',(req,res) => {
    User.find().then(result => res.json(result))
})

app.listen(port,() => console.log('server is running'))

