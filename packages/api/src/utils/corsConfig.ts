import { env } from '../env'

export const corsConfig = {
  credentials: true,
  origin: [
    'https://omnivore.app',
    'https://dev.omnivore.app',
    'https://demo.omnivore.app',
    'https://web-prod.omnivore.app',
    'https://web-dev.omnivore.app',
    'https://web-demo.omnivore.app',
    'http://192.168.10.182:3000',
    env.dev.isLocal && 'https://studio.apollographql.com',
    env.client.url,
    'lsp://logseq.io',
    'app://obsidian.md',
    'https://plugins.amplenote.com',
    'amplenote-handler://bundle',
    'capacitor://192.168.10.182',
    'http://192.168.10.182',
  ],
  maxAge: 86400,
}
