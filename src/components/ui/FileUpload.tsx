'use client';

import React, { useRef, useState } from 'react';
import { UploadCloud, CheckCircle2, FileText, Trash2 } from 'lucide-react';

interface FileUploadProps {
  label: string;
  accept?: string;
  required?: boolean;
  maxSizeMb?: number;
  value?: string;
  onChange?: (fileName: string) => void;
  helperText?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = '.pdf,.jpg,.jpeg,.png',
  required = false,
  maxSizeMb = 2,
  value,
  onChange,
  helperText,
}) => {
  const [fileName, setFileName] = useState<string>(value || '');
  const [fileSize, setFileSize] = useState<string>('');
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > maxSizeMb * 1024 * 1024) {
      setError(`Ukuran file melebihi batas maksimal (${maxSizeMb} MB)`);
      return;
    }

    setError('');
    const sizeStr = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
    setFileName(file.name);
    setFileSize(sizeStr);
    if (onChange) onChange(file.name);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName('');
    setFileSize('');
    setError('');
    if (inputRef.current) inputRef.current.value = '';
    if (onChange) onChange('');
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-semibold text-[#102A43]">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <span className="text-xs text-gray-500">Maks {maxSizeMb}MB</span>
      </div>

      <input
        type="file"
        ref={inputRef}
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {fileName ? (
        <div className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/50">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 rounded-lg bg-emerald-100 text-[#064E3B] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#064E3B] truncate">{fileName}</p>
              <div className="flex items-center gap-2 text-xs text-emerald-700">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Siap diunggah
                </span>
                {fileSize && <span>• {fileSize}</span>}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
            title="Hapus file"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 hover:border-[#064E3B] bg-white hover:bg-emerald-50/30 rounded-xl p-4 text-center cursor-pointer transition flex flex-col items-center justify-center gap-2 group"
        >
          <div className="p-2.5 rounded-full bg-gray-50 group-hover:bg-emerald-100/60 text-gray-400 group-hover:text-[#064E3B] transition">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#102A43] group-hover:text-[#064E3B]">
              Klik untuk memilih berkas atau seret ke sini
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Format: {accept.replace(/\./g, ' ').toUpperCase()}
            </p>
          </div>
        </div>
      )}

      {error ? (
        <p className="mt-1 text-xs text-rose-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-xs text-gray-400">{helperText}</p>
      ) : null}
    </div>
  );
};
