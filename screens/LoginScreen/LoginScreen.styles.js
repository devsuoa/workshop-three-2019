import { StyleSheet } from "react-native";

export default StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: "#E43F3F",
        padding: 20
    },
    headerContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "#FFF",
        marginTop: 20
    },
    formContainer: {
        flex: 3,
        justifyContent: "center"
    },
    imageStyle: {
        width: 150,
        height: 150
    },
    buttonContainer: {
        height: 60,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "700"
    },
    inputContainer: {
        height: 60,
        color: "#FFF",
        padding: 10,
        backgroundColor: "rgba(255, 255,255, 0.2)",
        marginBottom: 20
    }
})