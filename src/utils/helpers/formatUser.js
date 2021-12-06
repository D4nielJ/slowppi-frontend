const formatUser = (token) => {
  const [, payload] = token.auth_token.split('.');
  const { exp, user_id: id } = JSON.parse(window.atob(payload));
  return {
    id,
    role: 'admin',
    exp,
    token: token.auth_token,
  };
};

export default formatUser;
