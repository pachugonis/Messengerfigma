import { useState } from 'react';
import { X, User, Bell, Lock, Palette, HelpCircle } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SettingsTab = 'profile' | 'notifications' | 'privacy' | 'appearance' | 'help';

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [username, setUsername] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  if (!isOpen) return null;

  const tabs = [
    { id: 'profile' as const, label: 'Профиль', icon: User },
    { id: 'notifications' as const, label: 'Уведомления', icon: Bell },
    { id: 'privacy' as const, label: 'Приватность', icon: Lock },
    { id: 'appearance' as const, label: 'Внешний вид', icon: Palette },
    { id: 'help' as const, label: 'Помощь', icon: HelpCircle },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] shadow-2xl flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 bg-gray-50 border-r border-gray-200 p-4 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4 px-2">Настройки</h2>
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-3 transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h3>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold">
                    {username ? username[0].toUpperCase() : 'U'}
                  </div>
                  <button className="px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-xl transition-colors text-sm font-medium">
                    Изменить фото
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя пользователя
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Введите имя"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    О себе
                  </label>
                  <textarea
                    placeholder="Расскажите о себе"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">Уведомления</p>
                    <p className="text-sm text-gray-600">Получать уведомления о новых сообщениях</p>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`w-12 h-7 rounded-full transition-colors ${
                      notifications ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">Звук</p>
                    <p className="text-sm text-gray-600">Воспроизводить звук при получении сообщения</p>
                  </div>
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`w-12 h-7 rounded-full transition-colors ${
                      soundEnabled ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                        soundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-1">Последняя активность</p>
                  <p className="text-sm text-gray-600 mb-3">Кто может видеть, когда вы были онлайн</p>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-500 outline-none">
                    <option>Все</option>
                    <option>Мои контакты</option>
                    <option>Никто</option>
                  </select>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-1">Фото профиля</p>
                  <p className="text-sm text-gray-600 mb-3">Кто может видеть вашу фотографию</p>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-500 outline-none">
                    <option>Все</option>
                    <option>Мои контакты</option>
                    <option>Никто</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-3">Тема</p>
                  <div className="flex gap-3">
                    <button className="flex-1 p-4 bg-white border-2 border-blue-500 rounded-xl text-center">
                      <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-white border border-gray-300" />
                      <span className="text-sm font-medium">Светлая</span>
                    </button>
                    <button className="flex-1 p-4 bg-gray-800 border-2 border-transparent rounded-xl text-center">
                      <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gray-700" />
                      <span className="text-sm font-medium text-white">Тёмная</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-3">Размер шрифта</p>
                  <input
                    type="range"
                    min="12"
                    max="20"
                    defaultValue="16"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Маленький</span>
                    <span>Большой</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'help' && (
              <div className="space-y-4">
                <a href="#" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-900">FAQ</p>
                  <p className="text-sm text-gray-600">Часто задаваемые вопросы</p>
                </a>
                <a href="#" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-900">Связаться с поддержкой</p>
                  <p className="text-sm text-gray-600">Напишите нам, если возникли проблемы</p>
                </a>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-900">Версия приложения</p>
                  <p className="text-sm text-gray-600">1.0.0</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {activeTab === 'profile' && (
            <div className="px-6 py-4 border-t border-gray-200">
              <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors font-medium">
                Сохранить изменения
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
