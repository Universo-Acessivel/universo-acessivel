import { render, screen, fireEvent, act } from '@testing-library/react';
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

  expect(aumentar).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: 'Diminuir fonte' }));
  expect(delta()).toBe('2px');
  expect(aumentar).toBeEnabled();
});

test('o rótulo se abre sozinho 2s após carregar e recolhe 3s depois', () => {
  jest.useFakeTimers();
  try {
    render(<App />);
    const toggle = screen.getByRole('button', { name: /Abrir ferramentas de acessibilidade/ });

    expect(toggle).not.toHaveClass('is-intro');

    act(() => { jest.advanceTimersByTime(2000); });
    expect(toggle).toHaveClass('is-intro');

    act(() => { jest.advanceTimersByTime(2999); });
    expect(toggle).toHaveClass('is-intro');

    act(() => { jest.advanceTimersByTime(1); });
    expect(toggle).not.toHaveClass('is-intro');
  } finally {
    jest.useRealTimers();
  }
});
