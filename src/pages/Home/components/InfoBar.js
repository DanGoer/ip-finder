// Manages the Infobar of the application
function InfoBar({ data }) {
  console.log("API Data:" + data.data ? data.data : "N/A")
  return (
    <section className="w-10/12 h-80 lg:h-min bg-white rounded-2xl items-center justify-center z-20 lg:mt-12">
      <ul className="flex flex-col gap-4 lg:flex-row py-6 lg:px-6 lg:text-left lg:gap-16 text-center">
        <li className="flex flex-col items-center justify-center lg:items-start text-left lg:gap-2">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest ">
            IP ADDRESS
          </p>
          <b className="font-medium text-lg">{data.data.IPv4}</b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start text-left lg:gap-2">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest ">
            Country
          </p>
          <b className="font-medium text-lg">{data.data.country_name ? data.data.country_name : "N/A"}</b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start lg:gap-2 lg:border-l-2 lg:pl-6">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest">
            LOCATION
          </p>
          <b className="font-medium text-xl">
            {data.data.city != null ? data.data.city : "N/A"}, {data.data.state ? data.data.state : "N/A"}
          </b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start lg:gap-2 lg:border-l-2 lg:pl-6">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest">
            PLZ
          </p>
          <b className="font-medium text-xl">
           {data.data.postal ? data.data.postal : "N/A"}
          </b>
        </li>
        <li className="flex flex-col items-center justify-center lg:items-start lg:gap-2 lg:border-l-2 lg:pl-6">
          <p className="font-semibold text-[0.7rem] text-dg tracking-widest">
            Lon/Lat
          </p>
          <b className="font-medium text-xl">{data.data.longitude ? data.data.longitude : "N/A"}/ 
            {data.data.latitude ? data.data.latitude : "N/A"}
          </b>
        </li>
      </ul>
    </section>
  )
}

export default InfoBar
