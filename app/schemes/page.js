'use client';
import { useState } from 'react';
import Link from 'next/link';
import useStore from '../lib/store';
import { t } from '../lib/translations';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Search, Filter, ChevronDown, Landmark, Stethoscope, GraduationCap, Home, Tractor, Briefcase, Baby, Shield } from 'lucide-react';

const allSchemes = [
  { id: 'pm-kisan', name: 'PM-KISAN', nameHi: 'पीएम-किसान', ministry: 'Ministry of Agriculture', level: 'Central', category: 'Agriculture', benefit: '₹6,000/year', desc: 'Direct cash of ₹6,000 per year to farmer families, paid in 3 installments of ₹2,000 each.' },
  { id: 'pmfby', name: 'PM Fasal Bima Yojana', nameHi: 'पीएम फसल बीमा', ministry: 'Ministry of Agriculture', level: 'Central', category: 'Agriculture', benefit: 'Crop insurance', desc: 'Low-cost crop insurance. Pay just 2% premium for Kharif, 1.5% for Rabi. Get full compensation for crop damage.' },
  { id: 'ayushman', name: 'Ayushman Bharat (PM-JAY)', nameHi: 'आयुष्मान भारत', ministry: 'Ministry of Health', level: 'Central', category: 'Health', benefit: '₹5 lakh/year', desc: 'Free health insurance of ₹5 lakh per year per family for secondary and tertiary care hospitalization.' },
  { id: 'pmay-g', name: 'PM Awas Yojana (Gramin)', nameHi: 'पीएम आवास (ग्रामीण)', ministry: 'Ministry of Rural Development', level: 'Central', category: 'Housing', benefit: '₹1.30 lakh', desc: 'Financial help to build a pucca house for families without proper shelter in rural areas.' },
  { id: 'pmay-u', name: 'PM Awas Yojana (Urban)', nameHi: 'पीएम आवास (शहरी)', ministry: 'Ministry of Housing', level: 'Central', category: 'Housing', benefit: 'Interest subsidy', desc: 'Interest subsidy on home loans for economically weaker sections in urban areas.' },
  { id: 'mgnrega', name: 'MGNREGA', nameHi: 'मनरेगा', ministry: 'Ministry of Rural Development', level: 'Central', category: 'Employment', benefit: '100 days work', desc: 'Guaranteed 100 days of paid employment per year for every rural household.' },
  { id: 'ujjwala', name: 'PM Ujjwala Yojana', nameHi: 'पीएम उज्ज्वला', ministry: 'Ministry of Petroleum', level: 'Central', category: 'Women', benefit: 'Free LPG', desc: 'Free LPG gas connection for women from below-poverty-line families.' },
  { id: 'mudra', name: 'PM Mudra Yojana', nameHi: 'पीएम मुद्रा', ministry: 'Ministry of Finance', level: 'Central', category: 'Business', benefit: 'Up to ₹10 lakh', desc: 'Collateral-free loans up to ₹10 lakh for small businesses. Three categories: Shishu, Kishore, Tarun.' },
  { id: 'sukanya', name: 'Sukanya Samriddhi Yojana', nameHi: 'सुकन्या समृद्धि', ministry: 'Ministry of Finance', level: 'Central', category: 'Women', benefit: 'High interest savings', desc: 'Special savings scheme for girl children (under 10) with one of the highest interest rates among small savings schemes.' },
  { id: 'atal-pension', name: 'Atal Pension Yojana', nameHi: 'अटल पेंशन', ministry: 'Ministry of Finance', level: 'Central', category: 'Pension', benefit: '₹1,000-5,000/month', desc: 'Guaranteed pension of ₹1,000 to ₹5,000 per month after age 60. For ages 18-40.' },
  { id: 'pmjjby', name: 'PM Jeevan Jyoti Bima Yojana', nameHi: 'पीएम जीवन ज्योति बीमा', ministry: 'Ministry of Finance', level: 'Central', category: 'Insurance', benefit: '₹2 lakh insurance', desc: 'Life insurance cover of ₹2 lakh at just ₹436 per year. For ages 18-50.' },
  { id: 'pmsby', name: 'PM Suraksha Bima Yojana', nameHi: 'पीएम सुरक्षा बीमा', ministry: 'Ministry of Finance', level: 'Central', category: 'Insurance', benefit: '₹2 lakh insurance', desc: 'Accident insurance cover of ₹2 lakh at just ₹20 per year.' },
  { id: 'e-shram', name: 'e-Shram', nameHi: 'ई-श्रम', ministry: 'Ministry of Labour', level: 'Central', category: 'Employment', benefit: 'Worker ID + Insurance', desc: 'Registration portal for unorganized workers. Provides identity, insurance, and access to welfare schemes.' },
  { id: 'vishwakarma', name: 'PM Vishwakarma', nameHi: 'पीएम विश्वकर्मा', ministry: 'Ministry of MSME', level: 'Central', category: 'Business', benefit: 'Training + Loans', desc: 'For traditional artisans and craftspeople. Free training, toolkit, and loans up to ₹3 lakh at 5% interest.' },
  { id: 'kcc', name: 'Kisan Credit Card', nameHi: 'किसान क्रेडिट कार्ड', ministry: 'Ministry of Agriculture', level: 'Central', category: 'Agriculture', benefit: 'Low-interest credit', desc: 'Credit facility for farmers at 4% interest (with subsidy) for crop production and allied activities.' },
  { id: 'svanidhi', name: 'PM SVANidhi', nameHi: 'पीएम स्वनिधि', ministry: 'Ministry of Housing', level: 'Central', category: 'Business', benefit: 'Up to ₹50,000', desc: 'Micro-credit up to ₹50,000 for street vendors. No collateral needed.' },
];

