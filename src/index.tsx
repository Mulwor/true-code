import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { StoreProvider } from 'app/provider/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
