import { describe, expect, test } from '@jest/globals';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en useFetchGifs', () => {
  test('debe de retornar el estado inicial', () => {
    renderHook(() => useFetchGifs('One Punch'));

    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test('debe de retornar un arreglo de gifs y isLoading en false', async () => {
    renderHook(() => useFetchGifs('One Punch'));

    const { result } = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