const categories = [
  { key: 'all', label: 'All Schemes', icon: Landmark },
  { key: 'Agriculture', label: 'Agriculture', icon: Tractor },
  { key: 'Health', label: 'Health', icon: Stethoscope },
  { key: 'Housing', label: 'Housing', icon: Home },
  { key: 'Education', label: 'Education', icon: GraduationCap },
  { key: 'Employment', label: 'Employment', icon: Briefcase },
  { key: 'Women', label: 'Women & Children', icon: Baby },
  { key: 'Business', label: 'Business', icon: Briefcase },
  { key: 'Insurance', label: 'Insurance', icon: Shield },
];

export default function SchemesPage() {
  const { language } = useStore();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [level, setLevel] = useState('all');

  const filtered = allSchemes.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'all' || s.category === category;
    const matchLevel = level === 'all' || s.level === level;
    return matchSearch && matchCat && matchLevel;
  });

  return (
    <div className="min-h-screen" style={{ background: 'var(--neutral-50)', paddingBottom: 80 }}>
      <Header />
      <div style={{ paddingTop: 80, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 16, paddingRight: 16 }}>
        <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--neutral-900)' }}>
          {t(language, 'navSchemes')}
        </h1>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--neutral-400)' }} />
          <input className="input" style={{ paddingLeft: 44 }} placeholder="Search schemes by name or keyword..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button key={cat.key} onClick={() => setCategory(cat.key)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0"
              style={{
                background: category === cat.key ? 'var(--primary-500)' : 'white',
                color: category === cat.key ? 'white' : 'var(--neutral-600)',
                border: `1px solid ${category === cat.key ? 'var(--primary-500)' : 'var(--neutral-200)'}`,
                cursor: 'pointer',
              }}>
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <p className="text-sm mb-4" style={{ color: 'var(--neutral-500)' }}>{filtered.length} schemes found</p>
        
        <div className="grid gap-4">
          {filtered.map(scheme => (
            <div key={scheme.id} className="card p-5 animate-fade-in">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge" style={{ background: scheme.level === 'Central' ? 'var(--primary-50)' : 'var(--accent-50)', color: scheme.level === 'Central' ? 'var(--primary-700)' : 'var(--accent-700)' }}>{scheme.level}</span>
                    <span className="badge" style={{ background: 'var(--neutral-100)', color: 'var(--neutral-600)' }}>{scheme.category}</span>
                  </div>
                  <h3 className="font-bold" style={{ color: 'var(--neutral-900)' }}>{language === 'hi' ? scheme.nameHi : scheme.name}</h3>
                  <p className="text-xs" style={{ color: 'var(--neutral-500)' }}>{scheme.ministry}</p>
                </div>
                <span className="text-sm font-bold flex-shrink-0" style={{ color: 'var(--success-600)' }}>{scheme.benefit}</span>
              </div>
              <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>{scheme.desc}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg mb-2" style={{ color: 'var(--neutral-400)' }}>🔍</p>
            <p className="text-sm" style={{ color: 'var(--neutral-500)' }}>No schemes found. Try a different search.</p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
