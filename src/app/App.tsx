import './styles/index.scss';
import { classNames } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar/ui/Sidebar/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './provider/router';
import { useTheme } from './provider/ThemeProvider';

function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>Toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
