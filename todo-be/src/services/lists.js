const db = require("../../database/models");

const getLists = async () => {
  const lists = await db.lists.findAll();
  return lists;
};

const createList = async (list) => {
  const newList = await db.lists.create(list);
  return newList;
};

const getList = async (listId) => {
  const list = await db.lists.findOne({ where: { id:listId} });
  return list;
};

const updateList = async (listId, list) => {
  console.log(listId, list);
  const updatedList = await db.lists.findOne({ where: { id:listId } });
  for(const key in list) {
    updatedList[key] = list[key];
  }
  console.log(updatedList);
  await updatedList.save();
};

const deleteList = async (listId) => {
  await db.lists.destroy({ where: { listId } });
};

module.exports = {
  getLists,
  createList,
  getList,
  updateList,
  deleteList,
};
