import { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleQueryChange}
        onKeyPress={handleKeyPress}
        className="w-full mr-3 text-sm font-medium text-gray-700 bg-transparent focus:outline-none"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <BiSearch size={20} />
      </button>
    </div>
  );
};

export default SearchForm;
