import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from "./components/Header";
import tarefas from './dados/tarefas';

function ItemTarefa({ item }) {
    return (
        <View style={estilos.card}>
            <Image source={item.photo} style={estilos.foto} />

            <View style={estilos.conteudo}>
                <Text style={estilos.titulo}>{item.title}</Text>

                <Text style={estilos.status}>{item.status}</Text>

                <Text style={estilos.desc}>
                    {item.description}
                </Text>
            </View>
        </View>
    );
}

export default function index() {
    return (
        <SafeAreaView style={estilos.container}>
            <Header titulo='Sesi Produtividade' />

            <FlatList
                data={tarefas}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ItemTarefa item={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={estilos.lista}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F5F9',
    },

    lista: {
        padding: 16,
        paddingBottom: 30,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginBottom: 18,
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        elevation: 5,
    },

    foto: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },

    conteudo: {
        padding: 16,
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 10,
    },

    status: {
        alignSelf: 'flex-start',
        backgroundColor: '#2563EB',
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 999,
        marginBottom: 12,
    },

    desc: {
        fontSize: 15,
        lineHeight: 22,
        color: '#475569',
    },
});