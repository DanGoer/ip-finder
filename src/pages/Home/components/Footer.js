function Footer({setIPAddress}) {
  return (
    <footer className="w-full h-30 bg-gradient-to-r from-cyan-700 to-blue-800 flex flex-col items-center justify-center gap-2">
      <h5>Test IP: </h5>
      <span>
      <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded shadow" onClick={()=> setIPAddress("84.183.147.200")}>Me</button>
      <button className="mx-2 bg-white text-blue-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded shadow" onClick={()=> setIPAddress("85.5.205.227")}>Bro</button>
      <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-2 px-4 rounded shadow" onClick={()=> setIPAddress("136.243.235.86")}>IBB</button>
      </span>
      <h5 className="text-md">
        This App was created by{" "}
        <a
          href="https://www.dangoer.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-para hover:text-but"
        >
          {" "}
          Daniel Goergens
        </a>{" "}
      </h5>
      <div className="flex flex-col md:flex-row gap-1 text-xs">
        <div className="font-bold ">
          A Project for my{" "}
          <a
            href="https://www.ibb.com/ibb/service-portal-fuer-ibb-teilnehmerinnen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-para hover:text-but"
          >
            {" "}
            IBB class
          </a>
          .
        </div>{" "}
        <div>
          The code can be found here:{" "}
          <a
            href="https://github.com/DanGoer/ip-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-para hover:text-but"
          >
            {" "}
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
