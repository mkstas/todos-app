import { Ref, ref } from 'vue';

export const useHashUrl = () => {
  const hashUrl: Ref<string> = ref(location.hash.slice(1));

  window.addEventListener('hashchange', () => {
    hashUrl.value = location.hash.slice(1);
  });

  return { hashUrl };
};
