import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import Player from "./src/components/Player";
import Search from "./src/components/Search";
import store from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen
							name="Home"
							component={Home}
							options={{
								title: "Mflix",

								headerTitleStyle: {
									color: "black",
								},
								headerTintColor: "#fff",
							}}
						></Stack.Screen>
						<Stack.Screen name="Player" component={Player} />
						<Stack.Screen name="Search" component={Search} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
}
