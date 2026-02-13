import { useState } from 'react';
import { Phone, Video, MoreVertical, Smile, Paperclip, Send, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Message {
  id: string;
  text: string;
  time: string;
  isMine: boolean;
}

const chatData: Record<string, { name: string; avatar: string; online: boolean; messages: Message[] }> = {
  '1': {
    name: 'Анна Иванова',
    avatar: 'https://i.pravatar.cc/150?img=1',
    online: true,
    messages: [
      { id: '1', text: 'Привет! Как дела?', time: '14:20', isMine: false },
      { id: '2', text: 'Привет! Все отлично, спасибо!', time: '14:22', isMine: true },
      { id: '3', text: 'Хотела обсудить встречу завтра', time: '14:25', isMine: false },
      { id: '4', text: 'Конечно, во сколько тебе удобно?', time: '14:27', isMine: true },
      { id: '5', text: 'Может в 15:00?', time: '14:30', isMine: false },
      { id: '6', text: 'Отлично, встретимся завтра!', time: '14:32', isMine: false },
    ],
  },
};

interface ChatWindowProps {
  chatId: string;
  onBack?: () => void;
}

export function ChatWindow({ chatId, onBack }: ChatWindowProps) {
  const [messageText, setMessageText] = useState('');
  const chat = chatData[chatId];

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <span className="text-4xl">💬</span>
          </div>
          <h3 className="text-xl mb-2">Выберите чат</h3>
          <p className="text-gray-600">Выберите чат из списка, чтобы начать общение</p>
        </div>
      </div>
    );
  }

  const handleSend = () => {
    if (messageText.trim()) {
      // Handle send message
      setMessageText('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white h-full">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="lg:hidden w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          <div className="relative">
            <ImageWithFallback
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {chat.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>
          <div>
            <h2 className="font-medium text-gray-900">{chat.name}</h2>
            <p className="text-sm text-green-500">онлайн</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <Phone className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <Video className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto space-y-4">
          {chat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md px-4 py-2.5 rounded-2xl ${
                  message.isMine
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-white text-gray-900 rounded-bl-md shadow-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <span
                  className={`text-xs mt-1 block ${
                    message.isMine ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Input */}
      <div className="px-4 py-4 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto flex items-end gap-2">
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors flex-shrink-0">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex-1 bg-gray-100 rounded-3xl px-4 py-2.5 flex items-center gap-2">
            <input
              type="text"
              placeholder="Сообщение"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent border-none outline-none"
            />
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0">
              <Smile className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <button
            onClick={handleSend}
            className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
