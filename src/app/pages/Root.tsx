import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/Header';

export function Root() {
  const location = useLocation();
  const isChatsPage = location.pathname === '/chats';

  return (
    <div className="size-full flex flex-col">
      {!isChatsPage && <Header />}
      <div className={isChatsPage ? 'size-full' : 'flex-1'}>
        <Outlet />
      </div>
    </div>
  );
}
