'use client';
import useStore from '../lib/store';
import { t, languages } from '../lib/translations';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Globe, Bell, Shield, Trash2, Check } from 'lucide-react';

export default function SettingsPage() {
  const { language, setLanguage, resetProfile } = useStore();
  const T = (key) => t(language, key);

  return (
    <div className="min-h-screen" style={{ background: 'var(--neutral-50)', paddingBottom: 80 }}>
      <Header />
      <div style={{ paddingTop: 80, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 16, paddingRight: 16 }}>
        <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--neutral-900)' }}>{T('navSettings')}</h1>

        {/* Language */}
        <div className="card p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={20} style={{ color: 'var(--primary-500)' }} />
            <h2 className="font-semibold" style={{ color: 'var(--neutral-800)' }}>{T('settingsLanguage')}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {languages.map(lang => (
              <button key={lang.code} onClick={() => setLanguage(lang.code)}
                className="flex items-center gap-2 p-3 rounded-xl border-2 text-sm transition-all"
                style={{
                  borderColor: language === lang.code ? 'var(--primary-500)' : 'var(--neutral-200)',
                  background: language === lang.code ? 'var(--primary-50)' : 'white',
                  cursor: 'pointer',
                }}>
                <span>{lang.flag}</span>
                <span className="font-medium" style={{ color: 'var(--neutral-700)' }}>{lang.nativeName}</span>
                {language === lang.code && <Check size={14} style={{ color: 'var(--primary-500)', marginLeft: 'auto' }} />}
              </button>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="card p-5 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} style={{ color: 'var(--accent-500)' }} />
            <h2 className="font-semibold" style={{ color: 'var(--neutral-800)' }}>{T('settingsPrivacy')}</h2>
          </div>
          <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>{T('privacyDesc')}</p>
        </div>

        {/* Delete data */}
        <div className="card p-5 mb-4" style={{ borderColor: 'var(--danger-200)' }}>
          <div className="flex items-center gap-3 mb-4">
            <Trash2 size={20} style={{ color: 'var(--danger-500)' }} />
            <h2 className="font-semibold" style={{ color: 'var(--danger-600)' }}>{T('settingsDeleteData')}</h2>
          </div>
          <p className="text-sm mb-4" style={{ color: 'var(--neutral-600)' }}>{T('settingsDeleteConfirm')}</p>
          <button onClick={() => { if (confirm(T('settingsDeleteConfirm'))) resetProfile(); }} className="btn btn-sm" style={{ background: 'var(--danger-500)', color: 'white' }}>
            <Trash2 size={14} /> {T('settingsDeleteData')}
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
