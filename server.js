const express = require('express');
const itemUpload = require('express-itemupload');

const app = express();

app.use(itemUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.item === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const item = req.items.item;

  item.mv(`${__dirname}/public/uploads/${item.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ itemName: item.name, itemPath: `/uploads/${item.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
