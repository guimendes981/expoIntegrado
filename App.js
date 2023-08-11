import React, { useEffect, useState, SafeAreaView } from "react";
import CatFacts from "./src/components/screens/CatFacts";
import { StatusBar } from "expo-status-bar";
import ClickableCard from "./src/components/ClickableCard";
import HeaderTitle from "./src/components/HeaderTitle";
import ItemList from "./src/components/ItemList";
import RandomUserDataDisplay from "./src/components/RandomUserDataDisplay";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
    {/* <CatFacts /> */}
    <ClickableCard />
    <HeaderTitle />
    <ItemList />
    <RandomUserDataDisplay />
    <UniversityListDisplay />
    </SafeAreaView>
  );
}

export default App;
