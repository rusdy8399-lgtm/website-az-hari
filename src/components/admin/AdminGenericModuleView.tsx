'use client';

import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

interface AdminGenericModuleViewProps<T> {
  title: string;
  description: string;
  addButtonLabel?: string;
  items: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
}

export function AdminGenericModuleView<T>({
  title,
  description,
  addButtonLabel,
  items,
  columns,
  keyExtractor,
}: AdminGenericModuleViewProps<T>) {
  const [search, setSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{description}</p>
        </div>

        {addButtonLabel && (
          <Button
            onClick={() => showToast(`Modal formulir tambah "${addButtonLabel}" dibuka (Simulasi Phase 1)`)}
            variant="primary"
            size="sm"
            leftIcon={<Plus className="w-4 h-4" />}
          >
            {addButtonLabel}
          </Button>
        )}
      </div>

      {toastMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Table Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-subtle overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari data..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B] bg-[#FAF9F5]"
            />
          </div>
          <span className="text-xs text-gray-400">Total {items.length} data</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-500 uppercase tracking-wider text-[11px]">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={`py-3.5 px-4 ${
                      col.align === 'right'
                        ? 'text-right'
                        : col.align === 'center'
                        ? 'text-center'
                        : 'text-left'
                    }`}
                  >
                    {col.header}
                  </th>
                ))}
                <th className="py-3.5 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={keyExtractor(item)} className="hover:bg-gray-50/80 transition">
                  {columns.map((col, idx) => (
                    <td
                      key={idx}
                      className={`py-3.5 px-4 ${
                        col.align === 'right'
                          ? 'text-right'
                          : col.align === 'center'
                          ? 'text-center'
                          : 'text-left'
                      }`}
                    >
                      {col.accessor(item)}
                    </td>
                  ))}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => showToast('Simulasi pratinjau / edit data')}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-[#064E3B] hover:bg-emerald-50 transition"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => showToast('Simulasi hapus data')}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Hapus"
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
    </div>
  );
}
