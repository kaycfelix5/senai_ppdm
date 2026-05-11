import { Text , View , SafeAreaViewBase, FlatList , StyleSheet , Image } from "react-native";
import Header from "./components/Header";
import tarefas from './dados/tarefas';

export default function index(){
    return (
        <View>
            <Header titulo = 'Sesi Produtividade'></Header>
        </View>
    
    )
}