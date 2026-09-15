import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

/** 정적 호스팅(서브 경로·SPA 리라이트 없음)에서는 VITE_ROUTER=hash 로 빌드하면 해시 라우팅을 사용합니다. */
const Router = import.meta.env.VITE_ROUTER === 'hash' ? HashRouter : BrowserRouter;
const future = { v7_startTransition: true, v7_relativeSplatPath: true };

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router future={future}>
      <App />
    </Router>
  </StrictMode>,
);
