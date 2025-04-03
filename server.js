const server = require("express");
const app = server();
const port = 5959;

app.get('/',(req,res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server is runnin at port : ${port}!`);
})