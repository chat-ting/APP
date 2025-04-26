export function isElectron() {
  return window?.env?.isElectron
}

export const isBrowser = () => !isElectron()

export const isMac = () => {
  if (isBrowser()) {
    const { platform } = navigator
    if (/Mac/.test(platform)) return true
    return false
  }
  return window.env.platform === 'darwin'
}
export const isWin = () => {
  if (isBrowser()) {
    const { platform } = navigator
    if (/Win/.test(platform)) return true
    return false
  }
  return window.env.platform.includes('win')
}
