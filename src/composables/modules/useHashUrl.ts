import { Ref, computed, ref } from 'vue';
import { useGroupStore } from '@/stores';

export const useHashUrl = () => {
  const groupStore = useGroupStore();

  const hashUrl: Ref<string> = ref(location.hash.slice(1));

  const isValidHashUrl = computed(
    () => !!groupStore.groups.find(group => group.id === hashUrl.value),
  );

  window.addEventListener('hashchange', () => {
    hashUrl.value = location.hash.slice(1);
  });

  return {
    hashUrl,
    isValidHashUrl,
  };
};
