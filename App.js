import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View className="gap-5 p-10 bg-neutral-300">
      <View className="flex-row justify-between">
        <View>
          <Image
            source={{
              uri:"https://cdn2.vectorstock.com/i/1000x1000/09/81/frustrated-woman-vector-22680981.jpg",
            }}
            className="h-10 w-10 rounded-full"
          />
        </View>
        <View>
          <Text className="text-black text-xl">Trip Planner</Text>
        </View>
        <View className=" bg-white rounded-full">
        <Feather name="search" size={24} color="black" />
        </View>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: "https://th.bing.com/th/id/R.0e72f613266a671082200cb139ed6ec1?rik=54S10%2b%2fbfygpNw&pid=ImgRaw&r=0",
          }}
          className="h-[300] "
          borderRadius={20}
        >
          <View className="flex-col justify-between h-full p-4">
            <View className="flex-row justify-between">
              <View>
                <Text className="bg-blue-700 rounded-full">Perfect for you</Text>
              </View>
              <View>
                <Text>What to do</Text>
              </View>
              <View className="bg-white rounded-full">
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
              </View>
            </View>
            <View>
              <View>
                <Text className="text-xl text-white">Niagara Falls</Text>
              </View>
              <View>
                <Text className=" text-neutral-200">
                  Canada,province of Alberta and Northwest Territories,near the
                  town of Fort Smith
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    
    <View className="bg-white rounded-lg">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-xl text-black">Categories</Text>
        </View>
        <View>
          <Text>See all</Text>
        </View>
        <View className="rounded-full text-neutral-400">
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
      <View className="flex-row justify-between">
        <View>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.59e0736f15aa2da026e7288194d6ee86?rik=glOt9oW816j6XQ&pid=ImgRaw&r=0",
            }}
            className="h-20 w-20 rounded-xl"
          />
          <Text>Mountains</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.-HnhPoHJyl2roHv6i2Ms3wHaE7?rs=1&pid=ImgDetMain",
            }}
            className="h-20 w-20 rounded-xl"
          />
          <Text>Camp</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.9u2wCG9-RldRO59uMPaaJwHaF5?rs=1&pid=ImgDetMain",
            }}
            className="h-20 w-20 rounded-xl"
          />
          <Text>Park</Text>
        </View>
      </View>
      </View>

      <View className="flex-row justify-between bg-white rounded-lg">
        <View>
          <Fontisto name="world" size={24} color="black" />
          <Text>Explore</Text>
        </View>
        <View>
          <Ionicons name="people" size={24} color="black" />
          <Text>Community</Text>
        </View>
        <View>
          <MaterialIcons name="favorite" size={24} color="black" />
          <Text>Favorite</Text>
        </View>
        <View>
          <Feather name="settings" size={24} color="black" />
          <Text className="flex-col">Settings</Text>
        </View>
      </View>
    </View>
  );
}
