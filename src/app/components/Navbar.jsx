export default function Navbar() {
  return (
    <nav className="w-screen z-10 sticky top-0 h-nav-w flex justify-between items-center bg-gray-800">
      <div className="w-full flex items-center justify-between">
        <div className="w-[200px]"></div>
        <div className="grid grid-cols-5 justify-start items-center px-4 text-white font-semibold pr-10">
          <button className="px-2 w-[150px] bg-red-500 py-1">HOME</button>
          <button className="px-2">ABOUT</button>
          <button className="px-2">SERVICES</button>
          <button className="px-2">HOUSES</button>
          <button className="px-2">CONTACTS</button>
        </div>
      </div>
    </nav>
  );
}
