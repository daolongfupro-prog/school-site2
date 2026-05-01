const MONTHS = [
  'января','февраля','марта','апреля','мая','июня',
  'июля','августа','сентября','октября','ноября','декабря',
]

export function getNextLessonDate() {
  const now = new Date()
  const day = now.getDate()

  let lessonDay, monthIndex

  if (day <= 10) {
    lessonDay = 10
    monthIndex = now.getMonth()
  } else if (day <= 20) {
    lessonDay = 20
    monthIndex = now.getMonth()
  } else {
    lessonDay = 10
    monthIndex = (now.getMonth() + 1) % 12
  }

  return `${lessonDay} ${MONTHS[monthIndex]}`
}
