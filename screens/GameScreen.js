import React, { useEffect, useRef, useState } from 'react'
import { useWindowDimensions, Alert, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import ButtonContainer from '../components/ButtonContainer'
import Card from '../components/Card'

const veletlen = (min, max, kiv) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const vel = Math.floor(Math.random() * (max - min)) + min
    if (vel === kiv) {
        return veletlen(min, max, kiv)
    } else {
        return vel
    }
}

const GameScreen = (props) => {

    const window=useWindowDimensions()

    const min = useRef(1)
    const max = useRef(100)

    const [tip, setTip] = useState(veletlen(min.current, max.current, props.szam))

    const [elozok, setelozok] = useState([])

    const uzenet = (title, message) => {
        if (Platform.OS === "web") {
            alert(message)
        } else Alert.alert(title, message)
    }

    const kisebb = () => {
        if (tip < props.szam) {
            uzenet("Hiba!", "Biztosan kisebb?")
            return
        }
        setelozok(elozok => [...elozok, tip])
        max.current = tip
        setTip(veletlen(min.current, max.current, tip))
    }
    const nagyobb = () => {
        if (tip > props.szam) {
            uzenet("Hiba!", "Biztosan nagyobb?")
            return
        }
        setelozok(elozok => [...elozok, tip])
        min.current = tip + 1
        setTip(veletlen(min.current, max.current, tip))
    }

    useEffect(() => {
        if (tip == props.szam) {
            props.kepernyo(3)
        }
    }, [tip]);

    return (
        <View style={window.height < 600 ? styles.screen2 : styles.screen}>
            <Card>
                <Text>A program tippje: </Text>
                <Text style={styles.tip}> {tip} </Text>
                <ButtonContainer
                    title1="kisebb"
                    title2="nagyobb"
                    press1={kisebb}
                    press2={nagyobb} />
            </Card>
            <FlatList
                keyExtractor={(t) => t.toString()}
                data={elozok}
                renderItem={({ item, index }) => {
                    return (
                        <Text style={styles.list}>
                            {index + 1}. tipp: {item}
                        </Text>
                    )
                }} />
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        flexDirection: "column"
    },
    screen2: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "flex-end"
    },
    tip: {
        fontSize: 24,
        paddingTop: 10,
        paddingBottom: 10
    },
    list: {
        fontSize: 24,
        marginTop: 10,
        textAlign: "center"
    }
});