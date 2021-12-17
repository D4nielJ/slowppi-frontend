const formatUser = (token) => {
  const [, payload] = token.auth_token.split('.');
  const { exp, user_id: id, role } = JSON.parse(window.atob(payload));
  return {
    id,
    role,
    exp,
    token: token.auth_token,
  };
};

export default formatUser;
