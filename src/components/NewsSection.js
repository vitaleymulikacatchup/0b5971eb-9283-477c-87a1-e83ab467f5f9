import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

function NewsSection() {
  const shouldReduce = useReducedMotion();
  
  const newsItems = [
    {
      title: "ЧАС ПЕРЕДАТИ ПОКАЗИ ЕЛЕКТРОЛІЧИЛЬНИКА",
      date: "29.11 - 03.12",
      content: "ЧАС ПЕРЕДАТИ ПОКАЗИ ЕЛЕКТРОЛІЧИЛЬНИКА Шановні споживачі! Роз'яснюємо період передачі показів приладів обліку електричної енергії з 29.11 по 03.12 включно. Передати показання можна: - з 29.11.2023 по 3.12.2023 з 8:00 до 20:00 за телефонами: 061 228 22 20, 066 228 22 20, 063 228 22 20, 068 228 22 20; - цілодобово через сервіс «Особистий кабінет» на офіційному сайті ТОВ «Запоріжжяелектропостачання» за посиланням https://zpep.com.ua/cabinet/ або через мобільний додаток «ЗЕЛЕНЕРГІЯ»; - з 14.12.2023 по 3.01.2024 з 8:00 до 20:00 за телефонами: 061 228 22 20, 066 228 22 20, 063 228 22 20, 068 228 22 20.",
      image: "https://zpep.com.ua/uploads/posts/2023-11/1701252847_pokazaniya.jpg",
      author: "Адміністратор"
    },
    {
      title: "ЯК УКЛАСТИ ДОГОВІР РЕСТРУКТУРИЗАЦІЇ",
      content: "ЯК УКЛАСТИ ДОГОВІР РЕСТРУКТУРИЗАЦІЇ Шановні споживачі! Ми завжди намагаємося на максимально можливості прислухатися до ваших потреб та забезпечити електропостачання, а також докладаємо всі зусилля, щоб ваша заборгованість - її можна було погасити цивілізовано шляхом реструктуризації боргу. Ми обираємо договір реструктуризації боргу.",
      image: "https://zpep.com.ua/uploads/posts/2023-11/1700559600_dogovor.jpg",
      date: "21.11.2023",
      author: "Адміністратор"
    },
    {
      title: "«НАЦІОНАЛЬНИЙ КЕШБЕК» та «ЗИМОВА «ПІДТРИМКА»",
      content: "«НАЦІОНАЛЬНИЙ КЕШБЕК» та «ЗИМОВА «ПІДТРИМКА» - МОЖЛИВІСТЬ СПЛАТИТИ ЗА ЕЛЕКТРОЕНЕРГІЮ Програма грошової підтримки «Національний кешбек» та «ЗИМОВА «ПІДТРИМКА» - має запрацювати з 1 листопада до 31 грудня 2023 року. «Національний кешбек» та «ЗИМОВА «ПІДТРИМКА» - це державна програма, яка передбачає часткове відшкодування коштів за електроенергію.",
      image: "https://zpep.com.ua/uploads/posts/2023-11/1699610400_cashback.jpg",
      date: "17.11.2023",
      author: "Адміністратор"
    },
    {
      title: "ЧАС СПЛАТИТИ РАХУНКИ ЗА ЕЛЕКТРОЕНЕРГІЮ",
      content: "Шановні споживачі електричної енергії з ТОВ «Запоріжжяелектропостачання»-надавачу, що розраховує за споживану електричну енергію з дня виставлення рахунку до 20 числа наступного місяця. Сплатити за електроенергію Ви можете за допомогою: 1. Платіжних систем: 2. Інтернет-банкінгу та банкоматів: 3. Поштових відділень.",
      image: "https://zpep.com.ua/uploads/posts/2023-11/1699005600_payment.jpg",
      date: "07.11.2023",
      author: "Адміністратор"
    },
    {
      title: "«Енергетичні послуги» - відтепер ще ближче та доступніше. Відкрили новий Центр обслуговування у Запоріжжі, - Андрій СТАСЕВСЬКИЙ",
      content: "Цей Центр створено спеціально для мешканців Шевченківського району і розташований на вулиці Стрілецькій наших послуг. Адреса нового Центру обслуговування клієнтів: м. Запоріжжя, вул. Стрілецька, 1/2Б. Тепер наша команда працює у Шевченківському районі.",
      image: "https://zpep.com.ua/uploads/posts/2023-10/1697644800_center.jpg",
      date: "31.10.2023",
      author: "Адміністратор"
    }
  ];

  const NewsCard = ({ item, index }) => {
    const cardContent = (
      <article className="news-card">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          {item.date && (
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
              {item.date}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
            {item.title}
          </h2>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {item.content}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              {item.date && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{item.author}</span>
              </div>
            </div>
            
            <button className="btn-primary text-xs py-1 px-3">
              Читати далі
            </button>
          </div>
        </div>
      </article>
    );
    
    if (shouldReduce) {
      return cardContent;
    }
    
    return (
      <motion.div {...fadeUpPreset(index * 0.1, 0.8)}>
        {cardContent}
      </motion.div>
    );
  };

  return (
    <section className="space-y-8">
      {newsItems.map((item, index) => (
        <NewsCard key={index} item={item} index={index} />
      ))}
      
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Сторінка 1 з 4</span>
          <div className="flex space-x-1">
            <button className="w-8 h-8 bg-primary-600 text-white rounded text-sm">1</button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">2</button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">3</button>
            <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">4</button>
          </div>
          <button className="text-sm text-primary-600 hover:text-primary-700">Остання »</button>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;