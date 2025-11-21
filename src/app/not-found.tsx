import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black text-white/20">404</h1>
        <p className="text-4xl font-bold text-white mt-8">User Not Found</p>
        <p className="text-xl text-gray-400 mt-4">
          The user you're looking for doesn't exist.
        </p>
        <Link
          href="/users"
          className="inline-block mt-10 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition font-medium"
        >
          Back to Users
        </Link>
      </div>
    </main>
  );
}