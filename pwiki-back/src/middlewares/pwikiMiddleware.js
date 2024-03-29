const validateFieldTitle = (req, res, next) => {
  const { body } = req;
  if (body.title === undefined) {
    return res.status(400).json({ message: 'The field "title" is required' });
  }
  if (body.title === "") {
    return res
      .status(400)
      .json({ message: 'The field "title" cannot be empty' });
  }
  next();
};

const validateFieldType = (req, res, next) => {
  const { body } = req;
  if (body.type === undefined) {
    return res.status(400).json({ message: 'The field "type" is required' });
  }
  if (body.type === "") {
    return res
      .status(400)
      .json({ message: 'The field "type" cannot be empty' });
  }
  next();
};

const validateFieldDescr = (req, res, next) => {
  const { body } = req;
  if (body.descr === undefined) {
    return res.status(400).json({ message: 'The field "descr" is required' });
  }
  if (body.descr === "") {
    return res
      .status(400)
      .json({ message: 'The field "descr" cannot be empty' });
  }
  next();
};

const validateFieldLink = (req, res, next) => {
  const { body } = req;
  if (body.link === undefined) {
    return res.status(400).json({ message: 'The field "link" is required' });
  }
  if (body.link === "") {
    return res
      .status(400)
      .json({ message: 'The field "link" cannot be empty' });
  }
  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldType,
  validateFieldDescr,
  validateFieldLink,
};
