import { ResepMakanan } from '../data/makanan';
import { ResepMinuman } from '../data/minuman';
import { getFavorites } from '../utils/favoriteUtils';
import RecipeGrid from '../components/makanan/RecipeGrid'; // Gunakan komponen grid yang sama seperti tab makanan/minuman

export default function FavoritePage() {
  const favIds = getFavorites();

  // Gabung semua resep dari makanan & minuman
  const resepList = [
    ...Object.values(ResepMakanan.resep),
    ...Object.values(ResepMinuman.resep)
  ];

  // Filter resep yang jadi favorit
  const favorites = resepList.filter(r => favIds.includes(r.id));

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6 text-center">Resep Favoritmu</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-slate-500">Belum ada resep favorit yang dipilih.</p>
      ) : (
        <RecipeGrid recipes={favorites} />
      )}
    </section>
  );
}