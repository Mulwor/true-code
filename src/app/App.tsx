import './styles/index.scss';
import { classNames } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar/ui/Sidebar/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './provider/router';
import { useTheme } from './provider/ThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
