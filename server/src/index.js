const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multiParty = require('connect-multiparty');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/downloadPdf', (req, res) => {
    res.download('./uploads/report.pdf');
})

app.get('/downloadExcel', (req, res) => {
    res.download('./uploads/report.xlsx');
})
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extends: true}));

// const corsOption = {
//     origin: '*',
//     optionsSuccessStatus: 200
// }
//
// app.use(cors(corsOption))

const multiPartyMidleware = multiParty({uploadDir: './uploads'});
app.post('/uploads', multiPartyMidleware, (req, res) => {
    const files = req.files;
    console.log(files);
    res.json({ message: files});
})



app.use((req, res, next, err) => res.json({error: err.statusMessage}))
app.listen(8000, ()=> {
    console.log('Servidor Iniciou');
})