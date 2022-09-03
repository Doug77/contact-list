/* eslint-disable consistent-return */
module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const { message } = error;
    return res.status(400).json({ message });
  }
  next();
};
