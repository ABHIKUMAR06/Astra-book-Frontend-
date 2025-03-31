import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiUsers, 
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiBell,
  FiSearch
} from 'react-icons/fi';
import { RiBookShelfLine, RiDashboardLine } from 'react-icons/ri';
import { GiTakeMyMoney } from "react-icons/gi";
import { MdReport } from "react-icons/md";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <RiDashboardLine size={20} />, path: '/admin/' },
    { name: 'Users', icon: <FiUsers size={20} />, path: '/admin/users list' },
    { name: 'Books', icon: <RiBookShelfLine size={20} />, path: '/admin/books list' },
    { name: 'Dispute', icon: <MdReport size={20} />, path: '/admin/dispute list' },
    { name: 'Earnings', icon: <GiTakeMyMoney size={20} />, path: '/admin/earning' },
    { name: 'Settings', icon: <FiSettings size={20} />, path: '/admin/setting' },
  ];


  return (
    <div className="flex ml-0 bg-gray-50 font-sans">
      <div className={`
        ${sidebarOpen ? 'w-64' : 'w-20'} 
        bg-indigo-700 text-white transition-all duration-300 ease-in-out
        flex flex-col
      `}>
        <div className="p-4 flex items-center justify-between h-16 border-b border-indigo-600">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold whitespace-nowrap">BookVerse Admin</h1>
          ) : (
            <div className="w-6"></div> 
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md hover:bg-indigo-600 transition-colors"
          >
            {sidebarOpen ? (
              <FiChevronLeft size={20} />
            ) : (
              <FiChevronRight size={20} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center p-3 mx-2 my-1 rounded-md
                transition-colors duration-200
                ${location.pathname === item.path 
                  ? 'bg-indigo-600 text-white' 
                  : 'hover:bg-indigo-600/80 text-white/90 hover:text-white'}
              `}
            >
              <span className={`${sidebarOpen ? 'mr-3' : 'mx-auto'}`}>
                {React.cloneElement(item.icon, {
                  className: location.pathname === item.path ? 'text-white' : 'text-white/90'
                })}
              </span>
              {sidebarOpen && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Collapsed Sidebar Footer */}
        {!sidebarOpen && (
          <div className="p-2 border-t border-indigo-600">
            <div className="flex justify-center">
              <FiChevronRight size={18} className="text-white/70" />
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm h-16 flex items-center px-6">
          <div className="flex-1 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              {location.pathname.split('/')[1] || 'Dashboard'}
            </h2>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 w-64"
                />
              </div>
              
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <FiBell size={18} className="text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                {sidebarOpen && (
                  <div className="text-sm">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-gray-500 text-xs">Admin</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}