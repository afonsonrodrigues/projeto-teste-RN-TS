import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import ItemEstado from '../../components/itemEstado';
import api from '../../services/api';
import {IEstado} from '../../types';

import {Container} from './styles';

const Home: React.FC = () => {
  const [estados, setEstados] = useState<IEstado[]>([]);
  const navigation: void | any = useNavigation();

  async function carregaEstados() {
    const response = await api.get('?orderBy=nome');
    setEstados(response.data);
  }
  function handleToMunicipio(item: IEstado) {
    navigation.navigate('Municipio', {estado: item});
  }

  useEffect(() => {
    carregaEstados();
  }, []);

  return (
    <Container>
      <FlatList<IEstado>
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={estados}
        keyExtractor={estado => String(estado.id)}
        renderItem={({item}) => {
          return (
            <ItemEstado item={item} onPress={() => handleToMunicipio(item)} />
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
});

export default Home;
