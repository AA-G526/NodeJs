const server = require("express");
const path = require("path");
const app = server();
const port = 5959;

app.get('/',(req,res) => {
    res.send("hello world");
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname ,'index.html'));
});

app.get('/search', (req, res) => {
  const query = req.query.q || 'No search term provided';
  const page = req.query.page || 1;
  const filter = req.query.f || 'No filter';
  if (query == "product") {
    res.send(`Products...`);
  } else if (query == "dashboard") {
    res.send("dahsboard");
  } else if (filter == "product") {
    res.send("you filtered product");
  }
  else {
    res.send(`You searched for: ${query}. Page: ${page} and filtering : ${filter}`);
    }
});


app.listen(port, () => {
    console.log(`Server is runnin at port : ${port}!`);
})