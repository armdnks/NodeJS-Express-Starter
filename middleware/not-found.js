const notFoundMiddleware = (req, res) => {
  return res.status(404).send("Routes does not exist");
};

module.exports = notFoundMiddleware;
