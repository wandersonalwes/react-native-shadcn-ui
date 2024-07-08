import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command(
    'init',
    'Configure the project for use with React Native Shadcn/UI',
    () => {},
    (argv) => {
      console.info(argv)
    }
  )
  .command(
    'add',
    'Add a new component to the project',
    (yargs) => {
      yargs
        .option('name', {
          type: 'string',
          description: 'The name of the component',
          demandOption: true,
        })
        .option('path', {
          type: 'string',
          description: 'The path to the component',
          demandOption: true,
        })
    },
    (argv) => {
      console.info(argv)
    }
  )
  .demandCommand(1)
  .parse()
