import { Link } from "wouter";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-roboto font-bold text-xl mb-4">
              IvA<span className="text-accent">Soft</span>
            </h3>
            <p className="mb-4 text-gray-300">
              IT-решения любой сложности для вашего бизнеса. Мы помогаем компаниям 
              расти и развиваться в цифровую эпоху.
            </p>
            <p className="text-gray-300">© {currentYear} IvASoft. Все права защищены.</p>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Разработка ПО
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Мобильные приложения
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Веб-разработка
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  AI и Big Data
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Техническая поддержка
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Карьера
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold text-lg mb-4">Свяжитесь с нами</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-2 text-accent h-4 w-4 mt-0.5" /> 
                <span>Республика Крым, Симферополь, проспект Академика Вернадского, 4</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-accent h-4 w-4" /> 
                +7(978) 519-74-72
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-accent h-4 w-4" /> 
                ivasoft@internet.ru
              </li>
              <li className="flex items-center">
                <MessageSquare className="mr-2 text-accent h-4 w-4" /> 
                <a href="https://t.me/IvAS0ft" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  https://t.me/IvAS0ft
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-roboto font-bold text-md mb-3">Мы в социальных сетях</h4>
              <div className="flex space-x-3">
                {[
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z"/>
                      </svg>
                    ), 
                    url: "https://twitter.com", 
                    name: "Twitter" 
                  },
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ), 
                    url: "https://facebook.com", 
                    name: "Facebook" 
                  },
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.653-1.219-.653-3.79c0-3.153 1.828-5.505 4.106-5.505 1.936 0 2.870 1.450 2.870 3.188 0 1.941-1.301 4.853-1.969 7.546-.560 2.37.119 4.301 2.369 4.301 2.841 0 5.028-2.996 5.028-7.318 0-3.824-2.749-6.504-6.677-6.504-4.547 0-7.216 3.413-7.216 6.938 0 1.375.528 2.849 1.188 3.651.130.155.149.291.111.449-.120.508-.390 1.607-.443 1.832-.069.287-.224.348-.515.210-1.943-.906-3.157-3.751-3.157-6.034 0-4.923 3.578-9.446 10.320-9.446 5.420 0 9.633 3.86 9.633 9.019 0 5.382-3.393 9.714-8.104 9.714-1.581 0-3.070-.823-3.578-1.804 0 0-.783 2.981-.973 3.719-.351 1.366-1.301 3.077-1.936 4.124 1.459.450 3.006.685 4.615.685 6.624 0 11.990-5.367 11.990-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    ), 
                    url: "https://instagram.com", 
                    name: "Instagram" 
                  },
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    ), 
                    url: "https://t.me/IvAS0ft", 
                    name: "Telegram" 
                  }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            Разработано с <span className="text-accent">♥</span> командой IvASoft
          </p>
        </div>
      </div>
    </footer>
  );
}
