import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 16,
  },

  eventName: {
    fontSize: 24,
    marginTop: 48,
    fontWeight: "bold",
    color: "#fff",
  },

  eventDate: {
    marginTop: 2,
    color: "#6b6b6b",
    fontSize: 16,
  },

  form: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 16,
  },

  input: {
    height: 56,
    flex: 1,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 12,
    marginRight: 6,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  TextEmptyList: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    marginTop: 16,
  },
});
