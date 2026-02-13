import { Lock, Zap, Users, Heart, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Сквозное шифрование',
    description: 'Ваши сообщения защищены end-to-end шифрованием. Только вы и получатель можете их прочитать.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Молниеносная скорость',
    description: 'Сообщения доставляются мгновенно, даже при медленном интернете благодаря оптимизированной технологии.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Групповые чаты',
    description: 'Создавайте группы до 100 000 участников. Общайтесь с друзьями, семьей или коллегами в одном месте.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Совершенно бесплатно',
    description: 'Никакой рекламы, никаких подписок, никаких скрытых платежей. Просто общение.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Кроссплатформенность',
    description: 'Работает на iOS, Android, Windows, Mac и в браузере. Синхронизация между всеми устройствами.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Приватность прежде всего',
    description: 'Мы не собираем ваши данные и не продаём их третьим лицам. Ваша приватность — наш приоритет.',
    gradient: 'from-indigo-500 to-blue-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали мессенджер, который сочетает в себе лучшие функции для безопасного и комфортного общения
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
