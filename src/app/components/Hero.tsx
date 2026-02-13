import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm text-blue-600">Новое поколение общения</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight">
              Общайтесь
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                свободно
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Быстрый и безопасный мессенджер для общения с друзьями, семьей и коллегами. 
              Всё что нужно в одном месте.
            </p>
            
            <div className="flex flex-wrap gap-4">
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">50M+</div>
                <div className="text-sm text-gray-600">Пользователей</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl">150+</div>
                <div className="text-sm text-gray-600">Стран</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="text-3xl">4.9★</div>
                <div className="text-sm text-gray-600">Рейтинг</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876018643-71ee5951ab0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbWVzc2FnaW5nfGVufDF8fHx8MTc3MDk5ODA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern messaging interface"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl scale-105 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}