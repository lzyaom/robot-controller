export interface Command {
  id: string
  name: string
  color: string
  children?: Array<Command>
  isBlock: boolean
  component?: string
  parent?: Command
}

export type TreeNode = {
  expend: boolean
  parent?: TreeNode
  children?: TreeNode
  data: Command
  level: number
}


