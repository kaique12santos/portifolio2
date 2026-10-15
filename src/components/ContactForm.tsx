import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Terminal, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [apiResponse, setApiResponse] = useState<any | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);

    // Simulate standard API Call to a contact endpoint
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      const randomId = 'msg_' + Math.random().toString(36).substring(2, 11);
      setApiResponse({
        status: 201,
        statusText: 'Created',
        timestamp: new Date().toISOString(),
        data: {
          id: randomId,
          recipient: 'kaiqueyakushi@gmail.com',
          sender: {
            name: formData.name,
            email: formData.email,
            company: formData.company || 'N/A',
          },
          messageLength: formData.message.length,
          deliveryStatus: 'queued_for_delivery',
        },
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', company: '', message: '' });
    setSuccess(false);
    setApiResponse(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="contact-backdrop"
            className="absolute inset-0 bg-[#060606]/80 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            id="contact-modal-container"
            className="bg-[#0C0C0C] rounded-none max-w-lg w-full shadow-2xl relative z-10 border border-[#222] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-[#111] border-b border-[#222] p-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none">
                  <Terminal size={16} />
                </span>
                <span className="font-mono text-xs tracking-wider font-bold text-gray-300">POST /api/v1/contact</span>
              </div>
              <button
                id="contact-close-btn"
                onClick={onClose}
                className="p-1.5 text-gray-500 hover:text-white hover:bg-[#1A1A1A] rounded-none transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6">
              {!success ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                      Nome <span className="text-[#FF3B00]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Kaique Caitano"
                      className="w-full px-4 py-2.5 bg-[#111] border border-[#222] rounded-none focus:outline-hidden focus:border-[#FF3B00] focus:bg-[#141414] text-xs text-white tracking-wide transition-all placeholder:text-zinc-600"
                      disabled={loading}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                        E-mail <span className="text-[#FF3B00]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-2.5 bg-[#111] border border-[#222] rounded-none focus:outline-hidden focus:border-[#FF3B00] focus:bg-[#141414] text-xs text-white tracking-wide transition-all placeholder:text-zinc-600"
                        disabled={loading}
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="company" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                        Empresa / Organização
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ex: Fatec, Google"
                        className="w-full px-4 py-2.5 bg-[#111] border border-[#222] rounded-none focus:outline-hidden focus:border-[#FF3B00] focus:bg-[#141414] text-xs text-white tracking-wide transition-all placeholder:text-zinc-600"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                      Mensagem <span className="text-[#FF3B00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Olá Kaique, gostaria de conversar sobre uma oportunidade de..."
                      className="w-full px-4 py-2.5 bg-[#111] border border-[#222] rounded-none focus:outline-hidden focus:border-[#FF3B00] focus:bg-[#141414] text-xs text-white tracking-wide transition-all resize-none placeholder:text-zinc-600"
                      disabled={loading}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-[#FF3B00] bg-[#FF3B00]/10 p-3 rounded-none text-xs font-semibold border border-[#FF3B00]/20 font-mono">
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      id="contact-cancel-btn"
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 border border-[#222] hover:border-[#444] text-gray-400 text-xs tracking-widest uppercase font-bold font-mono rounded-none transition-colors"
                      disabled={loading}
                    >
                      Cancelar
                    </button>
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 bg-[#FF3B00] hover:bg-white hover:text-black text-white rounded-none text-xs tracking-widest uppercase font-bold font-mono shadow-xs transition-colors"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          Enviar Requisição
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 bg-[#FF3B00]/10 text-[#FF3B00] rounded-none flex items-center justify-center mx-auto border border-[#FF3B00]/20">
                    <CheckCircle2 size={28} />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl font-light italic text-white">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Sua requisição foi recebida com sucesso. Responderei o mais rápido possível!
                    </p>
                  </div>

                  {/* REST API response layout preview for developers */}
                  {apiResponse && (
                    <div className="bg-[#050505] text-slate-100 rounded-none p-4 text-left font-mono text-[11px] border border-[#222] overflow-x-auto shadow-inner max-h-[220px]">
                      <div className="flex justify-between items-center border-b border-[#222] pb-2 mb-2 text-slate-400">
                        <span>HTTP/1.1 {apiResponse.status} {apiResponse.statusText}</span>
                        <span className="text-[9px] tracking-wider uppercase text-[#FF3B00]">JSON Response</span>
                      </div>
                      <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                        {JSON.stringify(apiResponse, null, 2)}
                      </pre>
                    </div>
                  )}

                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      id="contact-another-btn"
                      onClick={resetForm}
                      className="px-5 py-2 border border-[#222] hover:border-[#444] text-gray-400 text-xs tracking-widest uppercase font-bold font-mono rounded-none transition-colors"
                    >
                      Enviar Outra
                    </button>
                    <button
                      id="contact-success-close-btn"
                      onClick={onClose}
                      className="px-5 py-2 bg-[#FF3B00] hover:bg-white hover:text-black text-white rounded-none text-xs tracking-widest uppercase font-bold font-mono transition-colors"
                    >
                      Fechar Janela
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
