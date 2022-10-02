import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </>
  );
}
