# TimeWeb Cloud API SDK

![cover](cover/cover.svg)

[![npm](https://img.shields.io/npm/v/timeweb-cloud-sdk?label=npm)](https://www.npmjs.com/package/timeweb-cloud-sdk)
[![downloads](https://img.shields.io/npm/dt/timeweb-cloud-sdk?label=downloads)](https://www.npmjs.com/package/timeweb-cloud-sdk)

## Install

```shell
yarn add timeweb-cloud-sdk
```

```shell
npm -i timeweb-cloud-sdk
```

## Using example

```typescript
import { TimeWeb } from 'timeweb-cloud-sdk'

const TOKEN = '<YOUR API TOKEN>' // You can create token here: https://timeweb.cloud/my/api-keys

async function main (): Promise<void> {
  const timeWeb = new TimeWeb({ TOKEN })
  const getProjectsResult = await timeWeb.service.getProjects()
  console.log(getProjectsResult.projects)
}
main().catch(console.error)

```

## Development

* [DEVELOPMENT.md](docs/DEVELOPMENT.md)

## Useful links

* [TimeWeb Cloud API docs](https://timeweb.cloud/api-docs)
* [TimeWeb Cloud GitHub](https://github.com/timeweb-cloud)
* [OpenAPI Generator](https://github.com/openapitools/openapi-generator)
