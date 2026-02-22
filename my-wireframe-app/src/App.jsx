import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, Users, Settings as SettingsIcon, 
  Search, Download, Share2, Plus, ChevronLeft, ChevronRight, 
  User as UserIcon, Bell, CreditCard, Key, Sliders, ChevronDown, 
  TrendingUp, TrendingDown, Filter, Image as ImageIcon
} from 'lucide-react';

// --- REUSABLE UI COMPONENTS ---
const Card = ({ children, className = "" }) => (
  <div className={`border-2 border-slate-900 rounded-2xl bg-white ${className}`}>
    {children}
  </div>
);

const WireLine = ({ width = "w-full", height = "h-2", className = "" }) => (
  <div className={`${width} ${height} bg-slate-200 rounded-full ${className}`} />
);

const WireBox = ({ className = "" }) => (
  <div className={`bg-slate-200 rounded-xl ${className}`} />
);

const TopNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-900">
      <div className="flex items-center gap-6">
        <div className="border-2 border-slate-900 rounded-full px-6 py-2 font-mono text-sm font-bold bg-white">
          WIREFRAME
        </div>
        <div className="flex items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-slate-900 transition-all ${
                  isActive ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon size={16} />
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-200" />
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-200" />
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-100 flex items-center justify-center font-bold text-xs">
          U
        </div>
      </div>
    </div>
  );
};

// --- VIEWS ---

