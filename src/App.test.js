import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  document.documentElement.style.removeProperty('--font-delta');
});

const abrirBarraDeAcessibilidade = () =>
  fireEvent.click(screen.getByRole('button', { name: /Abrir ferramentas de acessibilidade/ }));

test('a página expõe um h1 e um main para navegação por leitor de tela', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'Universo Acessível' })).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});

test('as âncoras do menu são section, que é o que o scroll spy procura', () => {
  const { container } = render(<App />);

  ['home', 'trabalhos', 'sobreNos', 'materiais', 'equipe', 'colaboradores'].forEach((id) => {
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
  });
});

test('a lupa ajusta --font-delta e para no limite', () => {
  render(<App />);
  abrirBarraDeAcessibilidade();

  const aumentar = screen.getByRole('button', { name: 'Aumentar fonte' });
  const delta = () => document.documentElement.style.getPropertyValue('--font-delta');

  fireEvent.click(aumentar);
  expect(delta()).toBe('2px');

  fireEvent.click(aumentar);
  expect(delta()).toBe('4px');

  // No teto a escala não passa de 4px e o botão desabilita.
  expect(aumentar).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: 'Diminuir fonte' }));
  expect(delta()).toBe('2px');
  expect(aumentar).toBeEnabled();
});
