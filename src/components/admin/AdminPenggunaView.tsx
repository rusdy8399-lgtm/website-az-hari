'use client';

import React, { useState } from 'react';
import {
  Users,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle2,
  Shield,
  X,
  Save,
  UserCheck,
} from 'lucide-react';
import { adminUsersMock } from '@/mock';
import { AdminUser } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminPenggunaView: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>(adminUsersMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<AdminUser>>({});

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (u: AdminUser) => {
    setSelectedUser(u);
    setFormData({ ...u });
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleCreateNew = () => {
    const newUser: Partial<AdminUser> = {
      id: `usr-${Date.now()}`,
      name: '',
      email: '',
      role: 'ADMIN_YAYASAN',
      status: 'Aktif',
      lastLogin: '-',
    };
    setSelectedUser(null);
    setFormData(newUser);
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Mohon isi Nama Lengkap dan Email pengguna.');
      return;
    }

    if (selectedUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === selectedUser.id ? ({ ...u, ...formData } as AdminUser) : u))
      );
    } else {
      setUsers((prev) => [formData as AdminUser, ...prev]);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsEditing(false);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus akun pengguna ini?')) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      if (selectedUser?.id === id) {
        setIsEditing(false);
        setSelectedUser(null);
      }
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'Super Admin';
      case 'ADMIN_YAYASAN':
        return 'Admin Yayasan';
      case 'PANITIA_PPDB':
        return 'Panitia PPDB';
      case 'EDITOR':
        return 'Editor Berita';
      default:
        return role;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Manajemen Pengguna & Hak Akses
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Kelola akun pengelola CMS, panitia verifikasi PPDB, dan tim redaksi yayasan
          </p>
        </div>
        <Button
          onClick={handleCreateNew}
          variant="primary"
          size="md"
          leftIcon={<Plus className="w-4 h-4" />}
          className="font-bold shadow-sm"
        >
          Tambah Pengguna
        </Button>
      </div>

      {isEditing ? (
        /* Edit / Create Form */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                {selectedUser ? `Edit Pengguna: ${selectedUser.name}` : 'Tambah Pengguna Baru'}
              </h2>
              <p className="text-xs text-gray-500">Form otorisasi akun pengelola sistem</p>
            </div>
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {savedSuccess && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Data pengguna berhasil disimpan!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Ustadz Ahmad Fauzi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Alamat Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="admin@alazharmandiri.org"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Peran / Role Akses</label>
                <select
                  value={formData.role || 'ADMIN_YAYASAN'}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                >
                  <option value="SUPER_ADMIN">Super Admin (Akses Penuh)</option>
                  <option value="ADMIN_YAYASAN">Admin Yayasan (Konten & PPDB)</option>
                  <option value="PANITIA_PPDB">Panitia PPDB (Hanya Verifikasi PPDB)</option>
                  <option value="EDITOR">Editor (Hanya Berita & Galeri)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Status Akun</label>
                <select
                  value={formData.status || 'Aktif'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                >
                  <option value="Aktif">Aktif (Dapat Login)</option>
                  <option value="Nonaktif">Nonaktif (Diblokir)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <Button type="button" variant="outline" size="md" onClick={() => setIsEditing(false)}>
                Batal
              </Button>
              <Button type="submit" variant="primary" size="md" leftIcon={<Save className="w-4 h-4" />}>
                Simpan Pengguna
              </Button>
            </div>
          </form>
        </div>
      ) : (
        /* Table View */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari nama atau email pengguna..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
              />
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Total {filtered.length} Pengguna Terdaftar
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Nama Pengguna</th>
                  <th className="py-3 px-3">Email</th>
                  <th className="py-3 px-3">Peran (Role)</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Login Terakhir</th>
                  <th className="py-3 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50/70 transition">
                    <td className="py-3.5 px-3 font-semibold text-[#102A43]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#064E3B] flex items-center justify-center font-bold text-xs">
                          {u.name.charAt(0)}
                        </div>
                        <span>{u.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-gray-600 font-mono text-xs">{u.email}</td>
                    <td className="py-3.5 px-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                        <Shield className="w-3 h-3 text-[#064E3B]" />
                        <span>{getRoleLabel(u.role)}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          u.status === 'Aktif' || u.status === 'active'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {u.status === 'Aktif' || u.status === 'active' ? 'Aktif' : 'Nonaktif'}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-gray-500 text-xs">{u.lastLogin || '-'}</td>
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleEdit(u)}
                          className="p-1.5 text-gray-400 hover:text-[#064E3B] transition"
                          title="Edit Pengguna"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(u.id)}
                          className="p-1.5 text-gray-400 hover:text-rose-600 transition"
                          title="Hapus Pengguna"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
