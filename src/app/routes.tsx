import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'projects', Component: Projects },
      { path: 'skills', Component: Skills },
      { path: 'contact', Component: Contact },
    ],
  },
]);
