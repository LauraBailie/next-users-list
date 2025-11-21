import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone, Globe, Building2, MapPin } from "lucide-react";

export default async function UserDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (!id || isNaN(Number(id))) notFound();

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) notFound();

    const user = await res.json();

    return (
        <main className="min-h-screen bg-gray-900 py-16 px-6">
            <div className="max-w-5xl mx-auto" />
            {/* Back Button */}
            <Link
                href="/users"
                className="flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition mb-12 group text-lg font-medium"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />Back to Users
            </Link>

            {/* Profile Card */}
            <div className="bg-gray-1000/100 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                {/* Gradient Header + Avatar */}
                <div className="h-80 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative">
                    <div className="absolute -bottom-16 left-12">
                        <div className="w-60 h-60 rounded-full bg-white/10 backdrop-blur-md p-3 shadow-2xl border-4 border-white/20">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl font-black text-white">
                                {user.name.charAt(0)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="pt-20 px-12 pb-16">
                    {/* Name + Username + Website Button */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
                        <div>
                            <h1 className="text-xl font-black text-white mb-2">{user.name}</h1>
                            <p className="text-xl text-indigo-400 font-medium">@{user.username}</p>
                            {/* Website Button */}
                            <div className="mb-16">
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-3 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition shadow-lg hover:shadow-indigo-500/50 gap-4"
                                >
                                    <Globe className="w-5 h-5" />
                                    Visit Website
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-left gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center">
                                    <Mail className="w-7 h-7 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-md font-semibold uppercase gap-y-3 mb-1">Email</p>
                                    <a href={`mailto:${user.email}`} className="text-md text-white hover:text-indigo-400 transition">
                                        {user.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-left gap-4 mb-16">
                                <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center">
                                    <Phone className="w-7 h-7 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-md font-semibold uppercase mb-1">Phone</p>
                                    <p className="text-md text-white">{user.phone}</p>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="flex items-left gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center">
                                    <Building2 className="w-7 h-7 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-md font-semibold uppercase mb-1">Company</p>
                                    <p className="text-xl text-white">{user.company.name}</p>
                                    <p className="italic text-md text-gray-300 mt-2">"{user.company.catchPhrase}"</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-left gap-4">
                                <div className="w-14 h-14 rounded-sm bg-gray-700/50 flex items-center justify-center">
                                    <MapPin className="w-7 h-7 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-md font-semibold uppercase mb-1">Address</p>
                                    <p className="text-md text-white leading-relaxed">
                                        {user.address.suite}, {user.address.street}
                                        <br />
                                        {user.address.city}, {user.address.zipcode}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}