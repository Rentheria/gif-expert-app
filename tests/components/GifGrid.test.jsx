import { describe, expect, jest, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    // expect(screen.getByText('...Cargando'));
    // expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    // expect(screen.getAllByRole('img').length).toBe(2);
    // expect(screen.getByText(gifs[0].title));
    // expect(screen.getByText(gifs[1].title));
    // expect(screen.getByRole('img', { name: gifs[0].title })).toHaveAttribute(
    //   'src',
    //   gifs[0].url
    // );
    // expect(screen.getByRole('img', { name: gifs[1].title })).toHaveAttribute(
    //   'src',
    //   gifs[1].url
    // );
  });
});
