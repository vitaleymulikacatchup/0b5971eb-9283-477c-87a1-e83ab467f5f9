import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { User, FileText, CreditCard, Calculator, Mail, MapPin, Clock } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

function Sidebar() {
  const shouldReduce = useReducedMotion();
  
  const sidebarButtons = [
    { text: "ОСОБИСТИЙ КАБІНЕТ", icon: User },
    { text: "ПЕРЕДАТИ ПОКАЗИ", icon: FileText },
    { text: "ТАРИФИ ТА РЕГУЛЯТОР", icon: Calculator },
    { text: "СПЛАТИТИ ОНЛАЙН", icon: CreditCard },
    { text: "ЕЛЕКТРОННИЙ РАХУНОК", icon: Mail },
    { text: "ЦЕНТР РОЗРАХУНКІВ", icon: MapPin }
  ];
  
  const SidebarContent = () => (
    <aside className="space-y-6">
      <div className="space-y-3">
        {sidebarButtons.map((button, index) => {
          const Icon = button.icon;
          const buttonContent = (
            <button className="sidebar-button">
              <span className="text-sm font-medium">{button.text}</span>
              <Icon className="w-5 h-5" />
            </button>
          );
          
          if (shouldReduce) {
            return <div key={index}>{buttonContent}</div>;
          }
          
          return (
            <motion.div key={index} {...fadeUpPreset(index * 0.05, 0.6)}>
              {buttonContent}
            </motion.div>
          );
        })}
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-gray-800">50 900</span>
          </div>
          <p className="text-sm text-gray-600">Довідник новий Особистий Кабінет</p>
          <p className="text-xs text-gray-500 mt-2">Інструкція до особистого кабінету</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4">Графік роботи</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Пн-Пт: 8:00 - 17:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Сб-Нд: Вихідний</span>
          </div>
        </div>
      </div>
    </aside>
  );
  
  if (shouldReduce) {
    return <SidebarContent />;
  }
  
  return (
    <motion.div {...fadeUpPreset(0.2, 0.8)}>
      <SidebarContent />
    </motion.div>
  );
}

export default Sidebar;