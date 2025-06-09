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
    resizeMode: "contain",
    marginBottom: 5, // era 40, reduza para 5 ou 0
  },

  academyName: {
    fontSize: 28,
    color: COLORS.white,
    fontFamily: "Montserrat_800ExtraBold",
    marginBottom: 20,
    marginTop: 0, // opcional: remove espaço do texto
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
});
