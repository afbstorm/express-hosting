const express = require('express');
const router = require('./router/router');
const cors = require('cors');

const PORT = 8001;
const app = express();
app.use(cors({
    origin: 'https://angular-hosting-qphe.vercel.app/',
    credentials: true,
    headers: 'Access-Control-Allow-Origin, Content-Type, Authorization'
}))

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
});
