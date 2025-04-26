export function isElectron() {
  return window?.env?.isElectron
}

export const isBrowser = () => !isElectron()

export const isMac = () => window.env.platform === 'darwin'
export const isWin = () => !isMac()
