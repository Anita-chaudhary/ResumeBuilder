import { AppProvider } from "./src/context/AppContext";
import RootNavigator from "./src/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
