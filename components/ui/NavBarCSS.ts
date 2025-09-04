import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
})

export default styles