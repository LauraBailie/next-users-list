"use client";

import { useState, useEffect, useMemo } from "react";
import UserCard from "./UserCard";

interface User {
    id: number;
    name: string;
    email: string;
    company: { name: string };
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetch users once
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    // Filter users with useMemo to prevent unnecessary re-renders
    const filteredUsers = useMemo(() => {
        if (!searchQuery.trim()) return users;

        const query = searchQuery.toLowerCase();
        return users.filter((user) =>
            user.name.toLowerCase().includes(query)
        );
    }, [users, searchQuery]);

    return (
        <>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-10 py-6 rounded-full bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50 focus:border-indigo-500 transition shadow-xl"
                />

                {/* Result Count */}
                {searchQuery && (
                    <div className="text-center mt-4 text-gray-300 font-medium">
                        Found <span className="text-indigo-400 font-bold">{filteredUsers.length}</span> user{filteredUsers.length !== 1 ? "s" : ""}
                    </div>
                )}
            </div>

            {/* Loading */}
            {loading && (
                <div className="text-center py-20">
                    <div className="inline-block w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="text-center py-20 text-red-400 text-xl">
                    Failed to load users. Please refresh.
                </div>
            )}

            {/* No Results */}
            {!loading && !error && filteredUsers.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-3xl text-gray-400 mb-4">No users found</p>
                    <p className="text-xl text-gray-500">
                        Try searching for "<span className="text-indigo-400">{searchQuery}</span>"
                    </p>
                </div>
            )}

            {/* Users Grid */}
            {!loading && !error && filteredUsers.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredUsers.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </>
    );
}