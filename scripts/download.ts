import axios from 'axios'
import * as fs from 'fs'
import { spec } from './common/spec'

const URL = 'https://timeweb.cloud/api-docs-data/bundle.json'

async function main (): Promise<void> {
  const result = await axios({ url: URL, responseType: 'json' })
  fs.writeFileSync(spec, JSON.stringify(result.data, null, 2))
}
main().catch(console.error)
