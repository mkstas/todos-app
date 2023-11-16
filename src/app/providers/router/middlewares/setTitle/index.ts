export const setTitle = (to, from, next) => {
  document.title = to.meta.title;
  next();
};
