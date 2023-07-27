import { dayjs } from "./dayjs"

export const formatDateTime = (date: string) => {
  if (!dayjs(date).isValid()) {
    return '';
  }

  return dayjs(date).format('HH:mm DD.MM.YYYY');
}