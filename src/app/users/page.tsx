import Link from "next/link";
import UserCard from "./UserCard";
import LoadingSkeleton from "@/app/users/LoadingSkeleton";
import UsersClient from "@/app/users/users-client";

interface User {
    id: number;
    name: string;
    email: string;
    company: { name: string };
}

async function getUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed");
    return res.json();
}

export default async function UsersPage() {
    let users: User[] = [];
    let error = null;

    try {
        users = await getUsers();
    } catch (err) {
        error = "Failed to load users. Please try again later.";
    }

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
            <div className="text-right justify-right mt-16">
                <Link
                    href="/"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition"
                >
                    ← Back to Home
                </Link>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Users Directory
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Click any user to view detailed profile
                    </p>
                </div>

                <UsersClient />

                {error && (
                    <div className="text-center py-20 text-red-600 text-xl">{error}</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {users.length === 0 && !error && <LoadingSkeleton count={6} />}
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/"
                        className="text-indigo-600 hover:text-indigo-800 font-medium transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}