const app = require('express')();
const PORT = 8080;
const ser = "hello1";
app.get('/server', (req, res) => {
    res.status(200).send("hi")
});





app.listen(PORT, () => console.log(`It is running on http://localhost:${PORT}`))

