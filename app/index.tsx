import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "DatDot-Bold": require("@assets/fonts/DatDot-Bold.otf"),
    "Inter_18pt-Black": require("@assets/fonts/Inter_18pt-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.fontDotdat}>Home</Text>
      <Text style={styles.fontInter}>Text hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fontInter: {
    fontFamily: "Inter_18pt-Black",
  },
  fontDotdat: {
    fontFamily: "DatDot-Bold",
  },
});
