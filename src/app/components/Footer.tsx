import { MessageCircle, Twitter, Instagram, Facebook, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl tracking-tight">Messenger</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Современный мессенджер для безопасного и быстрого общения с друзьями и близкими
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 tracking-tight">Продукт</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Функции</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Безопасность</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Для бизнеса</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Цены</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 tracking-tight">Компания</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Пресса</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 tracking-tight">Поддержка</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Справка</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Статус</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2026 Messenger. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
