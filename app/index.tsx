import {View, Text, Button, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="Next" onPress={() => router.navigate('/rectangle')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:"#FCBBF3",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"
    }
})