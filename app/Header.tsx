import Link from "next/link";

function Header() {
  interface INav {
    name: string;
    url: string;
  }
  const headers: INav[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
  ];
  return (
    <div className="flex flex-row justify-end pt-5 pr-8">
      <div className="flex flex-row space-x-6 text-lg ">
        {headers.map((header, idx) => (
          <Link
            href={header.url}
            className="tap-transparent cursor-pointer hover:text-cyan-500 hover:duration-100 hover:ease-in hover:scale-125"
            key={idx}
          >
            {header.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
