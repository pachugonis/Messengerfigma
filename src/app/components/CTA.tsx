import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section id="download" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[40px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764601841480-d3c8b8ee9918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5OTgwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 px-8 py-16 sm:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white">Начните бесплатно</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
              Готовы начать общение?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Скачайте приложение прямо сейчас и присоединяйтесь к миллионам пользователей по всему миру
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all backdrop-blur-xl border border-white/20">
                <span className="text-lg">Открыть веб-версию</span>
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Бесплатно навсегда</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Без рекламы</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Безопасно</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}