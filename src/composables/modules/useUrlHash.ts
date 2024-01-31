// import { Ref, computed, ref } from 'vue';
// import { useGroup, useTask } from '@/composables';

// export const useUrlHash = () => {
//   const groups = useGroup();
//   const { getTasks } = useTask();

//   const urlHash: Ref<string> = ref(location.hash.slice(1));

//   const isUrlHashValid = computed(
//     () => groups.groups.value,
//     // groups.value.find(group => group.id === urlHash.value),
//   );

//   // console.log(isUrlHashValid.value);

//   const watchOnUrlHash = () => {
//     window.addEventListener('hashchange', () => {
//       urlHash.value = location.hash.slice(1);

//       if (isUrlHashValid) {
//         getTasks(urlHash.value);
//       }
//     });
//   };

//   return {
//     urlHash,
//     isUrlHashValid,
//     watchOnUrlHash,
//   };
// };
