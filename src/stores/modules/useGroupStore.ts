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

  return {
    groups,
    getGroups,
    storeGroup,
  };
});
