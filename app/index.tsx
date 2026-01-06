import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {

    const router = useRouter()

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.box}>

                <Text style={styles.textTitle}>HOME</Text>

                <TouchableOpacity onPress={() => router.navigate('/rectangle')} >
                    <Text style={styles.button}>
                        Square area
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/pound')} >
                    <Text style={styles.button}>
                        Pound
                    </Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    textTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "white"
    },
    button: {
        fontSize: 15,
        fontWeight: "600",
        color: "black",
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10
    }
})