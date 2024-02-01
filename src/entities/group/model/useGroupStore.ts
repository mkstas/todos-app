import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { IGroup } from '@/shared/api';
import { useLocalStorage } from '@/shared/utils';

export const useGroupStore = defineStore('groups', () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const groups: Ref<IGroup[]> = ref([]);

  const getGroups = () => {
    if (getLocalStorage('groups')) {
      groups.value = getLocalStorage('groups');
    } else {
      setLocalStorage('groups', []);
    }
  };

  const storeGroup = (title: string) => {
    groups.value.push({ id: Date.now().toString(), title });
    setLocalStorage('groups', groups.value);
  };

  const deleteGroup = (id: string) => {
    groups.value = groups.value.filter(group => group.id !== id);
    setLocalStorage('groups', groups.value);
  };

  return { groups, getGroups, storeGroup, deleteGroup };
});
