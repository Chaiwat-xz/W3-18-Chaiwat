import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Rectangle(){
    //พท.สี่เหลี่ยม = กว้าง * ยาว
    //      60  = 6 * 10
    // Cutput   = Input * Input

    const [area, setArea] = useState(0) // area = 20 x, setArea(20) /
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)

    function rectangleCal(){
        var result = width * length
        setArea(result)
    }

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>Square</Text>
            {/*<Button title="Next" />*/}

            <Text>Width = {width} cm</Text>
            <Text>Length = {length} cm</Text>
            <Text>Square area = {area} cm²</Text>

            <TextInput 
                style={styles.textInput} 
                placeholder="width" 
                placeholderTextColor="gray"
                value={width.toString()}
                onChangeText={(w) => setWidth(Number(w))}
            />

            <TextInput
                style={styles.textInput}
                placeholder="length"
                placeholderTextColor="gray"
                value={length.toString()}
                onChangeText={(l) => setLength(Number(l))}
            />

            <Button title="Calculate" onPress={() => rectangleCal()} />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:"#FCBBF3",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"
    },
    textInput:{
        borderWidth:2,
        borderColor:"white",
        width:"80%",
        borderRadius:20,
        textAlign:"center"
    }
})