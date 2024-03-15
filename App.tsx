import { ExpoYandexReg } from "expo-yandex-reg";
import { StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ExpoYandexReg />
//     </View>
//   );
// }

export default function App() {
  return (
    <ExpoYandexReg
      style={{ flex: 1 }}
      url="https://expo.dev"
      onLoad={(event) => alert(`loaded ${event.nativeEvent.url}`)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
