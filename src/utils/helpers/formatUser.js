/* eslint-disable camelcase */

const formatUser = (token) => {
  const [, payload] = token.auth_token.split('.');
  const { exp, user_id } = JSON.parse(window.atob(payload));
  return {
    id: user_id,
    exp,
    token: token.auth_token,
  };
};

export default formatUser;
