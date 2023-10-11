export const capitalize = (text: string) => {
  return text.trim()
    .split(' ')
    .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
    .join(' ')
}