/**
 * @param res
 * @throw 如果不是 2xx 就报错
 */
const toJSON = (res)=> {
  if (!/^2/.test(res.status)) {
    throw new Error(res.statusText);
  } else {
    return res.json().then(res=> {
      if (res.code != 0) {
        throw new Error(res.message);
      } else {
        return res.result;
      }
    });
  }
}

export default toJSON;