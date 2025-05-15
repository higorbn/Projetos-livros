// src/Classes/controle/controleEditora.ts

export class ControleEditora {
  private editoras = [
    { codEditora: 1, 
      "nome": "HarperCollins Brasil" 
    },
    { codEditora: 2, 
      "nome": "Grupo Companhia das Letras" 
    },
    { codEditora: 3, 
      "nome": "Aleph" }
  ];

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }

  getEditoras() {
    return this.editoras;
  }
}

// Criação da instância exportável
export const controleEditora = new ControleEditora();