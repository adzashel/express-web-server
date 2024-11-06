const express = require('express');

const app = express();
const port = 3000;

app.get('/' , (req , res) => {
    res.sendFile('./main.html' , {root: __dirname});
});

app.get('/about' , (req , res) => {
    res.send('This is the about page');
});

app.get('/contact' , (req , res) => {
    res.send('Contact us at 123 Main St, Anytown, USA');
});

app.get('/api' , (req , res) => {
    const data = [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Smith'},
        {id: 3, name: 'Alice Johnson'}
    ];
    res.json(data);
})
// app.use digunaakan untuk menghubungkan middleware spesifik
app.use('/' , (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port , () =>{
    console.log(`Server running at http://localhost:${port}`);
});