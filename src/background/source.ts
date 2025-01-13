// import { ofetch } from 'ofetch'

// const plausibleApiHost = import.meta.env.VITE_PLAUSIBLE_API_HOST || 'http://localhost'

async function trackEvent(name: string, props: object) {
  return await Promise.resolve({name, props})
  // await ofetch(`${plausibleApiHost}/api/event`, {
  //   method: 'POST',
  //   body: {
  //     domain: 'chathub.gg',
  //     name,
  //     url: location.href,
  //     props,
  //   },
  //   mode: 'no-cors',
  // })
}

export async function trackInstallSource() {
  const { source } = await Promise.resolve({source: 'some-source'})
  trackEvent('install', { source, language: navigator.language })
}
