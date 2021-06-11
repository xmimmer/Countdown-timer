var express = require('express');
let port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/html/index.html");
})

app.listen(port, () => {
    console.log(`App listening at http://xmimmer.dk:${port}`)
})
