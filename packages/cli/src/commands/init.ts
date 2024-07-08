import fs from 'node:fs'
import path from 'node:path'

import ora from 'ora'

import * as templates from '../utils/templates'
import { checkFileExists } from '../utils/check-file-exists'
import { installDependencies } from '../utils/install-dependencies'

const DEPENDENCIES = new Set([
  'class-variance-authority',
  'clsx',
  'nativewind@^4.0.1',
  'tailwind-merge',
])

const DEV_DEPENDENCIES = new Set(['tailwindcss'])

export const initCommand = async () => {
  const spinner = ora(`Initializing project...`)?.start()

  const cwd = process.cwd()
  const srcExists = checkFileExists('src')

  const libPath = srcExists ? 'src/lib' : 'lib'
  const utilsExists = checkFileExists(`${libPath}/utils.ts`)

  if (!utilsExists) {
    fs.mkdirSync(path.join(cwd, libPath), { recursive: true })
    fs.writeFileSync(path.join(cwd, `${libPath}/utils.ts`), templates.UTILS)
  }

  const tailwindConfigExists = checkFileExists('tailwind.config.js')

  if (!tailwindConfigExists) {
    fs.writeFileSync(path.join(cwd, 'tailwind.config.js'), templates.TAILWIND_CONFIG)
  }

  const babelConfigExists = checkFileExists('babel.config.js')

  if (!babelConfigExists) {
    fs.writeFileSync(path.join(cwd, 'babel.config.js'), templates.BABEL_CONFIG)
  }

  spinner.succeed()

  // Install dependencies
  const dependenciesSpinner = ora('Installing dependencies...').start()
  try {
    await installDependencies(DEPENDENCIES, DEV_DEPENDENCIES)
    dependenciesSpinner.succeed()
  } catch (error) {
    dependenciesSpinner.fail()
  }
}
