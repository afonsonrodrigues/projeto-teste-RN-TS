import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface BotaoProps extends TouchableOpacityProps {
  titulo: string;
}

const Botao = ({titulo, ...rest}: BotaoProps) => {
  return (
    <TouchableOpacity style={styles.botao} {...rest}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Botao;
