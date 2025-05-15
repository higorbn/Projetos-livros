// src/pages/LivroDados.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Livro } from '../Classes/modelo/Livro';
import { ControleEditora } from '../Classes/controle/controleEditora';
import Menu from '../components/Menu';

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

  const router = useRouter();

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluirLivro = async (livro: Livro) => {
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro),
    });
    return resposta.ok;
  };

  const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro: Livro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split('\n'),
    };
    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      router.push('/LivroLista');
    } else {
      alert('Erro ao incluir o livro.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next - Cadastro</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Cadastro de Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Resumo:</label>
            <textarea
              className="form-control"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Editora:</label>
            <select
              className="form-control"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Autores (1 por linha):</label>
            <textarea
              className="form-control"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Incluir
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;