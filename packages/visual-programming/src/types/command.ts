export interface Command {
  id: string
  name: string
  color: string
  children?: Array<Command>
  isBlock: boolean
  component?: string
  parent?: Command
  next?: Command
}
