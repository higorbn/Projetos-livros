import Head from 'next/head';
import Menu from '../components/Menu';
const Home = () => {
  return (
    <div className="container py-4">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <h1 className="mt-4">Bem-vindo à Loja de Livros!</h1>
        <p>Use o menu acima para navegar.</p>
      </main>
    </div>
  );
};

export default Home;