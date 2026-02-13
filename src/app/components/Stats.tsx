import { ImageWithFallback } from './figma/ImageWithFallback';

export function Stats() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl tracking-tight">
              Присоединяйтесь к миллионам пользователей
            </h2>
            <p className="text-xl text-blue-100">
              Люди по всему миру выбирают наш мессенджер для ежедневного общения с близкими
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="text-4xl mb-2">5B+</div>
                <div className="text-blue-100">Сообщений в день</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="text-4xl mb-2">99.9%</div>
                <div className="text-blue-100">Время работы</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="text-4xl mb-2">500M</div>
                <div className="text-blue-100">Активных групп</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="text-4xl mb-2">24/7</div>
                <div className="text-blue-100">Поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1638953052562-21e347a142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjaGF0dGluZyUyMGhhcHB5fGVufDF8fHx8MTc3MDk5ODA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy people chatting"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
