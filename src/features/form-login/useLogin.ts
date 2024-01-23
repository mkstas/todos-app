export const useLogin = () => {
  const fields = [
    {
      type: 'email',
      id: 'email',
      label: 'Электронная почта',
      placeholder: 'example@mail.com',
    },
    {
      type: 'password',
      id: 'password',
      label: 'Пароль',
      placeholder: '******',
    },
  ];

  return {
    fields,
  };
};
