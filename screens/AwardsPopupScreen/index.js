import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const awardsData = [{
  id: '1',
  type: 'Stars',
  levels: 5
}, {
  id: '2',
  type: 'Medals',
  levels: 5
}, {
  id: '3',
  type: 'Bronze',
  levels: 5
}, {
  id: '4',
  type: 'Silver',
  levels: 5
}, {
  id: '5',
  type: 'Gold',
  levels: 5
}];

const AwardScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={_styles.fXDgsiWA}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.dIOnhLCW} />
      <View>
        <Text style={_styles.jIEiYIxT}>{item.type}</Text>
        <Text style={_styles.knPciWJn}>Levels: {item.levels}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.njdIoptD}>
      <View style={_styles.CpWYiFBR}>
        <Text style={_styles.uyaKgbgo}>Awards</Text>
        <FlatList data={awardsData} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

export default AwardScreen;

const _styles = StyleSheet.create({
  fXDgsiWA: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  dIOnhLCW: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  jIEiYIxT: {
    fontSize: 18,
    fontWeight: "bold"
  },
  knPciWJn: {
    fontSize: 16,
    color: "gray"
  },
  njdIoptD: {
    flex: 1,
    backgroundColor: "#fff"
  },
  CpWYiFBR: {
    padding: 20
  },
  uyaKgbgo: {
    fontSize: 24,
    fontWeight: "bold"
  }
});