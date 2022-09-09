import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Shoes', 'Sandals', 'Slippers', 'Loafers', 'Mules'];
  res.send(categories);
});

export default handler;
