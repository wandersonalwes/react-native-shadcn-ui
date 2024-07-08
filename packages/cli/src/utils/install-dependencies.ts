import util from 'node:util'
import { exec } from 'node:child_process'
const execPromise = util.promisify(exec)

import { detect } from 'detect-package-manager'

export const installDependencies = async (
  mainDeps: Set<string>,
  devDeps: Set<string>
) => {
  const packageManager = await detect()
  const packageCommand = packageManager === 'npm' ? 'install' : 'add'

  const deps = [...mainDeps, ...devDeps]

  for (const dependency of deps) {
    const devFlag = devDeps.has(dependency) ? '-D' : ''
    const command = `${packageManager} ${packageCommand} ${devFlag} ${dependency}`

    await execPromise(command)
  }
}
