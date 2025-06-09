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
    width: 200,
    height: 80,
    marginBottom: 40,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: COLORS.white,
    width: "100%",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: COLORS.green,
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  link: {
    color: COLORS.white,
    marginTop: 20,
  },
  academyName: {
    fontSize: 26,
    color: COLORS.white,
    fontWeight: "bold",
    marginBottom: 20,
  },
  
});
