import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    title: 'Dummy Title',
    price: '100',
    description: 'This is a dummy description',
    timestamp: 'Just now',
    postedBy: 'Dummy User',
    userProfilePic: 'https://tinyurl.com/42evm3m3',
    crowdScore: '4.5',
    userName: 'Dummy User',
    handle: '@dummyuser',
    award: 'Dummy Award'
  };
  return <SafeAreaView style={_styles.rHGxrRmf}>
      <ScrollView>
        <View style={_styles.jkRuJOfv}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.bmECCgVT} />
          <Text style={_styles.vkgqiKyi}>{dummyData.title}</Text>
          <Text style={_styles.HykrcNHa}>{dummyData.price}</Text>
          <Text style={_styles.PXDIchdA}>{dummyData.description}</Text>
          <Text style={_styles.grUFHVnv}>{dummyData.timestamp}</Text>
          <View style={_styles.ovffLgbp}>
            <Image source={{
            uri: dummyData.userProfilePic
          }} style={_styles.REWgCaHt} />
            <View style={_styles.nfoIcXlv}>
              <Text style={_styles.ERXDylgp}>{dummyData.userName}</Text>
              <Text style={_styles.sHGWRGsV}>{dummyData.handle}</Text>
            </View>
          </View>
          <Text style={_styles.sYcveHIf}>Crowdscore: {dummyData.crowdScore}</Text>
          <Text style={_styles.vxujjyXA}>Award: {dummyData.award}</Text>
          <View style={_styles.MmToBZiT}>
            <Button title="Chat" onPress={() => {}} />
            <Button title="Send Friend Request" onPress={() => {}} />
            <Button title="Report" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  rHGxrRmf: {
    flex: 1,
    backgroundColor: "#fff"
  },
  jkRuJOfv: {
    alignItems: "center",
    padding: 20
  },
  bmECCgVT: {
    width: "100%",
    height: 200
  },
  vkgqiKyi: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  HykrcNHa: {
    fontSize: 20,
    color: "#888",
    marginTop: 10
  },
  PXDIchdA: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  grUFHVnv: {
    fontSize: 14,
    color: "#444",
    marginTop: 10
  },
  ovffLgbp: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  REWgCaHt: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nfoIcXlv: {
    marginLeft: 10
  },
  ERXDylgp: {
    fontSize: 16,
    fontWeight: "bold"
  },
  sHGWRGsV: {
    fontSize: 14,
    color: "#666"
  },
  sYcveHIf: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  vxujjyXA: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  MmToBZiT: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20
  }
});