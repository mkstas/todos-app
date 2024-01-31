import { Ref, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@/composables';
import { IGroup } from '@/types';

export const useGroupStore = defineStore('groups', () => {
  const { getStorage, setStorage } = useStorage();

  const groups: Ref<IGroup[]> = ref([]);

  const getGroups = () => {
    if (getStorage('groups')) {
      Object.assign(groups.value, getStorage('groups'));
    } else {
      setStorage('groups', []);
    }
  };

  const storeGroup = (title: string) => {
    groups.value.push({ id: Date.now().toString(), title });
    setStorage('groups', groups.value);
  };

  const deleteGroup = (id: string) => {
    console.log(1);
    const savedGroups: IGroup[] = getStorage('groups');
    const updatedGroups = savedGroups.filter(group => group.id !== id);

    groups.value = groups.value.filter(group => group.id !== id);

    setStorage('groups', updatedGroups);

    // location.hash = '';
  };

  return {
    groups,
    getGroups,
    storeGroup,
    deleteGroup,
  };
});
