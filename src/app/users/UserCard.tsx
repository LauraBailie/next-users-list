// src/app/users/UserCard.tsx
"use client";

import Link from "next/link";

type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    company: { name: string };
  };
};

export default function UserCard({ user }: Props) {
  return (
    <Link href={`/users/${user.id}`} className="block group">
      {/* ONE LINE className = NO HYDRATION ERROR */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-md border border-gray-700 p-8 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/30 hover:border-indigo-500 group-hover:bg-gray-800/90">

        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Avatar */}
        <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl ring-4 ring-gray-900 group-hover:ring-indigo-500 transition-all">
          {user.name.charAt(0)}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            {user.name}
          </h3>
          <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors">
            {user.email}
          </p>
          <span className="inline-block mt-4 px-4 py-2 bg-indigo-900/50 rounded-full text-indigo-300 text-sm font-medium">
            {user.company.name}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <span className="text-indigo-400 font-bold">View details</span>
        </div>
      </div>
    </Link>
  );
}