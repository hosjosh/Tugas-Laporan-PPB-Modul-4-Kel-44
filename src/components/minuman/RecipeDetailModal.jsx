import React from 'react';

export default function RecipeDetailModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Tutup detail"
        >
          &times;
        </button>
        <img
          src={recipe.image_url}
          alt={recipe.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
        <div className="mb-2">
          <span className="text-yellow-500 font-bold">⭐ {recipe.rating || '4.8'}</span>
        </div>
        <h3 className="font-semibold">Bahan-bahan:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h3 className="font-semibold">Langkah-langkah:</h3>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          {recipe.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}