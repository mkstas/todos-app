import { Ref, ref } from 'vue';
import { IGroup } from '@/types';
import { useStorage } from '@/composables';

export const useGroup = () => {
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
};
