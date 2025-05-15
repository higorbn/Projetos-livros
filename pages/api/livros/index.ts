import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../Classes/controle/controleLivro';

// a) Instância exportável de ControleLivro
export const controleLivro = new ControleLivro();

// b) Assinatura padrão da rota
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      // c) GET: retornar livros
      case 'GET':
        const livros = controleLivro.obterLivros();
        res.status(200).json(livros);
        break;

      // d) POST: incluir livro
      case 'POST':
        const novoLivro = req.body;
        controleLivro.incluir(novoLivro);
        res.status(200).json({ mensagem: 'Livro incluído com sucesso!' });
        break;

      // e) Método não permitido
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Método ${req.method} não permitido.`);
    }
  } catch (error) {
    // e) Erro interno
    res.status(500).json({ erro: 'Erro interno do servidor.' });
  }
};
