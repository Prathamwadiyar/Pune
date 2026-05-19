'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStore from '../lib/store';
import { t, languages } from '../lib/translations';
import { Menu, X, Globe, Home, LayoutDashboard, MessageCircle, FileText, Settings, ChevronDown } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, sidebarOpen, toggleSidebar } = useStore();
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t(language, 'navHome'), icon: Home },
    { href: '/dashboard', label: t(language, 'navDashboard'), icon: LayoutDashboard },
    { href: '/schemes', label: t(language, 'navSchemes'), icon: FileText },
    { href: '/chat', label: t(language, 'navChat'), icon: MessageCircle },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(9, 10, 21, 0.65)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between px-4 lg:px-8" style={{ height: 'var(--header-height)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img src="/logo.jpg" alt="Jan Saathi Logo" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
            <div>
              <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Jan Saathi</span>
              <span className="hidden sm:inline text-xs ml-2" style={{ color: 'var(--text-secondary)' }}>{t(language, 'tagline')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all no-underline"
                style={{
                  color: pathname === item.href ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  background: pathname === item.href ? 'rgba(36, 150, 255, 0.1)' : 'transparent',
                }}>
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language selector */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="btn btn-ghost btn-sm flex items-center gap-1" style={{ color: 'var(--text-primary)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', cursor: 'pointer', padding: '6px 12px', borderRadius: 8 }} aria-label="Select language">
                <Globe size={16} style={{ color: 'var(--accent-secondary)' }} />
                <span className="hidden sm:inline text-xs">{languages.find(l => l.code === language)?.nativeName}</span>
                <ChevronDown size={14} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 py-2 rounded-xl shadow-xl z-50" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', minWidth: 180 }}>
                  {languages.map(lang => (
                    <button key={lang.code} onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors"
                      style={{ 
                        color: language === lang.code ? 'var(--accent-primary)' : 'var(--text-secondary)',
                        background: language === lang.code ? 'rgba(36, 150, 255, 0.1)' : 'transparent',
                        border: 'none', cursor: 'pointer',
                      }}>
                      <span>{lang.flag}</span>
                      <span className="font-medium">{lang.nativeName}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile menu */}
            <button onClick={toggleSidebar} className="md:hidden btn btn-ghost btn-sm" style={{ color: 'var(--text-primary)' }} aria-label="Menu">
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={toggleSidebar} />
          <div className="absolute right-0 top-0 bottom-0 w-72 shadow-xl animate-slide-left" style={{ background: 'var(--bg-secondary)', borderLeft: '1px solid var(--border)', paddingTop: 'var(--header-height)' }}>
            <nav className="p-4 flex flex-col gap-1">
              {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={toggleSidebar}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all"
                  style={{
                    color: pathname === item.href ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    background: pathname === item.href ? 'rgba(36, 150, 255, 0.1)' : 'transparent',
                  }}>
                  <item.icon size={18} />
                  {item.label}
                </Link>
              ))}
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '8px 0' }} />
              <Link href="/settings" onClick={toggleSidebar} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm no-underline transition-all" style={{ color: 'var(--text-secondary)' }}>
                <Settings size={18} style={{ color: 'var(--text-muted)' }} />
                {t(language, 'navSettings')}
              </Link>
            </nav>
          </div>
        </div>
      )}
      {langOpen && <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />}
    </>
  );
}
