const listService = require("../services/lists");

const getLists = async (req, res) => {
  const lists = await listService.getLists();
  res.status(200).json({ lists });
};

const createList = async (req, res) => {
  const list = await listService.createList(req.body);
  res.status(201).json({ list });
};

const getList = async (req, res) => {
  const list = await listService.getList(req.params.listId);
  res.status(200).json({ list });
};

const updateList = async (req, res) => {
  console.log("here");
  const list = await listService.updateList(req.params.listId, req.body);
  res.status(200).json({ list });
};

const deleteList = async (req, res) => {
  await listService.deleteList(req.params.listId);
  res.status(200).json();
};

module.exports = {
  getLists,
  createList,
  getList,
  updateList,
  deleteList,
};