const DashboardView = () => {
  const [timeFilter, setTimeFilter] = useState('1M');
  
  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h1 className="text-3xl font-mono mb-1">Dashboard</h1>
        <p className="text-slate-500 text-sm font-mono">Your overview at a glance</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-4 flex flex-col justify-between h-28 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex justify-between items-start">
              <WireLine width="w-16" />
              {i === 3 ? <TrendingDown size={16} className="text-slate-400" /> : <TrendingUp size={16} className="text-slate-400" />}
            </div>
            <div>
              <div className="bg-slate-200 rounded-lg px-4 py-1 inline-block text-xs font-mono text-slate-500 mb-2">###</div>
              <div className="flex gap-2">
                <WireLine width="w-8" height="h-1" />
                <WireLine width="w-4" height="h-1" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <Card className="col-span-2 p-6">
          <div className="flex justify-between items-center mb-6">
            <WireLine width="w-24" height="h-3" />
            <div className="flex gap-2">
              {['1W', '1M', '3M', '1Y'].map(t => (
                <button 
                  key={t}
                  onClick={() => setTimeFilter(t)}
                  className={`w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold transition-colors ${timeFilter === t ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="h-48 border-2 border-slate-300 rounded-xl bg-slate-50 relative overflow-hidden flex items-end">
             {/* Mock Chart Area */}
             <div className="w-full h-24 bg-slate-300 opacity-50" style={{ clipPath: 'polygon(0 40%, 20% 30%, 40% 40%, 60% 20%, 80% 30%, 100% 10%, 100% 100%, 0% 100%)'}}></div>
             <div className="absolute w-full h-full border-b-2 border-slate-900" style={{ clipPath: 'polygon(0 38%, 20% 28%, 40% 38%, 60% 18%, 80% 28%, 100% 8%, 100% 100%, 0% 100%)'}}></div>
          </div>
          <div className="flex justify-center gap-4 mt-4 items-center">
             <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-900"></div><span className="text-xs font-mono text-slate-500">Primary</span></div>
             <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div><span className="text-xs font-mono text-slate-500">Secondary</span></div>
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="p-6 flex-1">
            <WireLine width="w-16" height="h-3" className="mb-6" />
            {[60, 75, 45, 90].map((val, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="flex justify-between mb-2">
                  <WireLine width="w-12" height="h-2" />
                  <span className="text-xs font-mono">{val}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full w-full">
                  <div className="h-full bg-slate-900 rounded-full" style={{ width: `${val}%` }}></div>
                </div>
              </div>
            ))}
          </Card>
          <Card className="p-6 flex items-center justify-center flex-1">
             <div className="relative w-24 h-24 rounded-full border-8 border-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-slate-900 border-t-transparent border-l-transparent transform rotate-45"></div>
                <span className="font-bold text-lg">70%</span>
             </div>
             <div className="absolute top-4 left-4"><WireLine width="w-16" height="h-3"/></div>
          </Card>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex justify-between items-center mb-6 px-2">
          <WireLine width="w-24" height="h-3" />
          <div className="w-16 h-6 border-2 border-slate-300 rounded-full"></div>
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 border-t-2 border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-100" />
              <div>
                <WireLine width="w-32" className="mb-2" />
                <WireLine width="w-24" height="h-1" />
              </div>
            </div>
            <div className="flex items-center gap-4">
               <WireLine width="w-12" height="h-2" />
               <div className="w-6 h-6 rounded-full border-2 border-slate-300"></div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

const ReportsView = () => (
  <div className="animate-in fade-in duration-300">
    <div className="mb-6">
      <h1 className="text-3xl font-mono mb-1">Reports</h1>
      <p className="text-slate-500 text-sm font-mono">Analyze your data with custom reports</p>
    </div>

    <div className="flex gap-4 mb-6">
      <div className="flex-1 border-2 border-slate-900 rounded-full flex items-center px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-slate-400">
        <Filter size={18} className="text-slate-400 mr-2" />
        <WireLine width="w-24" height="h-2" />
      </div>
      <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors">
        <Download size={16} /> Export
      </button>
      <button className="flex items-center gap-2 bg-white text-slate-900 border-2 border-slate-900 px-6 py-2 rounded-full font-medium hover:bg-slate-50 transition-colors">
        <Share2 size={16} /> Share
      </button>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-4 flex flex-col hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="grid grid-cols-2 gap-2 mb-2">
             <WireBox className="h-16" />
             <WireBox className="h-16" />
          </div>
          <div className="text-center text-xs font-mono text-slate-400 mb-2">PREVIEW</div>
          <div className="grid grid-cols-2 gap-2 mb-4">
             <WireBox className="h-16" />
             <WireBox className="h-16" />
          </div>
          <div className="mt-auto">
            <WireLine width="w-16" className="mb-3" />
            <WireLine width="w-full" height="h-1" className="mb-1" />
            <WireLine width="w-4/5" height="h-1" className="mb-4" />
            <div className="flex justify-between items-center border-2 border-slate-200 rounded-full px-4 py-1">
               <span className="text-xs font-bold mx-auto">View</span>
               <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
            </div>
          </div>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-4">
      <Card className="p-4">
        <div className="flex justify-between mb-4">
           <WireLine width="w-24" height="h-3" />
           <div className="flex gap-1">
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
           </div>
        </div>
        <div className="h-48 border-2 border-slate-200 rounded-xl"></div>
      </Card>
      <Card className="p-6">
        <div className="flex justify-between mb-6">
           <WireLine width="w-24" height="h-3" />
           <div className="flex gap-1">
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
             <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
           </div>
        </div>
        <div className="space-y-4">
          {[85, 70, 60, 45, 30].map((val, i) => (
            <div key={i} className="flex items-center gap-4">
              <WireLine width="w-12" height="h-2" />
              <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 rounded-full" style={{ width: `${val}%` }}></div>
              </div>
              <span className="text-xs font-mono w-8 text-right">{val}%</span>
              <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const UsersView = () => {
  const [filter, setFilter] = useState('All Users');
  
  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h1 className="text-3xl font-mono mb-1">Users</h1>
        <p className="text-slate-500 text-sm font-mono">Manage your team and permissions</p>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 border-2 border-slate-900 rounded-full flex items-center px-4 py-2 bg-white">
          <Search size={18} className="text-slate-400 mr-2" />
          <WireLine width="w-32" height="h-2" />
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors">
          <Plus size={16} /> Add User
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[248, 189, 23, 36].map((num, i) => (
          <Card key={i} className="p-6 flex flex-col items-center justify-center">
            <div className="text-3xl font-mono mb-2">{num}</div>
            <WireLine width="w-12" height="h-1" />
          </Card>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        {['All Users', 'Admins', 'Members', 'Guests'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full border-2 border-slate-900 text-sm font-medium transition-colors ${filter === f ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-4 flex items-center justify-between hover:border-slate-500 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl border-2 border-slate-900 bg-slate-100 flex items-center justify-center text-xs font-mono text-slate-500">
                IMG
              </div>
              <div>
                <WireLine width="w-24" height="h-3" className="mb-2" />
                <WireLine width="w-32" height="h-1" className="mb-2" />
                <div className="flex items-center gap-2">
                  <div className="border-2 border-slate-300 rounded-full px-3 py-0.5"><WireLine width="w-6" height="h-1"/></div>
                  <div className="border-2 border-slate-300 rounded-full px-3 py-0.5"><WireLine width="w-6" height="h-1"/></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
               <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-slate-500"></div>
               <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-slate-500"></div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2">
        <button className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center hover:bg-slate-100 text-slate-500"><ChevronLeft size={16} /></button>
        {[1, 2, 3, 4, 5].map(p => (
          <button key={p} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-mono ${p === 1 ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-500 hover:bg-slate-100'}`}>
            {p}
          </button>
        ))}
        <button className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center hover:bg-slate-100 text-slate-500"><ChevronRight size={16} /></button>
      </div>
    </div>
  );
}

