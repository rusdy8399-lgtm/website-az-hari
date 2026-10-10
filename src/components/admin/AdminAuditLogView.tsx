'use client';

import React, { useState } from 'react';
import {
  History,
  Search,
  Filter,
  Shield,
  Clock,
  UserCheck,
  FileText,
} from 'lucide-react';
import { auditLogsMock } from '@/mock';
import { AuditLogItem } from '@/types';

export const AdminAuditLogView: React.FC = () => {
  const [logs, setLogs] = useState<AuditLogItem[]>(auditLogsMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [moduleFilter, setModuleFilter] = useState('ALL');

  const modules = Array.from(new Set(logs.map((l) => l.module)));

  const filtered = logs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMod = moduleFilter === 'ALL' || log.module === moduleFilter;
    return matchesSearch && matchesMod;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Audit Log Aktivitas
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Catatan rekam jejak aktivitas pengguna dan perubahan data di CMS
          </p>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari aktivitas, nama pengguna, atau catatan..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setModuleFilter('ALL')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                moduleFilter === 'ALL'
                  ? 'bg-[#064E3B] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semua Modul
            </button>
            {modules.map((m) => (
              <button
                key={m}
                onClick={() => setModuleFilter(m)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                  moduleFilter === m
                    ? 'bg-[#064E3B] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Waktu</th>
                <th className="py-3 px-3">Pengguna</th>
                <th className="py-3 px-3">Modul</th>
                <th className="py-3 px-3">Aksi / Aktivitas</th>
                <th className="py-3 px-3">Rincian Perubahan</th>
                <th className="py-3 px-3">IP Address</th>
                <th className="py-3 px-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50/70 transition">
                  <td className="py-3.5 px-3 font-mono text-xs text-gray-500 whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5 px-3">
                    <div>
                      <p className="font-bold text-[#102A43]">{log.userName}</p>
                      <p className="text-[10px] text-gray-400">{log.userRole}</p>
                    </div>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold">
                      {log.module}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 font-semibold text-[#064E3B]">{log.action}</td>
                  <td className="py-3.5 px-3 text-gray-600 max-w-xs truncate" title={log.details}>
                    {log.details}
                  </td>
                  <td className="py-3.5 px-3 font-mono text-[11px] text-gray-400">
                    {log.ipAddress || '-'}
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        log.status === 'success'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {log.status === 'success' ? 'Sukses' : 'Gagal'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
