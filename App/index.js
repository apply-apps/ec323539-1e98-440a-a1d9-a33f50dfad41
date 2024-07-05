// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// TaleScreen.js code
const TaleScreen = ({ route }) => {
    const { tale } = route.params;

    return (
        <SafeAreaView style={styles.taleContainer}>
            <View style={styles.box}>
                <Text style={styles.taleTitle}>{tale.title}</Text>
                <Text style={styles.content}>{tale.content}</Text>
            </View>
        </SafeAreaView>
    );
};

// HomeScreen.js code
const tales = [
    { id: '1', title: 'Cinderella', content: 'Once upon a time...' },
    { id: '2', title: 'Snow White', content: 'Once upon a time...' },
    { id: '3', title: 'Sleeping Beauty', content: 'Once upon a time...' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Tale', { tale: item })}
        >
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fairy Tales</Text>
            <FlatList
                data={tales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

// App.js code
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#fff' }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Combined styles from HomeScreen.js and TaleScreen.js
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#121212',
    },
    taleContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#121212',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff',
    },
    item: {
        backgroundColor: '#37474f',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        color: '#d1c4e9',
    },
    box: {
        backgroundColor: '#37474f',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    taleTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#d1c4e9',
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#e0e0e0',
    },
});