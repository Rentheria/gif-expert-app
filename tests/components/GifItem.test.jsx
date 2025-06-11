import { describe, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
  test('Match con el snapshot', () => {
    render(<GifItem />);
  });
});
