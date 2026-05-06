import { BookOpen, Boxes, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
    const location = useLocation();

    const links = [
        { to: '/', label: 'Seleção', icon: Home },
        { to: '/attributes', label: 'Atributos', icon: BookOpen },
        { to: '/architectures', label: 'Padrões de Arquitetura', icon: Boxes },
    ]

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            AR
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-800">Architecture Recommender</h1>
                            <p className="text-xs text-gray-500">Sistema de Recomendação de Arquiteturas</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {links.map(({ to, label, icon: Icon}) => {
                            const isActive  = location.pathname === to;

                            return (
                                <Link
                                key={to}
                                to={to}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transtion-colors ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
                                    <Icon size={18} />
                                    <span className="font-medium">{label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}