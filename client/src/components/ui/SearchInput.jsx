import { FaSearch } from "react-icons/fa";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {

  return (

    <div className="relative w-full ">
     
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered input-sm w-full pl-10"
      />
    </div>
  );
};

export default SearchInput;
