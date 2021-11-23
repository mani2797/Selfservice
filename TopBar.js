import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const TopBar = (props) => {
  const { navigation } = props;
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={30} />
      </TouchableOpacity>
    </View>
  );
};
export default TopBar;
