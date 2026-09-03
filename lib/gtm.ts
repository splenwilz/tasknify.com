type DataLayerEvent = {
  event: string
  [key: string]: string | number | boolean
}

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[]
  }
}

export function trackEvent(event: DataLayerEvent) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  }
}
