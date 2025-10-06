import React from "react";

export default function Profile() {
  // Data profile bisa disesuaikan
  return (
    <div style={{padding: "1rem"}}>
      <h1>Profil Pengguna</h1>
      <img
        src="https://avatars.githubusercontent.com/u/3369400?v=4"
        alt="Avatar"
        width={100}
        style={{borderRadius: "50%"}}
      />
      <p><b>Nama:</b> Josh Ganteng</p>
      <p><b>Email:</b> josgtg@email.com</p>
      <p><b>Bio:</b> Mahasiswa Praktikum  4</p>
    </div>
  );
}