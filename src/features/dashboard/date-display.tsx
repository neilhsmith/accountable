import { DateInfo } from "@/types/date"
import { getAbbreviation, getDay, getMonth } from "@/utils/date"

const DateDisplay = ({ dateInfo }: { dateInfo: DateInfo }) => {
  const year = dateInfo.year.toString()
  const month = dateInfo.month.toString().padStart(2, "0")
  const date = dateInfo.date.toString().padStart(2, "0")

  const formattedDateTime = `${year}-${month}-${date}`
  const formattedMonth = getAbbreviation(getMonth(dateInfo.month))

  return (
    <div className="@container">
      <span className="block capitalize ml-1 text-3xl md:text-4xl tracking-tight font-extralight mb-5">
        {getDay(dateInfo.day).toLowerCase()}
      </span>
      <time
        dateTime={formattedDateTime}
        className="flex flex-col-reverse text-8xl sm:text-8xl md:text-9xl tracking-tighter font-light"
      >
        <span className="-mt-2 leading-[.9]">{formattedMonth}</span>
        <span className="leading-[.9]">{dateInfo.date}</span>
      </time>
    </div>
  )
}

export default DateDisplay
