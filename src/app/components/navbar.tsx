import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-5 px-28 justify-between items-center">
      {/* logo */}
      <div className="flex items-center">
        <div className="flex">
          {" "}
          <img
            src="https://getgoing.co.id/_next/static/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png"
            className=""
          ></img>
        </div>
        {/* search bar */}
        <div className="justify-between rounded-full shadow-2xl shadow-red-300 border border-red-300">
          <input
            type="text"
            className=" rounded-full py-2 px-5 w-96"
            placeholder="Cari negara, kota atau guide"
          />
          <button className="px-1.5 py-1.5 bg-red-300 rounded-full mr-2">
            cari
          </button>
        </div>
      </div>

      {/* menu  */}
      <div className="flex px-8">
        <ul className="flex text-center space-x-3 text-red-600">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/service">Servis Kami</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/login" className="text-black font-semibold ml-4">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
