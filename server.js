const server = require("express");
const path = require("path");
const app = server();
const port = 5959;

app.get('/',(req,res) => {
    res.send("hello world");
});

app.get('/admin', (req,res) => {
    res.sendFile(path.join(__dirname ,'index.html'));
})
app.listen(port, () => {
    console.log(`Server is runnin at port : ${port}!`);
})