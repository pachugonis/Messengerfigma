import { useState } from 'react';
import { ChatSidebar } from '../components/ChatSidebar';
import { ChatWindow } from '../components/ChatWindow';

export function Chats() {
  const [selectedChatId, setSelectedChatId] = useState('1');
  const [showMobileChat, setShowMobileChat] = useState(false);

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    setShowMobileChat(true);
  };

  const handleBack = () => {
    setShowMobileChat(false);
  };

  return (
    <div className="size-full flex bg-gray-50">
      {/* Mobile View */}
      <div className="lg:hidden w-full h-full">
        {!showMobileChat ? (
          <ChatSidebar selectedChatId={selectedChatId} onSelectChat={handleSelectChat} />
        ) : (
          <ChatWindow chatId={selectedChatId} onBack={handleBack} />
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex w-full h-full">
        <ChatSidebar selectedChatId={selectedChatId} onSelectChat={setSelectedChatId} />
        <ChatWindow chatId={selectedChatId} />
      </div>
    </div>
  );
}
