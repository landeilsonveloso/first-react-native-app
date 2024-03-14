import { useState } from 'react'
import { Button, Image, Text, TextInput, View } from 'react-native'

export default function App() {
  const [item, setItem] = useState("")
  const [visibleItem, setVisibleItem] = useState(item)

  return (
    <View style={{flex: 1, flexDirection: "column", backgroundColor: "#eee", marginTop: 30}}>
      <View style={{flex: 4, justifyContent: "center", alignItems: "center",}}>
        <Image style={{width: 250, height: 250}} source={require("./assets/bag.jpg")}/>
      </View>

      <View style={{flex: 2 , flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
        <View>
          <Text>CADASTRE SEU ITEM ESCOLAR</Text>
        </View>

        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Text>ITEM:</Text>
          <TextInput style={{width: 225, height: 30, borderWidth: 1, marginLeft: 5, padding: 5}} autoCapitalize='characters' value={item} onChangeText={newItem => setItem(newItem)}/>
        </View>
      </View> 

      <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
        <View>
          <Button title="Limpar" color="red" onPress={() => setItem("")}/>
        </View>

        <View>
          <Button title="Cadastrar" onPress={() => setVisibleItem(item)}/>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>{visibleItem}</Text>
      </View>
    </View>
  )
}
