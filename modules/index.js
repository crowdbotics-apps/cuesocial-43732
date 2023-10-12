import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  handle: '@johndoe',
  score: 85
}, {
  id: '2',
  name: 'Jane Doe',
  handle: '@janedoe',
  score: 90
} // Add more dummy data here
];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.dRwgrhKn}>
      <View style={_styles.nduOZLJV}>
        <Button title="Back" onPress={() => {}} />
        <View style={_styles.OdQnwTPf}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.lOInPHYq} />
          <View style={_styles.RBaxdoVp}>
            <Text style={_styles.iUTiwSmY}>User Name</Text>
            <Text style={_styles.JbFOQjPl}>@handle</Text>
          </View>
          <View style={_styles.tzYMQcWQ} />
          <Text style={_styles.FxjwAerg}>Crowdscore</Text>
        </View>
        <TextInput style={_styles.ZYajKtQj} placeholder="Search" />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.DpzOgMTz}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.fXmzchyk} />
              <View style={_styles.GXzGPUov}>
                <Text style={_styles.RKQmfWRq}>{item.name}</Text>
                <Text style={_styles.ywNqSiGJ}>{item.handle}</Text>
              </View>
              <View style={_styles.ayNvbosI} />
              <Text style={_styles.UdHTDHNH}>{item.score}</Text>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  dRwgrhKn: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  nduOZLJV: {
    padding: 20
  },
  OdQnwTPf: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  lOInPHYq: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  RBaxdoVp: {
    marginLeft: 10
  },
  iUTiwSmY: {
    fontSize: 18,
    fontWeight: "bold"
  },
  JbFOQjPl: {
    fontSize: 16,
    color: "#888"
  },
  tzYMQcWQ: {
    flex: 1
  },
  FxjwAerg: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ZYajKtQj: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10
  },
  DpzOgMTz: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  fXmzchyk: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  GXzGPUov: {
    marginLeft: 10
  },
  RKQmfWRq: {
    fontSize: 18,
    fontWeight: "bold"
  },
  ywNqSiGJ: {
    fontSize: 16,
    color: "#888"
  },
  ayNvbosI: {
    flex: 1
  },
  UdHTDHNH: {
    fontSize: 24,
    fontWeight: "bold"
  }
});