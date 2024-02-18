export const useParam = (key: string) => {
  return useRoute().params[key].toString()
}
