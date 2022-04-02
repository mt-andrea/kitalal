import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import colors from '../constants/colors'

const ButtonContainer = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button
                    title={props.title1}
                    color={colors.accent}
                    onPress={props.press1} />
            </View>
            <View style={styles.button}>
                <Button
                    title={props.title2}
                    color={colors.primary}
                    onPress={props.press2} />
            </View>
        </View>
    )
}

export default ButtonContainer

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    button: {
        width: 110
    }
});
