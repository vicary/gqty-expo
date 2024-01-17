import type { Variables } from "gqty";
import {
  Suspense,
  useDeferredValue,
  useState,
  type FunctionComponent,
} from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "~/components/Themed";
import { useQuery, type Query } from "~/lib/gqty";

export default function TabOneScreen() {
  const [name, setName] = useState<string>();
  const deferredName = useDeferredValue(name);

  console.debug(`render`, Date.now(), typeof WeakMap);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10, width: 300 }}>
        <TextInput
          style={{ borderStyle: "solid", borderWidth: 1 }}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>

      <Suspense fallback={<Text>Loading...</Text>}>
        <Characters filter={{ name: deferredName }} />
      </Suspense>
    </View>
  );
}

const Characters: FunctionComponent<
  NonNullable<Variables<Query["characters"]>>
> = ({ filter, page }) => {
  const query = useQuery({ suspense: true });

  return (
    <View style={{ width: 300 }}>
      {query.characters({ filter, page })?.results?.map((character) => (
        <Text key={character?.id ?? 0}>
          {character?.id}. {character?.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
