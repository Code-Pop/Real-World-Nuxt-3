export const useCategoryState = () => {
  return useState('category', () => ({
    name: '',
    slug: ''
  }))
}
