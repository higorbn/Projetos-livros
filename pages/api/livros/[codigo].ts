import { NextApiRequest, NextApiResponse } from 'next';
// g) Importar o controlador da mesma pasta
import { controleLivro } from '.';

// h) Assinatura padrão da rota
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // i) DELETE: excluir livro
    if (req.method === 'DELETE') {
      const codigo = Number(req.query.codigo);
      controleLivro.excluir(codigo);
      res.status(200).json({ mensagem: 'Livro excluído com sucesso!' });
    } else {
      // j) Método não permitido
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Método ${req.method} não permitido.`);
    }
  } catch (error) {
    // j) Erro interno
    res.status(500).json({ erro: 'Erro interno do servidor.' });
  }
};