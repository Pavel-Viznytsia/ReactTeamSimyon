const auth = (userName, pass) =>
  new Promise((resolve, reject) => {
    if (userName === 'admin' && pass === 'admin') {
      resolve({
        userName,
        userRole: 'admin',
      });
    } else if (userName === 'user' && pass === 'user') {
      resolve({
        userName,
        userRole: 'user',
      });
    } else {
      reject({
        errorAuthCode: 101,
        errorAuthMsg: 'Wrong Auth',
      });
    }
  });

export default auth;
