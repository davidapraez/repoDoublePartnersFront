import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "./src/components/UserListScreen";
import UserProfile from "./src/components/UserProfile";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f8f9fa",
          },
          headerTintColor: "#005f99",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Icon
              name="github"
              size={25}
              color="#005f99"
              style={{ marginRight: 10 }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: "GitSeeker" }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ title: "Perfil de Usuario" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
