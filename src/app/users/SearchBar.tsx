"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-2xl mx-auto mb-10">
      <input
        type="text"
        placeholder="Search users by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-half px-6 py-4 rounded-full border border-gray-300 dark:border-gray-600 bg-black dark:bg-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-inner"
      />
    </div>
  );
}