exports.getAllItems = async (req, res) => {
  res.status(200).json({ success: true, message: "get all items" });
};

exports.getSingleItem = async (req, res) => {
  res.status(200).json({ success: true, message: "get single item" });
};

exports.createItem = async (req, res) => {
  res.status(201).json({ success: true, message: "create item" });
};

exports.updateItem = async (req, res) => {
  res.status(200).json({ success: true, message: "update item" });
};

exports.deleteItem = async (req, res) => {
  res.status(200).json({ success: true, message: "delete item" });
};
