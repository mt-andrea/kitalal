import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title} >
                {props.title}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "black",
        fontSize: 24
    }
});
