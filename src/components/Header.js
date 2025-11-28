import React from 'react';
import { Phone, Search } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">З</span>
              </div>
              <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Е</span>
              </div>
              <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">П</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ЗАПОРІЖЖЯЕЛЕКТРОПОСТАЧАННЯ</h1>
              <p className="text-sm text-primary-600">Ваш партнер з постачання електричної енергії</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Кол-центр:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-primary-600" />
                  <span className="text-primary-600 font-medium">061 228 22 20</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-primary-600" />
                  <span className="text-primary-600 font-medium">066 228 22 20</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-primary-600" />
                  <span className="text-primary-600 font-medium">063 228 22 20</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-primary-600" />
                  <span className="text-primary-600 font-medium">068 228 22 20</span>
                </div>
              </div>
            </div>
            
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;