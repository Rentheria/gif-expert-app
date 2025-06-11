import { describe, test, jest, expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    const inputValue = 'One Punch';
    const onSetCategories = jest.fn();

    render(<AddCategory onSetCategories={onSetCategories} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onSetCategories).toHaveBeenCalled();
    expect(onSetCategories).toHaveBeenCalledTimes(1);
    expect(onSetCategories).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de enviar el formulario con el input vacío', () => {
    const onSetCategories = jest.fn();
    render(<AddCategory onSetCategories={onSetCategories} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onSetCategories).toHaveBeenCalledTimes(0);
    expect(onSetCategories).not.toHaveBeenCalled();
  });
});
