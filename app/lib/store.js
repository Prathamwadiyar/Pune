import { create } from 'zustand';

const useStore = create((set, get) => ({
  // Language
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  
  // Auth state
  isAuthenticated: false,
  user: null,
  setAuth: (isAuthenticated, user) => set({ isAuthenticated, user }),
  
  // Onboarding
  onboardingStep: 0,
  onboardingComplete: false,
  setOnboardingStep: (step) => set({ onboardingStep: step }),
  setOnboardingComplete: (complete) => set({ onboardingComplete: complete }),
  
  // User Profile
  profile: {
    // Identity
    fullName: '',
    age: '',
    gender: '',
    state: '',
    district: '',
    blockVillage: '',
    community: '',
    religion: '',
    maritalStatus: '',
    
    // Household
    familyMembers: 1,
    isHeadOfHousehold: null,
    hasDisability: null,
    disabilityType: '',
    udidNumber: '',
    hasSeniorCitizen: null,
    
    // Economic
    occupation: '',
    annualIncome: '',
    hasBplCard: null,
    rationCardType: '',
    ownsLand: null,
    landAcres: '',
    landType: '',
    ownsHome: '',
    houseType: '',
    ownsVehicle: '',
    bankAccount: '',
    
    // Documents
    documents: [],
    
    // Current Schemes
    currentSchemes: [],
    
    // Goals
    goals: [],
  },
  
  updateProfile: (updates) => set((state) => ({
    profile: { ...state.profile, ...updates }
  })),
  
  resetProfile: () => set({
    profile: {
      fullName: '', age: '', gender: '', state: '', district: '',
      blockVillage: '', community: '', religion: '', maritalStatus: '',
      familyMembers: 1, isHeadOfHousehold: null, hasDisability: null,
      disabilityType: '', udidNumber: '', hasSeniorCitizen: null,
      occupation: '', annualIncome: '', hasBplCard: null, rationCardType: '',
      ownsLand: null, landAcres: '', landType: '', ownsHome: '',
      houseType: '', ownsVehicle: '', bankAccount: '',
      documents: [], currentSchemes: [], goals: [],
    },
    onboardingStep: 0,
    onboardingComplete: false,
  }),
  
  // Results
  results: null,
  isAnalyzing: false,
  analysisError: null,
  setResults: (results) => set({ results }),
  setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  setAnalysisError: (error) => set({ analysisError: error }),
  
  // Chat
  chatMessages: [],
  isChatLoading: false,
  addChatMessage: (message) => set((state) => ({
    chatMessages: [...state.chatMessages, message]
  })),
  setChatLoading: (loading) => set({ isChatLoading: loading }),
  clearChat: () => set({ chatMessages: [] }),
  
  // UI
  sidebarOpen: false,
  chatOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),
  setChatOpen: (open) => set({ chatOpen: open }),
}));

export default useStore;
