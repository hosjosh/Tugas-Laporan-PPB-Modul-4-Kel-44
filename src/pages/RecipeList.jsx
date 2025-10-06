import React, { useState } from "react";
import { Link } from "react-router-dom";
import resepData from "../data/resep";

export default function RecipeList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resepPerPage = 5;

  // Filter resep by search
  const filteredResep = resepData.filter(resep =>
    resep.nama.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredResep.length / resepPerPage);

  // Pagination
  const resepShow = filteredResep.slice(
    (currentPage - 1) * resepPerPage,
    currentPage * resepPerPage
  );

  // Reset ke page 1 saat search berubah
  React.useEffect(() => setCurrentPage(1), [search]);

  return (
    <div style={{padding:"1rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"1rem"}}>
        <input
          type="text"
          placeholder="Cari resep..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{width:"200px",padding:"0.5rem"}}
        />
        <Link to="/profile">Profile</Link>
      </div>
      <h1>Daftar Resep Nusantara</h1>
      {resepShow.length < 1 && <p>Resep tidak ditemukan.</p>}
      <ul style={{listStyle:"none",padding:0}}>
        {resepShow.map(resep => (
          <li key={resep.id} style={{marginBottom:"1.5rem",borderBottom:"1px solid #ccc",paddingBottom:"1rem"}}>
            <Link to={`/resep/${resep.id}`} style={{textDecoration:"none",color:"black"}}>
              <h2>{resep.nama}</h2>
              <img src={resep.gambar} alt={resep.nama} style={{width:"200px"}} />
              <p>{resep.deskripsi}</p>
            </Link>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div style={{display:"flex",gap:"1rem"}}>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage+1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}