import dayImage from '../img/day.jpeg'
import nightImage from '../img/night.jpeg'
export const useBackgroundImage = (): string => {
  const hour = new Date().getHours()
  if (hour >= 6 && hour < 18) {
    return dayImage
  } else {
    return nightImage
  }
}
