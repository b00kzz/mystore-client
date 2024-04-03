import { Input } from "@/components/ui/input";
import { useState } from "react";

type SearchProps = {
  onSearch: (value: string) => void;
};

export function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
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
