import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { animateSection } from '@/lib/animations';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = animateSection(sectionRef);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl mb-4">Свяжитесь с нами</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-700">
              Готовы обсудить ваш проект? Заполните форму ниже или воспользуйтесь контактной информацией
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={sectionRef} className="py-8 bg-secondary section-fade">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-roboto font-bold text-2xl mb-6">Напишите нам</h3>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-roboto font-bold text-2xl mb-6">Контактная информация</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-4 rounded-lg mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-roboto font-bold text-lg mb-1">Адрес</h4>
                    <p className="text-gray-700">Республика Крым, Симферополь, проспект Академика Вернадского, 4</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-4 rounded-lg mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-roboto font-bold text-lg mb-1">Телефон</h4>
                    <p className="text-gray-700">+7(978) 519-74-72</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-4 rounded-lg mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-roboto font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-700">ivasoft@internet.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-4 rounded-lg mr-4">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-roboto font-bold text-lg mb-1">Telegram</h4>
                    <p className="text-gray-700">
                      <a href="https://t.me/IvAS0ft" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        https://t.me/IvAS0ft
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-roboto font-bold text-lg mb-4">Мы в социальных сетях</h4>
           <div className="flex space-x-4">
                  {[
                    { 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.653-1.219-.653-3.79c0-3.153 1.828-5.505 4.106-5.505 1.936 0 2.870 1.450 2.870 3.188 0 1.941-1.301 4.853-1.969 7.546-.560 2.37.119 4.301 2.369 4.301 2.841 0 5.028-2.996 5.028-7.318 0-3.824-2.749-6.504-6.677-6.504-4.547 0-7.216 3.413-7.216 6.938 0 1.375.528 2.849 1.188 3.651.130.155.149.291.111.449-.120.508-.390 1.607-.443 1.832-.069.287-.224.348-.515.210-1.943-.906-3.157-3.751-3.157-6.034 0-4.923 3.578-9.446 10.320-9.446 5.420 0 9.633 3.86 9.633 9.019 0 5.382-3.393 9.714-8.104 9.714-1.581 0-3.070-.823-3.578-1.804 0 0-.783 2.981-.973 3.719-.351 1.366-1.301 3.077-1.936 4.124 1.459.450 3.006.685 4.615.685 6.624 0 11.990-5.367 11.990-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                      ), 
                      url: "https://pinterest.com", 
                      name: "Pinterest" 
                    },
                    { 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z"/>
                        </svg>
                      ), 
                      url: "https://twitter.com", 
                      name: "Twitter" 
                    },
                    { 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.653-1.219-.653-3.79c0-3.153 1.828-5.505 4.106-5.505 1.936 0 2.870 1.450 2.870 3.188 0 1.941-1.301 4.853-1.969 7.546-.560 2.37.119 4.301 2.369 4.301 2.841 0 5.028-2.996 5.028-7.318 0-3.824-2.749-6.504-6.677-6.504-4.547 0-7.216 3.413-7.216 6.938 0 1.375.528 2.849 1.188 3.651.130.155.149.291.111.449-.120.508-.390 1.607-.443 1.832-.069.287-.224.348-.515.210-1.943-.906-3.157-3.751-3.157-6.034 0-4.923 3.578-9.446 10.320-9.446 5.420 0 9.633 3.86 9.633 9.019 0 5.382-3.393 9.714-8.104 9.714-1.581 0-3.070-.823-3.578-1.804 0 0-.783 2.981-.973 3.719-.351 1.366-1.301 3.077-1.936 4.124 1.459.450 3.006.685 4.615.685 6.624 0 11.990-5.367 11.990-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                        </svg>
                      ), 
                      url: "https://instagram.com", 
                      name: "Instagram" 
                    },
                    { 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                      className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}