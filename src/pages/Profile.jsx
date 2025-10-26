import React from 'react';

const kelompok = [
  { nama: "SYASHA CHIKAL ALDILA", nim: "21120123140154" },
  { nama: "GAVRILA SAMANA AHMAD", nim: "21120123130075" },
  { nama: "INSANI AMALIA RIARTA", nim: "21120123140149" },
  { nama: "SATRIA BINTANG SANGAJI", nim: "21120123140169" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center py-10">
      <div className="bg-white/70 rounded-2xl shadow-xl max-w-lg w-full px-8 py-10">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-4">Profil Kelompok Praktikum 44</h1>
        <p className="text-center text-slate-600 mb-6">
          Berikut adalah informasi anggota kelompok praktikum PPB - MODUL 4:
        </p>
        <div className="divide-y divide-blue-100">
          {kelompok.map((anggota, idx) => (
            <div
              key={anggota.nim}
              className="flex justify-between items-center py-4"
            >
              <span className="font-semibold text-gray-800">{anggota.nama}</span>
              <span className="text-blue-600 font-mono px-3 py-1 rounded bg-blue-50">{anggota.nim}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}