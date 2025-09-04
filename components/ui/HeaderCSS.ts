import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginTop: 15,
    },
    cartimage: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    locationText: {
        fontSize: 20,
        fontWeight: "600",
    },
    searchBar: {
        marginVertical: 8,
        backgroundColor: "#f1f1f1",
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 20,
        color: "#333",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2, 
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20
    }
});

export default styles;