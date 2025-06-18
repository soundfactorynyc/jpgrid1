// Global type declarations for magical reaction system
declare global {
  interface Window {
    shootMagicalReaction: (content: string, type: string, value?: number) => void;
  }
}

export {};
