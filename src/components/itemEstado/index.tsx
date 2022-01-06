import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IItemEstadoProps} from '../../types';

const ItemEstado = ({item, ...rest}: IItemEstadoProps) => {
  return (
    <TouchableOpacity style={styles.itemEstado} {...rest}>
      <View style={styles.avatarSigla}>
        <Text style={styles.sigla}>{item.sigla}</Text>
      </View>
      <Text style={styles.estado}>{item.nome}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default ItemEstado;
