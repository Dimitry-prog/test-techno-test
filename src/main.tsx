import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <AdaptivityProvider>
          <App/>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
