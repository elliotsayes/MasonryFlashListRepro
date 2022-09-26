import { FlashList, MasonryFlashList } from "@shopify/flash-list"
import { Text } from "react-native"

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

const NoteListScreen = () => {
  return (
    <MasonryFlashList
      data={DATA}
      numColumns={2}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  )
}

export default NoteListScreen
