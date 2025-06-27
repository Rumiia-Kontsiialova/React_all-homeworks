// Тип действия — строка, описывающая, что должно произойти
export const SET_USER_INFO = 'SET_USER_INFO';

// Action creator — функция, создающая action
export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};