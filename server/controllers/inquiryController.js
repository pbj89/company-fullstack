const prisma = require('../prisma/prisma');

exports.createInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: '모든 항목은 필수입니다.' });
    }

    const saved = await prisma.inquiry.create({
      data: { name, email, message },
    });

    res.status(200).json({ message: '문의가 저장되었습니다.', data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '서버 오류 발생' });
  }
};
