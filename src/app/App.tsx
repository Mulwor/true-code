import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar/ui/Sidebar/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './provider/router';
import { useTheme } from './provider/ThemeProvider';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    throw new Error();
  });

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
