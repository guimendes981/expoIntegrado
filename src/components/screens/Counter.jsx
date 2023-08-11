import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0); // useState é um Hook
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "red",
    },
  });

  useEffect(() => {
    console.log("useEffect");
  }, [contador]);
  a

  const onClickButton = () => {
    setContador(contador + 1);
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{contador}</Text>
      <Button title="contar" onPress={onClickButton} />
    </SafeAreaView>
  );
}
