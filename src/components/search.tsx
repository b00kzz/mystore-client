import { Input } from "@/components/ui/input";
import { useSearch } from "./searchContext";

export function Search() {
  const { searchTerm, handleSearch } = useSearch();

  const handleChange = (event: { target: { value: string } }) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <Input
      type="search"
      placeholder="Search..."
      className="md:w-[100px] lg:w-[280px] h-8"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}
