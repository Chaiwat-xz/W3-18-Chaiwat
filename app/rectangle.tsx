import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Rectangle() {
    //พท.สี่เหลี่ยม = กว้าง * ยาว
    //      60  = 6 * 10
    // Cutput   = Input * Input

    const [area, setArea] = useState(0) // area = 20 x, setArea(20) /
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)

    const router = useRouter()

    function rectangleCal() {
        var result = width * length
        setArea(result)
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.box1} >

                <Text style={styles.textTitle}>Square</Text>
                {/*<Button title="Next" />*/}

                <View style={styles.box3}>
                    <Text>Width = {width} cm</Text>
                    <Text>Length = {length} cm</Text>
                    <Text>Square area = {area} cm²</Text>
                </View>

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

                <TouchableOpacity onPress={() => rectangleCal()} >
                    <Text style={styles.button1}>
                        Calculate
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.box2}>

                <TouchableOpacity onPress={() => router.navigate('/')} >
                    <Text style={styles.button2}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/pound')} >
                    <Text style={styles.button2}>
                        Pound
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        flex: 2,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        margin: 20,
        borderRadius: 8,
        marginTop: 50
    },
    box2: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        gap: 20,
        margin: 20,
        borderRadius: 8,
        flexDirection:"row"
       
    },
    box3: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        padding: 10,
        borderRadius: 8
    },
    textTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "white"
    },
    textInput: {
        borderWidth: 2,
        borderColor: "white",
        width: "80%",
        borderRadius: 20,
        textAlign: "center"
    },
    button1: {
        fontSize: 15,
        fontWeight: "600",
        color: "black",
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10
    },
    button2: {
        fontSize: 15,
        fontWeight: "600",
        color: "white",
        backgroundColor: "pink",
        padding: 8,
        borderRadius: 10
    }
})