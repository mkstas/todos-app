export const useBlockScreen = () => {
  const addBlockScreen = (className: string) => {
    document.body.classList.add(className);
  };

  const removeBlockScreen = (className: string) => {
    document.body.classList.remove(className);
  };

  const toggleBlockScreen = (className: string) => {
    document.body.classList.toggle(className);
  };

  return {
    addBlockScreen,
    removeBlockScreen,
    toggleBlockScreen,
  };
};
