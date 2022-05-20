import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test(' if the title was rendered', () => {
  render(<App />);
  const title = screen.getByText(/Lista de tarefas Ebytr/i);
  expect(title).toBeInTheDocument();
});

test(' if clicking "editar" button makes "terminar edição" and the other disapear', async () => {
  render(<App />);
  const editar =  await screen.findAllByText(/editar/i);
  console.log(editar)
  fireEvent.click(editar[0]);
  const termina = await screen.findByText(/terminar edição/i);
  const edita = screen.getAllByText(/editar/i);
  expect(termina).toBeInTheDocument();
  expect(edita.length < editar.length).toBe(true);
});