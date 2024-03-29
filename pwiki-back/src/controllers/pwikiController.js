const pwikiService = require("../services/pwikiService");

const getAll = async (req, res) => {
  const documents = await pwikiService.getAll();
  return res.status(200).json(documents);
};

const createDoc = async (req, res) => {
  const createDoc = await pwikiService.createDoc(req.body);
  return res.status(201).json(createDoc);
};

const deleteDoc = async (req, res) => {
  const { id } = req.params;
  await pwikiService.deleteDoc(id);
  return res.status(204).json();
};

const updateDoc = async (req, res) => {
  const { id } = req.params;
  await pwikiService.updateDoc(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createDoc,
  deleteDoc,
  updateDoc,
};
