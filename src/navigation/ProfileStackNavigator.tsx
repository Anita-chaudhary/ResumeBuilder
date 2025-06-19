import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";
import ObjectiveScreen from "../screens/ObjectiveScreen";
import ExperienceScreen from "../screens/ExperienceScreen";

const Stack = createNativeStackNavigator();
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Objective"
        component={ObjectiveScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Experience"
        component={ExperienceScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
