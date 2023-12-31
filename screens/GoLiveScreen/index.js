import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = {
  user: {
    name: 'John Doe',
    handle: '@johndoe',
    profilePic: 'https://tinyurl.com/42evm3m3',
    crowdscore: 4.5
  },
  viewers: [{
    name: 'Viewer 1',
    handle: '@viewer1',
    crowdscore: 4.2
  }, {
    name: 'Viewer 2',
    handle: '@viewer2',
    crowdscore: 3.8
  } // More viewers...
  ],
  comments: [{
    user: 'User 1',
    comment: 'Great stream!'
  }, {
    user: 'User 2',
    comment: 'Keep it up!'
  } // More comments...
  ]
};

const StreamScreen = () => {
  return <SafeAreaView style={_styles.efBTcCMI}>
      <View style={_styles.kNoAHTJZ}>
        <Image source={{
        uri: dummyData.user.profilePic
      }} style={_styles.wSojFARC} />
        <Text style={_styles.MqbWIMbj}>{dummyData.user.name}</Text>
        <Text style={_styles.PkffekDI}>{dummyData.user.handle}</Text>
        <Text style={_styles.rvpCTyFu}>Crowdscore: {dummyData.user.crowdscore}</Text>
        <TextInput placeholder="Stream Title" style={_styles.LYNhpziO} />
        <Button title="Start/Stop Streaming" onPress={() => {}} />
        <Text style={_styles.JTTDbrpX}>Live Video Feed</Text>
        <View style={_styles.DlqhcoUq}>
          <TouchableOpacity>
            <Text>On/Off</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Switch Camera</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={_styles.wHWbXdZq}>
          <Text>Mute/Unmute</Text>
        </TouchableOpacity>
        <Text style={_styles.RoVRekDw}>Chat</Text>
        <FlatList data={dummyData.comments} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View>
              <Text>{item.user}</Text>
              <Text>{item.comment}</Text>
            </View>} />
        <TextInput placeholder="Add comment" style={_styles.yGbQmzrs} />
        <Button title="Post" onPress={() => {}} />
        <Text style={_styles.rwDlSwLk}>Viewer List</Text>
        <FlatList data={dummyData.viewers} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View>
              <Text>{item.name}</Text>
              <Text>{item.handle}</Text>
              <Text>Crowdscore: {item.crowdscore}</Text>
              <Button title="Kick" onPress={() => {}} />
            </View>} />
      </View>
    </SafeAreaView>;
};

export default StreamScreen;

const _styles = StyleSheet.create({
  efBTcCMI: {
    flex: 1,
    backgroundColor: "#fff"
  },
  kNoAHTJZ: {
    padding: 20
  },
  wSojFARC: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  MqbWIMbj: {
    fontSize: 24,
    fontWeight: "bold"
  },
  PkffekDI: {
    fontSize: 18,
    color: "gray"
  },
  rvpCTyFu: {
    fontSize: 18,
    color: "green"
  },
  LYNhpziO: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20
  },
  JTTDbrpX: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  DlqhcoUq: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  wHWbXdZq: {
    marginTop: 20
  },
  RoVRekDw: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  yGbQmzrs: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20
  },
  rwDlSwLk: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  }
});