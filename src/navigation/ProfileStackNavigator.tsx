import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import PersonalDetailsScreen from "../screens/PersonalDetailsScreen";
import ObjectiveScreen from "../screens/ObjectiveScreen";
import ExperienceScreen from "../screens/ExperienceScreen";
import EducationDetailsScreen from "../screens/EducationDetailsScreen";
import OrganisationScreen from "../screens/OrganisationScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import CertificationScreen from "../screens/CertificationScreen";
import ContactScreen from "../screens/ContactScreen";
import SkillScreen from "../screens/SkillScreen";

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

      <Stack.Screen
        name="Education"
        component={EducationDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Organisation"
        component={OrganisationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Certification"
        component={CertificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Skill"
        component={SkillScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
