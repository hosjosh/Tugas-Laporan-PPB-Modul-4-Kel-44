import React from "react";
import { useParams, Link } from "react-router-dom";
import resepData from "../data/resep";

export default function RecipeDetail() {
  const { id } = useParams();
  const resep = resepData.find((r) => r.id === Number(id));

  if (!resep) return <div>Resep tidak ditemukan</div>;

  return (
    <div style={{padding:"1rem"}}>
      <Link to="/">← Kembali ke Daftar Resep</Link>
      <h1>{resep.nama}</h1>
      <img src={resep.gambar} alt={resep.nama} style={{maxWidth: "400px"}} />
      <p><b>Deskripsi:</b> {resep.deskripsi}</p>
      <h3>Bahan:</h3>
      <ul>
        {resep.bahan.map((bahan, idx) => <li key={idx}>{bahan}</li>)}
      </ul>
      <h3>Langkah-langkah:</h3>
      <ol>
        {resep.langkah.map((langkah, idx) => <li key={idx}>{langkah}</li>)}
      </ol>
    </div>
  );
}