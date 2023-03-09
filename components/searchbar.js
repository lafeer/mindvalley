import Image from "next/image";

export default function SearchBar() {
  return (
    //create a search bar with a search icon
    <div className="relative flex items-center mr-6 lg:mr-0 border-b-1 border-neutral-200">
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <Image
          src="search.svg"
          width={12}
          height={12}
          alt="logo"
          className="text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="w-[105px] pl-5 py-2 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-xs"
        placeholder="Search Here..."
        autoComplete="off"
      />
    </div>
  );
}
