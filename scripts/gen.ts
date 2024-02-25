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
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8')
    .replace(`export { mailbox } from './models/mailbox';\n`, '')
    .replace(`export { domain } from './models/domain';\n`, '')
    .replace(`export type { meta } from './models/meta';\n`, '')
  )
}

function fixMainClass (): void {
  const file = path.resolve(SRC_DIRECTORY, `${NAME}.ts`)
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8')
    .replace('readonly : Service', 'readonly service: Service')
    .replace('this. = new Service', 'this.service = new Service')
  )
}

function fixServices (): void {
  const files = globSync(`${SRC_DIRECTORY}/services/*.ts`)
  for (const file of files) {
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8')
      .replace(`type { meta } from '../models/meta'`, `type { Meta } from '../models/Meta'`)
      .replaceAll(`meta: meta`, `meta: Meta`)
    )
  }
}

function removeMeta (): void {
  fs.unlinkSync(path.resolve(SRC_DIRECTORY, `models/meta.ts`))
}

main().catch(console.error)
