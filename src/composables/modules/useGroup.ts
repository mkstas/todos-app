import { Ref, ref } from 'vue';

export const useGroup = () => {
  interface IGroup {
    id: string;
    title: string;
  }

  const groups: Ref<IGroup[]> = ref([]);

  const getGroups = () => {
    const savedGroups = JSON.parse(localStorage.getItem('groups') as string);
    groups.value = savedGroups;
  };

  const storeGroup = (title: string) => {
    groups.value.push(<IGroup>{
      id: Date.now().toString(),
      title: title,
    });

    localStorage.setItem('groups', JSON.stringify(groups));
  };

  const updateGroup = () => {};

  const deleteGroup = () => {};

  return {
    groups,
    getGroups,
    storeGroup,
  };
};
