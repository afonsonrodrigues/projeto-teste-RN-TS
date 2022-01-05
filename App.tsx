import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import api from './src/services/api';

interface Estado {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

const App = () => {
  const [estados, setEstados] = useState<Estado[]>([]);

  async function carregaEstados() {
    const response = await api.get('?orderBy=nome');
    setEstados(response.data);
  }

  useEffect(() => {
    carregaEstados();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Estado>
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={estados}
        keyExtractor={estado => String(estado.id)}
        renderItem={({item}) => {
          return (
            <View style={styles.itemEstado}>
              <View style={styles.avatarSigla}>
                <Text style={styles.sigla}>{item.sigla}</Text>
              </View>
              <Text style={styles.estado}>{item.nome}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  itemEstado: {
    paddingVertical: 10,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 15,
  },
  avatarSigla: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sigla: {
    fontSize: 20,
    color: 'white',
  },
  estado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#264653',
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default App;
