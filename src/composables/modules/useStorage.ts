export const useStorage = () => {
  const getStorage = (key: string, option: string = 'json') => {
    const value = localStorage.getItem(key) as string;

    if (option === 'json') {
      return JSON.parse(value);
    }

    return value;
  };

  const setStorage = (key: string, value: any, option: string = 'json') => {
    if (option === 'json') {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  };

  const removeStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  return {
    getStorage,
    setStorage,
    removeStorage,
    clearStorage,
  };
};
