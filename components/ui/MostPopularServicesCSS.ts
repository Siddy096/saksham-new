import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const newWidth = width - 33
const newHeight = width * 0.8

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 7,
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
    borderRadius: 8,
  },
  subSubContainer: {
    width: newWidth,
    height: newHeight,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden",
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    flex: 1,
    height: newHeight / 2
  },
  textContainer: {
    flex: 1, 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%", 
  },
  exploreMore: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "600"
  }
});


export default styles