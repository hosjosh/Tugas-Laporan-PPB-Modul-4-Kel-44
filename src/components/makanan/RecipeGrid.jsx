import { useState, useEffect, useRef } from 'react';
import RecipeDetailModal from './RecipeDetailModal';
import Pagination from '../common/Pagination';
import { Heart } from 'lucide-react';
import { getFavorites, setFavorites } from '../../utils/favoriteUtils';

const PAGE_SIZE = 6;

export default function RecipeGrid({ recipes }) {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // FAVORIT STATE
  const [favorites, setFavs] = useState(getFavorites());

  function toggleFavorite(id) {
    let favs = [...favorites];
    if (favs.includes(id)) {
      favs = favs.filter(fav => fav !== id);
    } else {
      favs.push(id);
    }
    setFavorites(favs);
    setFavs(favs);
  }

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recipes.length / PAGE_SIZE);
  const paginatedRecipes = recipes.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, paginatedRecipes.length);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setTimeout(() => {
            setVisibleCards(prev => new Set(prev).add(index));
          }, (index % 3) * 150);
        }
      });
    }, { threshold: 0.1 });

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [paginatedRecipes, currentPage]);

  // Reset halaman ke 1 saat props recipes berubah (misal, search di parent)
  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {paginatedRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            ref={el => cardRefs.current[index] = el}
            className={`group transform transition-all duration-700 ${
              visibleCards.has(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div
              className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/15 transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:bg-white/20"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-32 md:h-56 overflow-hidden">
                <img
                  src={recipe.image_url}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                {/* FAVORITE ICON */}
                <button
                  aria-label="Favorite"
                  onClick={e => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow transition-all"
                >
                  <Heart
                    className="w-6 h-6"
                    color={favorites.includes(recipe.id) ? "red" : "gray"}
                    fill={favorites.includes(recipe.id) ? "red" : "none"}
                  />
                </button>
              </div>
              <div className="relative z-10 p-4 md:p-8">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100/90 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                    Makanan
                  </span>
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                    <span className="text-yellow-500 font-bold">⭐</span>
                    <span className="font-semibold text-gray-700">{recipe.rating || '4.8'}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg md:text-xl text-gray-800">{recipe.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <RecipeDetailModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </section>
  );
}