const model = require("../models/index");
const User = model.User;
const Customer = model.Customer;

module.exports = {
  index: async (req, res) => {
    const { userLogin } = req.session;
    const customerList = await Customer.findAll()

    res.render("home/index", { userLogin, customerList });
  },
};
