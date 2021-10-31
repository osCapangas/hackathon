export function dreValidator(dre) {
  const re =  /[1234567890]/
  if (!dre) return "DRE can't be empty."
  if (!re.test(dre)) return 'Ooops! We need a valid DRE address.'
  if (dre.length !== 9) return 'Ooops! We need a valid DRE address.'
  return ''
}
