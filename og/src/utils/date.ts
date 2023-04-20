import { DateInfo, Day, Month } from "@/types/date"

const DAYS: Day[] = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
]
const MONTHS: Month[] = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
]

export const getDateInfo = (d: Date): DateInfo => ({
  day: d.getDay(),
  date: d.getDate(),
  month: d.getMonth(),
  year: d.getFullYear(),
})

export const getDay = (n: number) => {
  const day = DAYS[n]
  if (!day) {
    throw new Error() // TODO: msg
  }

  return day
}

export const getMonth = (n: number) => {
  const month = MONTHS[n]
  if (!month) {
    throw new Error() // TODO: msg
  }

  return month
}

export const getAbbreviation = (monthOrDay: Day | Month) =>
  monthOrDay.substring(0, 3)

export const getMonthAbbreviation = (n: number) => getMonth(n).substring(0, 3)
