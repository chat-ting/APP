export {}
declare global {
  interface Window {
    env: {
      isElectron: boolean
      platform: NodeJS.Platform
    }
    electronAPI: {
      minimize(): void
      maximize(): void
      close(): void
    }
  }
}
