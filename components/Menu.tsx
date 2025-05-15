// src/componentes/Menu.tsx
import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Loja Next
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Página Inicial
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" className="nav-link">
                Catálogo de Livros
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" className="nav-link">
                Novo Livro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;