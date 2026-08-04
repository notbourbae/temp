import React from 'react';
import { useDusun } from '../../context/DusunContext';
import { X, Users, MapPin, Phone, User, Crown } from 'lucide-react';

export const OrganisasiDetailModal: React.FC = () => {
  const { selectedOrganisasiModal, setSelectedOrganisasiModal } = useDusun();

  if (!selectedOrganisasiModal) return null;

  const org = selectedOrganisasiModal;
  const anggota = org.anggota || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col my-auto">
        {/* Close Button */}
        <button
          onClick={() => setSelectedOrganisasiModal(null)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-all cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white px-6 py-6 sm:px-8 shrink-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-teal-600 text-white font-semibold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Users className="w-3 h-3" />
              {org.kategori}
            </span>
            {org.jumlahAnggota && (
              <span className="text-[11px] text-teal-100 font-medium">{org.jumlahAnggota}</span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mt-3">
            {org.nama}
          </h2>
          <div className="flex items-center gap-4 text-xs text-teal-100 pt-2">
            {org.ketua && (
              <span className="flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-300" /> Ketua: {org.ketua}
              </span>
            )}
            {org.lokasiAtauKantor && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-300" /> {org.lokasiAtauKantor}
              </span>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {org.deskripsi && (
            <div className="space-y-3 pt-1 text-slate-800">
              {org.deskripsi.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-teal-700" />
              Daftar Anggota ({anggota.length})
            </h3>

            {anggota.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
                <User className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-500 text-xs">
                  Belum ada data anggota untuk organisasi ini.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {anggota.map((m) => {
                  const isKetua = m.jabatan.toLowerCase().includes('ketua');
                  return (
                    <div key={m.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col justify-center min-h-[72px]">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-900 text-sm truncate">{m.nama}</h4>
                        <p className="text-[11px] font-semibold text-teal-700 mt-0.5">{m.jabatan}</p>
                        {isKetua && m.kontak && (
                          <div className="mt-2 text-xs text-slate-600 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="font-medium text-slate-700">
                              No. HP/WA: <span className="font-bold text-teal-800">{m.kontak}</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Users className="w-4 h-4 text-teal-700" />
            Lembaga & Organisasi Kemasyarakatan Dusun
          </div>

          <button
            onClick={() => setSelectedOrganisasiModal(null)}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2 rounded-xl text-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
