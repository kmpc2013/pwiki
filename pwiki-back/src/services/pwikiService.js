const conn = require("./connection");

const getAll = async () => {
  const [documents] = await conn.execute("SELECT * FROM documents");
  return documents;
};

const createDoc = async (body) => {
  const { title, type, descr, link } = body;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "INSERT INTO documents(title, type, descr, link, changed_at) VALUES (?, ?, ?, ?, ?)";
  const [createdTask] = await conn.execute(query, [
    title,
    type,
    descr,
    link,
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteDoc = async (id) => {
  const query = "DELETE FROM documents WHERE id = ?";
  const removedTask = await conn.execute(query, [id]);
};

const updateDoc = async (id, task) => {
  const { title, type, descr, link } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query =
    "UPDATE documents SET title = ?, type = ?, descr = ?, link = ?, changed_at = ? WHERE id = ?";
  const [updateDoc] = await conn.execute(query, [title, type, descr, link, dateUTC, id,]);
  return updateDoc;
};

module.exports = {
  getAll,
  createDoc,
  deleteDoc,
  updateDoc,
};
