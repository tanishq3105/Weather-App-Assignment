import { Search } from "lucide-react";

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSearch: () => void;
  isDark: boolean;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  onSearch,
  isDark,
  isLoading,
}) => {
  const inputClass = isDark
    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
    : "bg-white border-gray-300 text-gray-950 placeholder-gray-400";

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search cities..."
        disabled={isLoading}
        className={`flex-1 px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${inputClass}`}
      />
      <button
        onClick={onSearch}
        disabled={isLoading}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};
