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
              
            </ul>
            
            <div className="mt-6">
              <h4 className="font-roboto font-bold text-md mb-3">Мы в социальных сетях</h4>
              <div className="flex space-x-3">
                {[
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    ), 
                    url: "https://t.me/IvAS0ft", 
                    name: "Telegram" 
                  },
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zM12 18.9c-3.816 0-6.9-3.084-6.9-6.9s3.084-6.9 6.9-6.9 6.9 3.084 6.9 6.9-3.084 6.9-6.9 6.9zm6.9-12.456c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM12 16.2c-2.316 0-4.2-1.884-4.2-4.2s1.884-4.2 4.2-4.2 4.2 1.884 4.2 4.2-1.884 4.2-4.2 4.2z"/>
                      </svg>
                    ), 
                    url: "https://vk.com/sanqee", 
                    name: "VK" 
                  },
                  { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ), 
                    url: "https://github.com/AlexanderBobrenko", 
                    name: "GitHub" 
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
