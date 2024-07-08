import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { initCommand } from './commands/init'
import { addCommand } from './commands/add'

yargs(hideBin(process.argv))
  .command(
    'init',
    'Configure the project for use with React Native Shadcn/UI',
    () => {},
    initCommand
  )
  .command(
    'add',
    'Add a new component to the project',
    (yargs) => {
      yargs.option('name', {
        type: 'string',
        description: 'The name of the component',
        demandOption: true,
      })
    },
    addCommand
  )
  .demandCommand(1)
  .parse()
