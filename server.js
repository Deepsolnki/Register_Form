const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{res.sendFile(__dirname + '/public/index.html');});

app.post('/submit', (req, res) =>{
    const name = req.body.name; 
    const email = req.body.eamil;

    console.log(`name: ${name}, Email:${email}`);
});

app.listen(port, () => {
    console.log(`server running on port${port}`);
});

