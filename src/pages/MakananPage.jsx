import { useState, useEffect } from 'react';
import { ResepMakanan } from '../data/makanan';
import RecipeGrid from '../components/makanan/RecipeGrid';

export default function MakananPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const allMakanan = Object.values(ResepMakanan.resep);

  const filteredRecipes = allMakanan.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Search Bar di sini */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Cari makanan..."
            className="w-full max-w-sm px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          />
        </div>
        <RecipeGrid recipes={filteredRecipes} />
      </main>
    </div>
  );
}