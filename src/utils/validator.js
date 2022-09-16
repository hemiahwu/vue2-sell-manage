export const checkAccount = (rule, value, callback) => {
  if (!value.trim()) {
    callback(new Error("内容不能为空"));
  } else if (!/^[A-Za-z0-9\u4e00-\u9fa5]{3,15}$/.test(value)) {
    callback(new Error("字母/数字或汉字组成 3 ~ 15位"));
  } else {
    callback();
  }
};

export const checkPassword = (rule, value, callback) => {
  if (!value.trim()) {
    callback(new Error("内容不能为空"));
  } else if (!/^[A-Za-z0-9]{6,12}$/.test(value)) {
    callback(new Error("字母/数字组成 6 ~ 12位"));
  } else {
    callback();
  }
};
