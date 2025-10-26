import { Link, useLocation } from 'react-router-dom';
import { Home, ChefHat, Coffee, Heart, User } from 'lucide-react';

export default function MobileNavbar() {
  const location = useLocation();
  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home, path: '/' },
    { id: 'makanan', label: 'Makanan', icon: ChefHat, path: '/makanan' },
    { id: 'minuman', label: 'Minuman', icon: Coffee, path: '/minuman' },
    { id: 'favorit', label: 'Favorit', icon: Heart, path: '/favorit' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-1 z-50">
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <IconComponent 
                size={20} 
                className="mb-1"
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span className="text-xs font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}