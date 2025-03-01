'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const BurgerMenuClient = ({ user, actionLabel, actionURL }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="p-2 bg-gray-800 text-white rounded-md"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* ? ini masih belum best practise karena menggunakan inline style yang tidak kompatibel dengan tailwind css ? */}
            {menuOpen && (
                <div
                    style={{ backgroundColor: '#1e293b' }}
                    className="absolute right-0 mt-2 w-52 h-32 shadow-lg rounded-md py-2 z-50 opacity-100"
                >
                    {user && (
                        <Link href="/users/dashboard" className="block px-4 py-2" style={{ color: '#fff' }}>
                            Dashboard
                        </Link>
                    )}
                    <Link href={actionURL} className="block px-4 py-2" style={{ color: '#fff' }}>
                        {actionLabel}
                    </Link>
                </div>
            )}

        </div>
    );
};

export default BurgerMenuClient;
