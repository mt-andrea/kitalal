import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import colors from '../constants/colors'

const GameOver = (props) => {
    let uj = () => {
        props.kepernyo(1)
    }
    return (
        <View style={styles.over}>
            <Card>
                <Text>Kitalaltam:</Text>
                <Text style={styles.tip}>{props.szam}</Text>
                <Image source={require('../assets/success.jpg')} style={styles.size}/>
                <Button
                    title='uj jatek'
                    color={colors.primary}
                    onPress={uj} />
            </Card>
        </View>
    )
}

export default GameOver

const styles = StyleSheet.create({
    over: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    tip: {
        fontSize: 24,
        paddingTop: 10,
        paddingBottom: 10
    },
    size:{
        width:280,
        height:380,
        borderRadius:10,
        marginBottom:20
    }
});