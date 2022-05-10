
  const item = req.items.item;

  item.mv(`${__dirname}/public/uploads/${item.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ itemName: item.name, itemPath: `/uploads/${item.name}` });
  });


