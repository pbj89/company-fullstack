const express = require('express');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 4000;
const SECRET = 'jwt_secret_key';

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, 'uploads');
  },
  filename: function (_, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  isAdmin: DataTypes.BOOLEAN
});

const Notice = sequelize.define('Notice', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  image: DataTypes.STRING
});

sequelize.sync();

// JWT 인증 미들웨어
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// 로그인
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) return res.sendStatus(401);
  const token = jwt.sign({ username, isAdmin: user.isAdmin }, SECRET);
  res.json({ token, isAdmin: user.isAdmin });
});

// 회원가입
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ where: { username } });
  if (exists) return res.status(409).json({ message: '중복된 아이디' });
  await User.create({ username, password, isAdmin: false });
  res.sendStatus(201);
});

// 공지사항 목록
app.get('/api/notices', async (req, res) => {
  const notices = await Notice.findAll({ order: [['createdAt', 'DESC']] });
  res.json(notices);
});

// 공지사항 작성
app.post('/api/notices', authenticateToken, upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';
  const newNotice = await Notice.create({ title, content, image });
  res.json(newNotice);
});

// 공지사항 삭제
app.delete('/api/notices/:id', authenticateToken, async (req, res) => {
  await Notice.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
