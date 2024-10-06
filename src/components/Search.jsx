import { searchIcon } from "../assets/images";

const Search = ({ setCity, handleFetch, city }) => {
  return (
    <div className="flex w-[80%] max-w-96 fixed top-40 left-[50%] -translate-x-[50%]">
      <input
        name="citySearch"
        value={city || ""}
        type="text"
        className="flex-grow w-[80%] h-12 rounded-tl-full  rounded-bl-full text-lg px-4 outline-none"
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleFetch(city);
          }
        }}
      />

      <button
        onClick={() => handleFetch(city)}
        className=" bg-blue-950 rounded-tr-full  rounded-br-full h-12 w-[20%]  grid place-items-center"
      >
        <img src={searchIcon} alt="" className="min-w-4" />
      </button>
    </div>
  );
};

export default Search;
