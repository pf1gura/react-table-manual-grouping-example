import { default as notGroupedMockData } from "./assets/export.json"

export function getMockedApiData(grouping: string[]) {
  const deepCopy: BaseMockItem[] = JSON.parse(
    JSON.stringify(notGroupedMockData),
  )

  if (grouping.length === 0) {
    return deepCopy
  }

  const groupedData: MockItem[] = []

  for (const groupingValue of Array.from(
    new Set(deepCopy.map((item) => item[grouping[0]])),
  )) {
    groupedData.push({
      groupingColumnId: grouping[0],
      [grouping[0]]: groupingValue,
      subRows: deepCopy.filter((item) => item[grouping[0]] === groupingValue),
    })
  }

  return groupedData
}

interface BaseMockItem {
  first_name: string
  last_name: string
  email: string
  state: string
}

export type MockItem =
  | BaseMockItem
  | {
      subRows: MockItem[]
      groupingColumnId: string

      // should be prop with name of grouping column
      // same as value of groupingColumnId
      [groupingValue: string]: unknown
    }
