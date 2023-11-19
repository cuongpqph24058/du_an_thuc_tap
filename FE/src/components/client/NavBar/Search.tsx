import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="bg-white w-full md:w-auto  p-2 rounded-full transition cursor-pointer border  border-gray-400	">
        <div className="flex flex-row items-center justify-between text-sm">
          <input
            type="text"
            className="outline-none rounded-full p-1 px-5  w-full"
          />

          <div className="p-2 rounded-full text-white bg-amber-300 border border-amber-300 hover:bg-gray-400 transition">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
