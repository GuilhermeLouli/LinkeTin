import { Text } from "react-native";

export default function MessageDetails({ item }) {

  if (item.type !== 'sent') return <Text style={{ marginTop: 5 }}>{item.time}</Text>

  switch (item.detail) {
    case 'read': return <Text style={{ marginTop: 5 }}>Read  {item.time}</Text>
    case 'seen': return <Text style={{ marginTop: 5 }}>Seen  {item.time}</Text>
    case 'played': return <Text style={{ marginTop: 5 }}>Played  {item.time}</Text>

    default: return <Text style={{ marginTop: 5 }}>{item.time}</Text>
  }
}
