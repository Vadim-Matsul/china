import React from 'react'

/**
 * Обертка для useState, возвращающая обьект
 * @param initial начальное значение для useState
 */
export function useINDXState<S>(initial: S) {
  const [state, setState] = React.useState<S>(initial)
  return { state, setState }
}
