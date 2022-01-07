import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ItemMunicipio from '../../components/itemMunicipio';
import api from '../../services/api';
import {IMunicipio, IParams} from '../../types';

import {Container} from '../../globalStyled';

const Municipio: React.FC = () => {
  const route = useRoute();
  const {estado} = route.params as IParams;
  const [municipios, setMunicipios] = useState<IMunicipio[]>([]);
  const navigation = useNavigation();

  async function carregaMunicipios() {
    const response = await api.get(`/${estado.id}/municipios?orderBy=nome`);
    setMunicipios(response.data);
  }

  useEffect(() => {
    carregaMunicipios();
    navigation.setOptions({title: estado.nome});
  }, []);

  return (
    <Container>
      <FlatList<IMunicipio>
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={municipios}
        keyExtractor={municipio => String(municipio.id)}
        renderItem={({item}) => {
          return <ItemMunicipio item={item} />;
        }}
      />
    </Container>
  );
};

export default Municipio;
