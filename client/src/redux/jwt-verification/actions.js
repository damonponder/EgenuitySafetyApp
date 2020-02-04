import * as types from "./constants";

export const remove = () => ({ type: types.REMOVE });
export const verify = () => ({ type: types.VERIFY });
export const add = (token, companyName, accessLevel) => ({
  type: types.ADD,
  token,
  companyName,
  accessLevel
});
