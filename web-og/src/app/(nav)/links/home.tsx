import Link from "../link"

export default function HomeLink() {
  return (
    <Link href="/">
      <HomeIcon />
      <span className="">Home</span>
    </Link>
  )
}

function HomeIcon() {
  return (
    <svg
      className="w-full h-auto max-w-[126px]"
      viewBox="0 0 43 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63202 21.7833C5.84784 20.884 6.65202 20.25 7.57679 20.25H35.4232C36.348 20.25 37.1522 20.884 37.368 21.7833L42.408 42.7833C42.7098 44.0409 41.7566 45.25 40.4632 45.25H2.53679C1.24343 45.25 0.290183 44.0409 0.592019 42.7833L5.63202 21.7833Z"
        fill="#F2F6FE"
      />
      <path
        d="M38.4894 12.4801L25.4902 2.36931C24.3494 1.48184 22.9453 1 21.5 1C20.0547 1 18.6506 1.48184 17.5098 2.36931L4.50819 12.4801C3.72683 13.0877 3.09467 13.8658 2.65997 14.7551C2.22527 15.6443 1.99953 16.6212 2 17.611V35.161C2 36.4539 2.51362 37.6939 3.42785 38.6081C4.34209 39.5224 5.58207 40.036 6.875 40.036H36.125C37.4179 40.036 38.6579 39.5224 39.5721 38.6081C40.4864 37.6939 41 36.4539 41 35.161V17.611C41 15.6049 40.0737 13.711 38.4894 12.4801Z"
        stroke="#7D89A7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.1768 27.812C25.7899 31.0611 17.0588 31.0611 11.6768 27.812"
        stroke="#7D89A7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
