import { Livro } from "../modelo/Livro";

let livros: Array<Livro> = [
  new Livro(1, 1, "O Senhor dos Anéis", "Narra a jornada de Frodo Bolseiro, um hobbit, para destruir o Um Anel, um objeto de poder criado pelo Senhor Sombrio Sauron. ", ["J.R.R. Tolkien"]),
  new Livro(2, 2, "1984", "A história se passa num futuro distópico, em 1984, onde a sociedade é governada pelo Partido, que controla todos os aspectos da vida através da vigilância constante, do controle da informação e da manipulação da linguagem.", ["George Orwell"]),
  new Livro(3, 3, "Duna", "Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo.", ["Frank Herbert"])
];

export class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      livros.splice(indice, 1);

      
    }
  }
}
