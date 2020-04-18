
export const setTitle = (title: string): void => {
  document.title = title
}

export const classes = (...args: string[]): string => {
  return args.filter(Boolean).join(' ')
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = (): void => {}

export const ROLE_BUTTON = 'button'