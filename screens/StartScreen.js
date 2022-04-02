import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, Alert } from 'react-native'
import ButtonContainer from '../components/ButtonContainer'
import Card from '../components/Card'
import Input from '../components/Input'

const StartScreen = (props) => {
    const [entered, setEntered] = useState("");

    const ellenoriz = (text) => {
        let s = ""
        for (let i = 0; i < text.length; i++) {
            let c = text.charAt(i);
            if (c >= '0' && c <= '9') {
                s += c
            }
        } setEntered(s)
    }

    const torol=()=>setEntered("")

const uzenet=(title,message)=>{
    if (Platform.OS==="web") {
        alert(message)
    }else Alert.alert(title,message)
}

const tovabb=()=>{
    if (entered===""||entered==="0") {
        uzenet("Hiba!","Adj meg egy 1 es 99 kozotti szamot!")
        return
    }
    props.beallit(entered)
    props.kepernyo(2)
}

    return (
        <View style={styles.start}>
            <Text style={styles.title}>Uj jatek</Text>
            <Card>
                <Text>Adj meg egy szamot!</Text>
                <Input
                    keyboardType="numeric"
                    autoFocus
                    maxLength={2}
                    onChangeText={ellenoriz}
                    value={entered}
                />
                <ButtonContainer
                    title1="Torles"
                    title2="Tovabb"
                    press1={torol}
                    press2={tovabb} />
            </Card>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    start: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    }
});