const SettingsView = () => {
  const [activeMenu, setActiveMenu] = useState('General');
  const [toggles, setToggles] = useState({ t1: true, t2: false, t3: true });

  const menuItems = [
    { id: 'General', icon: Sliders },
    { id: 'Security', icon: Key },
    { id: 'Notifications', icon: Bell },
    { id: 'Billing', icon: CreditCard },
    { id: 'Team', icon: Users },
    { id: 'API Keys', icon: Key }, // Reused icon for simplicity
    { id: 'Advanced', icon: SettingsIcon },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h1 className="text-3xl font-mono mb-1">Settings</h1>
        <p className="text-slate-500 text-sm font-mono">Customize your experience</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 space-y-2 flex-shrink-0">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                  isActive 
                    ? 'border-slate-900 bg-slate-900 text-white' 
                    : 'border-slate-400 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium text-sm">{item.id}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl border-2 border-slate-900 bg-slate-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-mono text-slate-500">PHOTO</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-100">
                  <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                </div>
              </div>
              <div>
                <button className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-slate-800 mb-2">
                  Upload New
                </button>
                <WireLine width="w-32" height="h-1" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i}>
                  <WireLine width="w-16" height="h-2" className="mb-2" />
                  <div className="border-2 border-slate-300 rounded-xl h-10 px-4 flex items-center bg-white focus-within:border-slate-900 transition-colors">
                    <WireLine width="w-32" height="h-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <WireLine width="w-24" height="h-3" className="mb-6" />
            <div className="space-y-4 w-1/2 ml-auto">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center justify-between border-2 border-slate-300 rounded-xl h-10 px-4 bg-white cursor-pointer hover:border-slate-500">
                   <WireLine width="w-24" height="h-1.5" />
                   <ChevronDown size={16} className="text-slate-400" />
                </div>
              ))}
            </div>
            {/* Left side lines simulating descriptions */}
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 space-y-4">
               <WireLine width="w-16" height="h-2" />
               <WireLine width="w-16" height="h-2" />
               <WireLine width="w-16" height="h-2" />
            </div>
          </Card>

          <Card className="p-6">
            <WireLine width="w-24" height="h-3" className="mb-6" />
            <div className="space-y-6">
              {Object.keys(toggles).map((key, i) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <WireLine width="w-32" height="h-2" className="mb-2" />
                    <WireLine width="w-48" height="h-1" />
                  </div>
                  {/* Custom Toggle Switch */}
                  <button 
                    onClick={() => setToggles({...toggles, [key]: !toggles[key]})}
                    className={`w-12 h-6 rounded-full p-1 transition-colors flex ${toggles[key] ? 'bg-slate-900 justify-end' : 'bg-slate-200 justify-start'}`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function WireframeApp() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E1E2F] font-sans p-8 flex justify-center">
      <div className="w-full max-w-6xl">
        <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main>
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'reports' && <ReportsView />}
          {activeTab === 'users' && <UsersView />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
}