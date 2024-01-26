export const useTextBasedTime = (): string => {
  const hour = new Date().getHours()
  if (hour >= 0 && hour < 6) {
    return 'Доброй ночи'
  } else if (hour >= 6 && hour < 12) {
    return 'Доброе утро'
  } else if (hour >= 12 && hour < 18) {
    return 'Добрый день'
  } else {
    return 'Добрый вечер'
  }
}
