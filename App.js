import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Home from "./src/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Home/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        padding:'10px'
    },
});
