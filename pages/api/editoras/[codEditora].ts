import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '@controle/controleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const codEditora = Number(req.query.codEditora);
      const nome = controleEditora.getNomeEditora(codEditora);
      res.status(200).json({ nome });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};