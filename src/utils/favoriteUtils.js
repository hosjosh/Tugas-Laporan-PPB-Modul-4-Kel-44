export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  } catch {
    return [];
  }
}

export function setFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}