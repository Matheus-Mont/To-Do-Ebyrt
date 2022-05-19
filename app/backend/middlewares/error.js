const error = (err, _req, res, _next) => (
 res.status(404).json({ message: 'Oops, something went wrong' })
);

module.exports = error;