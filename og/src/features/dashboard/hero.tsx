import DateDisplay from "@/features/dashboard/date-display"

const Hero = () => (
  <div className="flex items-end mb-20 text-black-20">
    <div className="grow">
      <DateDisplay
        dateInfo={{
          day: 0,
          month: 4,
          year: 2023,
          date: 16,
        }}
      />
    </div>
    <div className="w-[40%]  pl-4 sm:pl-6 md:pl-12 relative before:absolute before:w-[2px] before:top-[11%] before:h-[80%] before:left-0 before:bg-black-20">
      <p>asdfsad</p>
      <p>asdfsad</p>
      <p>asdfsad</p>
      <p>asdfsad</p>
      <p>asdfsad</p>
    </div>
  </div>
)

export default Hero
