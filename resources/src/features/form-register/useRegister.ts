export const useRegister = () => {
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
    {
      type: 'password',
      id: 'password_repeat',
      label: 'Повтор пароля',
      placeholder: '******',
    },
  ];

  return {
    fields,
  };
};
