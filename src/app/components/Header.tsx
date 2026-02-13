import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl tracking-tight">Messenger</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Функции
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              О нас
            </a>
            <a href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">
              Скачать
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:block px-5 py-2.5 text-gray-700 hover:text-gray-900 transition-colors">
              Войти
            </Link>
            <Link to="/register">
              <button className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all shadow-lg hover:shadow-xl">
                Регистрация
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}