import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import TopBar from "./TopBar";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import call from "./images/incentives.png";
import arrow from "./images/arrow.png";
import process from "./images/process.png";
import Modal from "react-native-modal";

const defaultProduct1 = [
  {
    label: "SO Number 10000001",
    amt: "1 Each",
  },
  {
    label: "SO Number 10000002",
    amt: "2 Each",
  },
  {
    label: "SO Number 10000003",
    amt: "2 Each",
  },
  {
    label: "SO Number 10000004",
    amt: "2 Each",
  },
  {
    label: "SO Number 10000001",
    amt: "1 Each",
  },
  {
    label: "SO Number 10000002",
    amt: "1 Each",
  },
];
const defaultProducts = [
  {
    label: "product 1",
    amt: "AED 400",
    action: {
      title: "Product 1",
      total: "AED 400",
      list: defaultProduct1,
    },
  },
  {
    label: "product 2",
    amt: "AED 100",
  },
  {
    label: "product 3",
    amt: "AED 100",
  },
  {
    label: "product 4",
    amt: "AED 100",
  },
  {
    label: "product 5",
    amt: "AED 100",
  },
  {
    label: "product 6",
    amt: "AED 200",
  },
];
const defaultIncentivePayable = [
  {
    label: "Services Incentive for Managers",
    amt: "AED 1,000",
    action: {
      title: "Services Incentive for Managers",
      total: "AED 1,00",
      list: defaultProducts,
    },
  },
  {
    label: "Upselling Incentive",
    amt: "AED 250",
  },
  {
    label: "Sales Incentive",
    amt: "AED 200",
  },
  {
    label: "Scheme4",
    amt: "AED 180",
  },
  {
    label: "Scheme5",
    amt: "AED 150",
  },
  {
    label: "Scheme 6",
    amt: "AED 180",
  },
];

const Detail = (props) => {
  const [showmodal, setshowmodal] = useState(false);
  const [modaldata, setmodaldata] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "AWR Monthly payroll Aug-2021",
      value: "AWR Monthly payroll Aug-2021",
    },
    {
      label: "AWR Monthly payroll Aug-2022",
      value: "AWR Monthly payroll Aug-2022",
    },
    {
      label: "AWR Monthly payroll Aug-2023",
      value: "AWR Monthly payroll Aug-2023",
    },
  ]);
  const totalincentive = [
    {
      label: "Incentive Payable",
      amt: "AED 1,960",
    },
    {
      label: "Defferred Incentive",
      amt: "AED 500",
    },
  ];
  useEffect(() => {
    console.log(modaldata);
  }, [modaldata]);
  return (
    <View style={{ flex: 1 }}>
      <TopBar {...props} />
      {/* payroll period */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          SELECT PAYROLL PERIOD
        </Text>
      </View>

      <DropDownPicker
        open={open}
        items={items}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        zIndex={2000}
        placeholder="Select Payroll period"
        style={{
          backgroundColor: "#e0e0e0",
          borderWidth: 0,
        }}
        containerStyle={{
          width: "100%",
          paddingHorizontal: 15,
        }}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#e35454",
            borderRadius: 10,
            marginVertical: 5,
            width: "30%",
          }}
        >
          <Text style={{ color: "white", fontSize: 14, textAlign: "center" }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          // zIndex: -1000,
          backgroundColor: "white",
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          // elevation: 5,
          borderRadius: 8,
          alignItems: "center",
          // marginVertical: 130,
          margin: 10,
        }}
      >
        {/* info icon */}
        <View
          style={{
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Icon name="info-circle" size={20} color="gray" />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Image source={call} style={{ width: 50, height: 50 }} />
            <Text
              style={{
                color: "#2a8774",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Total Incentives
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
            }}
          >
            <View
              style={{
                backgroundColor: "#d5f7f0",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#2a8774", fontWeight: "bold" }}>
                AED 2,460
              </Text>
            </View>
          </View>
        </View>
        {totalincentive.map((item, index) => {
          return (
            <View style={{ width: "100%" }} key={index}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                  marginVertical: 5,
                  backgroundColor: "#ededed",
                  borderRadius: 5,
                }}
                onPress={() => {
                  let val = [...modaldata];
                  val.push({
                    title: "Incentive Payable",
                    total: "AED 1,960",
                    list: defaultIncentivePayable,
                  });
                  setmodaldata(val);
                  setshowmodal(true);
                }}
              >
                <Text>{item.label}</Text>
                <Text
                  style={{
                    color: "#2a8774",
                    fontWeight: "bold",
                    backgroundColor: "#d5f7f0",
                    padding: 5,
                    borderRadius: 5,
                    textAlign: "right",
                  }}
                >
                  {item.amt}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <Text style={{ color: "gray", marginTop: 10 }}>
          Payment is subject to perform /KPI achievement
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          borderRadius: 8,
          alignItems: "center",
          margin: 10,
        }}
      >
        {/* info icon */}
        <View
          style={{
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Icon name="info-circle" size={20} color="gray" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Image source={arrow} style={{ width: 50, height: 50 }} />
            <Text
              style={{
                color: "#7c7d7d",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Accumulated Incentive Defferred
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
            }}
          >
            <View
              style={{
                backgroundColor: "#edf0f0",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#7c7d7d", fontWeight: "bold" }}>
                AED 1,000
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ color: "gray", marginTop: 10 }}>
          Payment is subject to perform /KPI achievement
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          borderRadius: 8,
          alignItems: "center",
          margin: 10,
        }}
      >
        {/* info icon */}
        <View
          style={{
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Icon name="info-circle" size={20} color="gray" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Image source={process} style={{ width: 60, height: 50 }} />
            <Text
              style={{
                color: "#234acc",
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Progressive Incentive
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
            }}
          >
            <View
              style={{
                backgroundColor: "#d4ddfa",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#234acc", fontWeight: "bold" }}>
                AED 600
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ color: "gray", marginTop: 10 }}>
          Payment is subject to perform /KPI achievement
        </Text>
      </View>

      <Modal isVisible={showmodal}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
              borderRadius: 8,
              alignItems: "center",
              margin: 10,
              width: "100%",
            }}
          >
            {/* header */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  let val = [...modaldata];
                  val.pop();
                  setmodaldata(val);
                }}
              >
                {modaldata?.length > 1 && (
                  <Icon name="chevron-left" size={15} color="gray" />
                )}
              </TouchableOpacity>

              <Text style={{ fontSize: 18 }}>
                {modaldata[modaldata?.length - 1]?.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setshowmodal(false);
                  setmodaldata([]);
                }}
              >
                <Icon name="times" size={15} color="gray" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 5,
                borderColor: "red",
                borderWidth: 2,
                marginVertical: 5,
                padding: 10,
              }}
            >
              <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
                Total Amount {modaldata[modaldata?.length - 1]?.total}
              </Text>
            </View>
            {modaldata[modaldata?.length - 1]?.list?.map((item, index) => {
              return (
                <View style={{ width: "100%" }} key={index}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 10,
                      marginVertical: 5,
                      backgroundColor: "#ededed",
                      borderRadius: 5,
                    }}
                    onPress={() => {
                      let val = [...modaldata];
                      let v = { ...item.action };
                      val.push(v);
                      setmodaldata(val);
                      setshowmodal(true);
                    }}
                  >
                    <Text>{item?.label}</Text>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        backgroundColor: "#ffebeb",
                        padding: 5,
                        borderRadius: 5,
                        textAlign: "right",
                      }}
                    >
                      {item?.amt}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Detail;
