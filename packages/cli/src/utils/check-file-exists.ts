import fs from 'node:fs'
import path from 'node:path'

export const checkFileExists = (filePath: string) => {
  const cwd = process.cwd()
  return fs.existsSync(path.join(cwd, filePath))
}
