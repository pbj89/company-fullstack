const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', inquiryRoutes); // ← 추가

app.get('/', (req, res) => {
  res.send('🚀 서버 작동 중');
});

module.exports = app;
