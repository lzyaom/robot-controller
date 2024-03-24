type Langeuage = 'JS' | 'Python' | 'C' | 'Rust'

export interface Program {
  id: string
  fileName: string
  cover?: string
  type: Langeuage
  createTime: string
  description?: string
}
