import React from 'react';
import { useDusun } from '../context/DusunContext';
import { Building2, ShieldCheck, ArrowUpRight, HelpCircle, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const { dusunInfo, setActiveTab, setActiveInfoSubTab } = useDusun();

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Segment: Brand and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">

          {/* Brand Info (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-950/30">
                <Building2 className="w-5.5 h-5.5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">{dusunInfo.namaDusun}</h2>
                <p className="text-xs text-emerald-400 font-medium tracking-wide mt-0.5">{dusunInfo.slogan}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Portal resmi pelayanan digital masyarakat, publikasi UMKM lokal, promosi objek wisata, dan transparansi potensi sumber daya alam {dusunInfo.namaDusun}, {dusunInfo.desa}.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-950/65 text-emerald-400 border border-emerald-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Sistem Online 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-slate-900/80 text-slate-300 border border-slate-800">
                Terverifikasi Pemdes
              </span>
            </div>
          </div>

          {/* Links (3 columns) */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-5">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Akses Navigasi
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              {[
                { label: 'Beranda Portal', tab: 'beranda', sub: null },
                { label: 'Profil & Demografi', tab: 'informasi', sub: 'profil' },
                { label: 'Struktur Pemerintahan', tab: 'informasi', sub: 'struktur' },
                { label: 'UMKM & Produk Lokal', tab: 'umkm', sub: null },
                { label: 'Destinasi Ekowisata', tab: 'wisata', sub: null },
                { label: 'Potensi Sumber Daya Alam', tab: 'sda', sub: null },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setActiveTab(link.tab as any);
                      if (link.sub) setActiveInfoSubTab(link.sub as any);
                    }}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Area (4 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Layanan Administrator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Pengurus dan pengelola konten informasi dusun dapat masuk ke panel administrator untuk memperbarui berita, verifikasi UMKM, dan statistik.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('admin')}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-slate-100 hover:text-white border border-slate-800 hover:border-emerald-500/30 font-semibold py-3 px-4 rounded-xl text-xs transition-all shadow-xs hover:shadow-lg hover:shadow-emerald-950/25 cursor-pointer active:scale-98"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Kelola Website (Admin)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Footer Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {dusunInfo.namaDusun}, {dusunInfo.desa}. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#site-footer" className="hover:text-slate-400 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> Panduan
            </a>
            <span className="text-slate-800">|</span>
            <a href="#site-footer" className="hover:text-slate-400 transition-colors flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> Bantuan
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

