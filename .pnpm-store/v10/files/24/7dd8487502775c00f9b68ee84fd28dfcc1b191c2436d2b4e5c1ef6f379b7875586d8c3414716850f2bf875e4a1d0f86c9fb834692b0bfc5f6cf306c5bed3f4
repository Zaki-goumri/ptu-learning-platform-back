const generateId = key => {
  const accessKey = `UNIQUE_KEY_${key}`;
  window.AdminJS = window.AdminJS || {};
  // eslint-disable-next-line max-len
  window.AdminJS[accessKey] = (Number.parseInt(window.AdminJS[accessKey], 10) || 0) + 1;
  return [accessKey, window.AdminJS[accessKey]].join('_');
};
export default generateId;