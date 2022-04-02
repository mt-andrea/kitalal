import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const Card = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.card} >
            {props.children}
        </ScrollView>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 5,
        width: 300,
        padding: 20,
        alignItems: "center"
    }
});
