import React from 'react';

function Navigation() {
  const navItems = [
    'ЕЛЕКТРОЕНЕРГІЯ',
    'ПРИРОДНИЙ ГАЗ',
    'НОРМАТИВНО-ПРАВОВІ АКТИ',
    'ДОКУМЕНТИ ТА ІНФОРМАЦІЯ',
    'ПОШИРЕНІ ЗАПИТАННЯ',
    'КОНТАКТИ',
    'МАПА САЙТУ'
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-8 py-3 overflow-x-auto">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="nav-link whitespace-nowrap text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;