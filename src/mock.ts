export { default as notGroupedMockData } from "./assets/export.json"

interface BaseMockItem {
  first_name: string
  last_name: string
  email: string
  state: string
}

export type MockItem = BaseMockItem
