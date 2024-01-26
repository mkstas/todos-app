import { Group } from '@/shared/types';

export const useGroup = () => {
  const groups: Group[] = [
    {
      id: '1',
      title: 'Разработка',
    },
    {
      id: '2',
      title: 'Тестирование',
    },
  ];

  return {
    groups,
  };
};
