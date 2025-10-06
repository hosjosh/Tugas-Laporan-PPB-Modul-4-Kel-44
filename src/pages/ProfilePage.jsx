import { useState } from 'react';

export default function ProfilePage() {
  // Dummy data user, bisa diganti dari API/backend
  const [profile, setProfile] = useState({
    namaLengkap: 'josh jelek ',
    email: 'josh jelek123@email.com',
    nomorHp: '081234567890'
  });

  // Form edit
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditing(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(form);
    setEditing(false);
  };

  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Profile Pengguna
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {!editing ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Nama Lengkap:</label>
                <p className="text-gray-800">{profile.namaLengkap}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Alamat Email:</label>
                <p className="text-gray-800">{profile.email}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Nomor HP:</label>
                <p className="text-gray-800">{profile.nomorHp}</p>
              </div>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={handleEdit}
              >
                Edit Profil
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Nama Lengkap:</label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={form.namaLengkap}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Alamat Email:</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Nomor HP:</label>
                <input
                  type="text"
                  name="nomorHp"
                  value={form.nomorHp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                  onClick={handleCancel}
                >
                  Batal
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}