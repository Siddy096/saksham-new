import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 7
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
  insideContainerText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  subContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderColor: "black",
    borderRadius: 8,
  },
  iconStyle: {
    width: 100,
    height: 100
  },
  subSubContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 170,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  }
})

export default styles