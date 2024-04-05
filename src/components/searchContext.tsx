"use client";
import React, { createContext, useContext, useState } from "react";

type SearchContextType = {
  searchTerm: string;
  handleSearch: (value: string) => void;
};

const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  handleSearch: () => {},
});

type Props = {
  children?: React.ReactNode;
};

export function SearchProvider({ children }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const value = {
    searchTerm,
    handleSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
