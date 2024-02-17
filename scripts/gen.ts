import { execSync } from 'node:child_process'
import path from 'node:path'
import * as fs from 'fs'
import { globSync } from 'glob'
import { ROOT } from './common/root'
import { spec } from './common/spec'

const OUTPUT = 'src'
const HTTP_CLIENT = 'axios'
const NAME = 'TimeWeb'
const SRC_DIRECTORY = path.resolve(ROOT, 'src')

async function main (): Promise<void> {
  generate()
  fixIndex()
  fixMainClass()
  fixServices()
  removeMeta()
}

function generate (): void {
  execSync(`yarn openapi -i ${spec} -o ${OUTPUT} -c ${HTTP_CLIENT} --name ${NAME}`)
}

function fixIndex (): void {
  const file = path.resolve(SRC_DIRECTORY, `index.ts`)
  let text = fs.readFileSync(file, 'utf8')
  text = text.replace(`export { mailbox } from './models/mailbox';\n`, '')
  text = text.replace(`export { domain } from './models/domain';\n`, '')
  text = text.replace(`export type { meta } from './models/meta';\n`, '')
  fs.writeFileSync(file, text)
}

function fixMainClass (): void {
  const file = path.resolve(SRC_DIRECTORY, `${NAME}.ts`)
  let text = fs.readFileSync(file, 'utf8')
  text = text.replace('readonly : Service', 'readonly service: Service')
  text = text.replace('this. = new Service', 'this.service = new Service')
  fs.writeFileSync(file, text)
}

function fixServices (): void {
  const files = globSync(`${SRC_DIRECTORY}/services/*.ts`)
  for (const file of files) {
    let text = fs.readFileSync(file, 'utf8')
    text = text.replace(`type { meta } from '../models/meta'`, `type { Meta } from '../models/Meta'`)
    text = text.replaceAll(`meta: meta`, `meta: Meta`)
    fs.writeFileSync(file, text)
  }
}

function removeMeta (): void {
  fs.unlinkSync(path.resolve(SRC_DIRECTORY, `models/meta.ts`))
}

main().catch(console.error)
