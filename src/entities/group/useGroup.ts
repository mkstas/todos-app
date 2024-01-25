import { Group } from '@/shared/types';

export const useGroup = () => {
  const groups: Group[] = [
    {
      title: 'Разработка',
    },
    {
      title: 'Тестирование',
    },
  ];

  return {
    groups,
  };
};
