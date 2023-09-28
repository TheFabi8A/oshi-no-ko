import "./holographic-stickert.css";

export default function HolographicStickert() {
  return (
    <>
      <div className="stickert grid h-28 w-28 rotate-12 scale-75 animate-[hue-infinite_10s_infinite] place-items-center">
        <div className="absolute grid h-full w-full place-items-center pt-4">
          <p className="text-center text-xs font-medium">
            TVアニメ <br /> 第2期も <br /> 決定!!
          </p>
        </div>
        <svg
          className="w-4/5 mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 382 370"
        >
          <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M242.366 133.773 193.271 26.177l-56.484 107.695-110.606 15.77 83.509 81.627-20.257 112.499 105.842-52.609 96.519 51.048-19.666-111.003 83.69-81.487-113.452-15.944Zm-122.515-23.927-97.358 13.88C1.011 126.789-7.615 153.195 7.91 168.37l73.582 71.924-17.796 98.83c-3.813 21.179 18.114 37.66 37.369 28.089l93.841-46.644 84.671 44.782c19.247 10.18 41.769-6.26 37.968-27.715l-17.245-97.342 73.755-71.813c15.588-15.178 6.936-41.66-14.599-44.686l-99.256-13.949-43.139-94.544c-9.03-19.79-36.84-20.557-46.944-1.292l-50.265 95.836Z"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="a"
              x1="382"
              x2="6.5"
              y1="337"
              y2="59.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A3FF" />
              <stop offset="1" stopColor="red" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
