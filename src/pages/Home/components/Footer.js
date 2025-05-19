function Footer() {
  return (
    <footer className="w-full h-24 bg-gradient-to-r from-cyan-700 to-blue-800 flex flex-col items-center justify-center gap-2">
      <h5 className="text-md">
        This App was created by{" "}
        <a
          href="www.linkedin.com/in/daniel-goergens-a613a1242"
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
