interface PluginPage {
  name: string
  url: string
  icon: string
  children?: PluginPage[]
}

export interface Plugin {
  type: string
  name: string
  author?: string
  email?: string
  describe: string
  icon: string
  status?: boolean
  createTime?: string
  updateTime?: string
  page?: PluginPage
}
