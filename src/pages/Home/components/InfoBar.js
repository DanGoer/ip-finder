function InfoBar({ data }) {
  console.log(data)
  return (
    <section className="w-10/12 h-80 lg:h-min bg-white rounded-2xl items-center justify-center z-20 lg:mt-12">
      <ul className="flex flex-col gap-4 lg:flex-row py-6 lg:px-6 lg:text-left lg:gap-16 text-center">
        <li className="flex flex-col items-center justify-center lg:items-start text-left lg:gap-2">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest ">
            IP ADDRESS
          </p>
          <b className="font-medium text-lg">{data.data.IPv4}</b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start lg:gap-2 lg:border-l-2 lg:pl-6">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest">
            LOCATION
          </p>
          <b className="font-medium text-xl">
            {data.data.city}, {data.data.state}
          </b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start lg:gap-2 lg:border-l-2 lg:pl-6">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest">
            PLZ
          </p>
          <b className="font-medium text-xl">
           {data.data.postal}
          </b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start lg:gap-2 lg:border-l-2 lg:pl-6">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest">
            ISP
          </p>
          <b className="font-medium text-xl">{data.data.isp}</b>
        </li>
      </ul>
    </section>
  )
}

export default InfoBar
