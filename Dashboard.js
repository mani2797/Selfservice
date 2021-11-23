import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Dashboard = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          borderTopWidth: 3,
          borderTopColor: "brown",
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Detail")}
      >
        <View
          style={{
            marginBottom: 5,
            width: "30%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 100,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              INCENTIVE PAYABLE
            </Text>
          </View>
          <Icon name="bar-chart" size={30} color="#900" />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 32,
            marginBottom: 5,
          }}
        >
          1,936
        </Text>
        <Text
          style={{
            fontSize: 11,
          }}
        >
          Updated: 30-August-2021
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Dashboard;
