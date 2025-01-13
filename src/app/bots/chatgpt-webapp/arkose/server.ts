import { ofetch } from 'ofetch'

export async function fetchArkoseToken(): Promise<string | undefined> {
  return await Promise.resolve('some-token')
  // try {
  //   const resp = await ofetch('https://chathub.gg/api/arkose')
  //   return resp.token
  // } catch (err) {
  //   console.error(err)
  //   return undefined
  // }
}
