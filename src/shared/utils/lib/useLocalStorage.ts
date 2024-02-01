export const useLocalStorage = () => {
  const getLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
  };

  const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getLocalStorage, setLocalStorage };
};
