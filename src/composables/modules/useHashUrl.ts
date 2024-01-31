import { Ref, computed, ref } from 'vue';
import { useGroupStore } from '@/stores';

export const useHashUrl = () => {
  const { groups } = useGroupStore();

  const hashUrl: Ref<string> = ref(location.hash.slice(1));

  const isValidHashUrl = computed(
    () => !!groups.find(group => group.id === hashUrl.value),
  );

  window.addEventListener('hashchange', () => {
    hashUrl.value = location.hash.slice(1);
  });

  return {
    hashUrl,
    isValidHashUrl,
  };
};
