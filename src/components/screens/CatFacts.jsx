import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from 'react';
import axios from 'axios';
import MyButton from '../MyButton';

const CatFacts = () => {

    const [catFact, setCatFact] = useState([]);



    const fetchCatFacts = async () => {
        try {
            const { data } = await axios.get('https://catfact.ninja/facts');
            setCatFact(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        
        
        <SafeAreaView>
        <View>
            <Text>CatFacts</Text>
            <MyButton title="Fetch Cat Facts" onClick={fetchCatFacts} />
            <Text>{catFact.length > 0 ? catFact[0].fact : ''}</Text>
        </View>
        </SafeAreaView>
    );
}

export default CatFacts;