import ora from 'ora'
import fs from 'node:fs'
import path from 'node:path'
import type { ArgumentsCamelCase } from 'yargs'

import { checkFileExists } from '../utils/check-file-exists'
import { fetchComponents } from '../utils/registry'

export const addCommand = async (argv: ArgumentsCamelCase<{ name: string }>) => {
  const spinner = ora(`Installing components...`).start()

  const components = await fetchComponents([argv.name])

  const srcExists = checkFileExists('src')
  const componentFolder = srcExists ? 'src/components' : 'components'

  if (!checkFileExists(componentFolder)) {
    fs.mkdirSync(path.join(process.cwd(), componentFolder), { recursive: true })
  }

  for (const component of components) {
    spinner.text = `Installing ${component.name}...`
    fs.writeFileSync(
      path.join(process.cwd(), `${componentFolder}/${component.name}`),
      component.content
    )
  }

  spinner.succeed(`Done.`)
}
