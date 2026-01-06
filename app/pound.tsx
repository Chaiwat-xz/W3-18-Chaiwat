import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function Lbtokg() {
    //kg = pound * 0.4536
    //cutput = input * 0.4536

    const [pound, setPound] = useState(0)
    const [kilo, setKilo] = useState(0)

    const router = useRouter()

    function lbtokg() {
        var result = pound * 0.4536
        setPound(result)
    }

return (
        <View style={{ flex: 1 }}>

            <View style={styles.box1} >

                <Text style={styles.textTitle}>Pound</Text>
                {/*<Button title="Next" />*/}

                <View style={styles.box3}>
                    <Text>Pound = {pound} lb</Text>
                    <Text>Kilograms = {kilo} kg</Text>
                </View>

                <TextInput
                    style={styles.textInput}
                    placeholder="width"
                    placeholderTextColor="gray"
                    value={pound.toString()}
                    onChangeText={(p) => setPound(Number(p))}
                />

                <TouchableOpacity onPress={() => Lbtokg()} >
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

                <TouchableOpacity onPress={() => router.navigate('/rectangle')} >
                    <Text style={styles.button2}>
                        Square area
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
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        margin: 20,
        borderRadius: 8,
        flexDirection:"row"
    },
    box3: {
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        gap:15,
        padding:10,
        borderRadius:8
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