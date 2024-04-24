import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/dataActions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
export default function DashBoard() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    return (
        <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.heroName}>{item.hero_name}</Text>
          <Text>{item.hero_superpower}</Text>
          <Text>{item.hero_uniform_color}</Text>
        </View>
      ))}
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    itemContainer: {
      marginBottom: 20,
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
    },
    heroName: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
  });