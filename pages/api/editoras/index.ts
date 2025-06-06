import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '@controle/controleEditora';

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};