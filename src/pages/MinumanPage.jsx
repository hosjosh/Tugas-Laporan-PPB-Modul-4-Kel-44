import { useState } from 'react';
import { ResepMinuman } from '../data/minuman';
import RecipeGrid from '../components/minuman/RecipeGrid';

export default function MinumanPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const allMinuman = Object.values(ResepMinuman.resep);

  const filteredRecipes = allMinuman.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Search Bar di sini */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari minuman..."
            className="w-full max-w-sm px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <RecipeGrid recipes={filteredRecipes} />
      </main>
    </div>
  );
}