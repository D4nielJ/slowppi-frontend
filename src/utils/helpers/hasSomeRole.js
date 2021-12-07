const hasSomeRole = (user, roles = ['', 'admin']) => {
  if (user && roles.some((role) => role === user.role)) {
    return true;
  }
  return false;
};

export default hasSomeRole;
