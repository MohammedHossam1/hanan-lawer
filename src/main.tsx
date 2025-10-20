import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./i18n";
import ErrorBoundary from './components/shared/GlobalErrorBoundary.tsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </ErrorBoundary>
);
