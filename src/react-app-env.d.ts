/// <reference types="react-scripts" />
declare global {
  interface Window {
    example: any; // 👈️ turn off type checking
  }
}
declare module 'halogen/RingLoader';