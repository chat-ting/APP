export function isElectron() {
  return (
    typeof window !== 'undefined' &&
    typeof window.process === 'object' &&
    window.process.versions != null &&
    window.process.versions.electron != null
  )
}

export const isBrowser = () => !isElectron()
