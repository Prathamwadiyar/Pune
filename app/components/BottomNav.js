'use client';
import Link from 'next/link';
import useStore from '../lib/store';
import { t } from '../lib/translations';
import { Home, LayoutDashboard, MessageCircle, FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const { language } = useStore();
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/onboarding') return null;

  const items = [
    { href: '/dashboard', label: t(language, 'navDashboard'), icon: LayoutDashboard },
    { href: '/schemes', label: t(language, 'navSchemes'), icon: FileText },
    { href: '/chat', label: t(language, 'navChat'), icon: MessageCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden" style={{ background: 'rgba(15, 28, 46, 0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid var(--border)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex items-center justify-around py-2">
        {items.map(item => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-lg no-underline transition-all"
              style={{ color: active ? 'var(--accent-primary)' : 'var(--text-secondary)', minWidth: 64, minHeight: 44 }}>
              <item.icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
