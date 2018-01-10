const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sender = new require('simple-email-sender')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mail/send', async (req, res) => {
    let msg = req.body;
    console.log(msg);
    try{
        const result = await sender.send(msg);
        res.send(result);
    }
    catch(e){
        res.send(e);
    }
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
