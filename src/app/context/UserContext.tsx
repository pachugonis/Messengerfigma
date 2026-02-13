import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  login: string;
  avatar?: string;
  bio?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateAvatar: (avatar: string | null) => void;
  updateBio: (bio: string) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleSetUser = (newUser: User | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  const updateAvatar = (avatar: string | null) => {
    if (user) {
      const updated = { ...user, avatar: avatar || undefined };
      handleSetUser(updated);
    }
  };

  const updateBio = (bio: string) => {
    if (user) {
      const updated = { ...user, bio };
      handleSetUser(updated);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser, updateAvatar, updateBio }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
