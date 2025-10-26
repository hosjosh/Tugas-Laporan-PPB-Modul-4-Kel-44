import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../../assets/LOGORN.png';

export default function DesktopNavbar() {
  const location = useLocation();
  const navItems = [
    { id: 'home', label: 'Beranda', path: '/' },
    { id: 'makanan', label: 'Makanan', path: '/makanan' },
    { id: 'minuman', label: 'Minuman', path: '/minuman' },
    { id: 'favorit', label: 'Favorit', path: '/favorit' },
    { id: 'profile', label: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="hidden md:block shadow-lg border-b border-blue-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logoUrl} alt="Resep Nusantara Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                Resep
              </h1>
              <h2 className="text-base font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent -mt-1">
                Nusantara
              </h2>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-4 py-3 text-base font-medium transition-all duration-200 border-b-2 ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-blue-500'
                    : 'text-slate-600 border-transparent hover:text-blue-500 hover:border-blue-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 