import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  academyName: {
    fontSize: 28,
    color: COLORS.white,
    fontFamily: 'Montserrat_800ExtraBold',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  slogan: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 40,
    textAlign: "center",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: COLORS.red,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
