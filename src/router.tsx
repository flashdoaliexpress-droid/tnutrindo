import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Cozinha from './pages/Cozinha';
import Navbar from './components/Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Pular para conteúdo
      </a>
      <Navbar />
      <main id="conteudo-principal">{children}</main>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/carrinho',
    element: (
      <Layout>
        <Carrinho />
      </Layout>
    ),
  },
  {
    path: '/cozinha',
    element: (
      <Layout>
        <Cozinha />
      </Layout>
    ),
  },
]);
