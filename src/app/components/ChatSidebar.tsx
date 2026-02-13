import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Search, MoreVertical, Edit, Users, Radio, Settings, LogOut } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SettingsModal } from './SettingsModal';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  online?: boolean;
}

const chats: Chat[] = [
  {
    id: '1',
    name: 'Анна Иванова',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastMessage: 'Отлично, встретимся завтра!',
    time: '14:32',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Команда проекта',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastMessage: 'Сергей: Загрузил последние файлы',
    time: '13:15',
    unread: 5,
  },
  {
    id: '3',
    name: 'Михаил Петров',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastMessage: 'Спасибо за помощь! 👍',
    time: '11:20',
    online: true,
  },
  {
    id: '4',
    name: 'Елена Смирнова',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastMessage: 'Когда созвон?',
    time: 'Вчера',
  },
  {
    id: '5',
    name: 'Дмитрий Козлов',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'Посмотрел презентацию, все супер',
    time: 'Вчера',
  },
  {
    id: '6',
    name: 'Ольга Васильева',
    avatar: 'https://i.pravatar.cc/150?img=6',
    lastMessage: 'Отправила документы',
    time: 'ПН',
  },
  {
    id: '7',
    name: 'Игорь Новиков',
    avatar: 'https://i.pravatar.cc/150?img=7',
    lastMessage: 'До встречи!',
    time: 'ПН',
  },
  {
    id: '8',
    name: 'Мария Федорова',
    avatar: 'https://i.pravatar.cc/150?img=8',
    lastMessage: 'Согласна с предложением',
    time: 'ВС',
  },
];

interface ChatSidebarProps {
  selectedChatId: string;
  onSelectChat: (chatId: string) => void;
}

export function ChatSidebar({ selectedChatId, onSelectChat }: ChatSidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setMenuOpen(false);
    navigate('/');
  };

  const handleSettings = () => {
    setMenuOpen(false);
    setSettingsOpen(true);
  };

  return (
    <div className="w-full lg:w-96 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl tracking-tight">Чаты</h1>
          <div className="flex items-center gap-2">
            <button 
              className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              title="Новое сообщение"
            >
              <Edit className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              title="Создать группу"
            >
              <Users className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              title="Создать канал"
            >
              <Radio className="w-5 h-5 text-gray-700" />
            </button>
            <div className="relative" ref={menuRef}>
              <button 
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                title="Меню"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <MoreVertical className="w-5 h-5 text-gray-700" />
              </button>
              
              {menuOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50">
                  <button
                    onClick={handleSettings}
                    className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
                  >
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Настройки</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left text-red-600"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Выйти</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск"
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl border-none outline-none focus:bg-gray-200 transition-colors"
          />
        </div>
      </div>
      
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
              selectedChatId === chat.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <ImageWithFallback
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>
            
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-900 truncate">
                  {chat.name}
                </span>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                  {chat.time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate flex-1">
                  {chat.lastMessage}
                </p>
                {chat.unread && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full flex-shrink-0">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}