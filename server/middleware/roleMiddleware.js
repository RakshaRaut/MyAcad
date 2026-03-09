module.exports =
  (...roles) =>
  (req, res, next) => {
    req.allowedRoles = roles;
    next();
  };
