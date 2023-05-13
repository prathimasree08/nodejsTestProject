const User = require("../modals/expense");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

exports.postUser = (req, res, next) => {
  const Price = req.body.Price;
  const Dish = req.body.Dish;
  const Table = req.body.Table;
  User.create({
    Price: Price,
    Dish: Dish,
    Table: Table,
  })
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  // console.log(req)
  const prodId = req.params.id;
  User.findByPk(prodId)
    .then((id) => {
      return id.destroy();
    })
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => console.log(err));
};
