import React from 'react';
import { useDusun } from '../../context/DusunContext';
import { X, Award, Phone, User } from 'lucide-react';

export const TokohDetailModal: React.FC = () => {
    const { selectedTokohModal, setSelectedTokohModal } = useDusun();

    if (!selectedTokohModal) return null;

    const tokoh = selectedTokohModal;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col my-auto">
                {/* Close Button */}
                <button
                    onClick={() => setSelectedTokohModal(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition-all cursor-pointer z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Modal Header Banner */}
                <div className="relative h-48 sm:h-56 bg-emerald-950 shrink-0">
                    <div className="absolute inset-0 bg-radial-gradient from-emerald-900 to-slate-950 opacity-90"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white flex gap-4 items-end">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-md shrink-0 bg-slate-100">
                            <img
                                src={tokoh.foto || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'}
                                alt={tokoh.nama}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-1">
                            <span className="inline-flex items-center gap-1 bg-amber-600 text-white font-semibold text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full">
                                <Award className="w-3 h-3" />
                                Tokoh Kehormatan
                            </span>
                            <h2 className="text-base sm:text-xl font-bold text-white leading-tight">
                                {tokoh.nama}
                            </h2>
                            <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                                {tokoh.peran}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    <div className="space-y-3 pt-2">
                        <h3 className="font-bold text-slate-950 text-sm sm:text-base flex items-center gap-1.5 border-b border-slate-100 pb-2">
                            <User className="w-4 h-4 text-emerald-700" />
                            Biografi & Rekam Jejak Perjuangan
                        </h3>
                        <div className="text-slate-800 space-y-3 whitespace-pre-line leading-relaxed">
                            {tokoh.biodata.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {tokoh.kontak && tokoh.kontak !== '-' && (
                        <div className="bg-emerald-50/55 p-4 rounded-xl border border-emerald-100 space-y-2 mt-4">
                            <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider">
                                Hubungi Tokoh / Pengelola Informasi:
                            </h4>
                            <p className="text-xs text-slate-600">
                                Silakan hubungi kontak berikut untuk konfirmasi atau wawancara lebih mendalam seputar sejarah dusun.
                            </p>
                            <div className="pt-1">
                                <a
                                    href={`https://wa.me/${tokoh.kontak.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-emerald-900 font-bold hover:underline"
                                >
                                    <Phone className="w-3.5 h-3.5 text-emerald-700" /> WhatsApp: {tokoh.kontak}
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Award className="w-4 h-4 text-emerald-700" />
                        Portal Tokoh & Sejarawan Tosari
                    </div>

                    <button
                        onClick={() => setSelectedTokohModal(null)}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};
