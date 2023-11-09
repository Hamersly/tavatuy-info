export const filterList = (text: string, list: object[]): object[] | [] => {
  const pattern = new RegExp(text)
  if (text.trim().length) {
    return list.filter((el: any) => {
      for (let i = 1; i < 3; i++) {
        const formatEl = `${el[`__EMPTY_${i}`]}`.trim()
        const res = formatEl.match(pattern)
        if (res) return true
      }
    })
  } else return []
}