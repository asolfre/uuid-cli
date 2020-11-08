import * as uuid from 'uuid'

import {Command, flags} from '@oclif/command'

class UuidCli extends Command {
  static description = 'describe the command here'

  static flags = {
    // flag to show CLI version
    about: flags.version({char: 'a'}),
    // flag to show help
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --amount=VALUE)
    number: flags.string({char: 'n', description: 'Number of UUIDs to generate'}),
  }

  static args = [
    {
      name: 'number',
      required: false,
      description: 'number of UUIDs to generate',
      default: 1,
    },
  ]

  async run() {
    const {args, flags} = this.parse(UuidCli)

    const amount = flags.number ?? args.number ?? 1

    for (let index = 0; index < amount; index++) {
      this.log(uuid.v4())
    }
  }
}

export = UuidCli
