export function dateFormatter(date: Date){
  const tempDate = new Date(date)

  const dayIn2Digit = ('0' + tempDate.getDate()).slice(-2)
  const monthIn2Digit = ('0' + (tempDate.getMonth() + 1)).slice(-2)

  const hoursIn2Digit = ('0' + tempDate.getHours()).slice(-2)
  const minutesIn2Digit = ('0' + tempDate.getMinutes()).slice(-2)

  const formattedDate = `${dayIn2Digit}/${monthIn2Digit}/${tempDate.getFullYear()}`
  const formattedTime = `${hoursIn2Digit}:${minutesIn2Digit}`

  return {formattedDate, formattedTime}
}