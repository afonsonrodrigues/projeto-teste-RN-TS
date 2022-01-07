import React from 'react';

import {IItemEstadoProps} from '../../types';

import {Botao, AvatarSigla, Sigla, Estado} from '../../globalStyled';

const ItemEstado = ({item, ...rest}: IItemEstadoProps) => {
  return (
    <Botao {...rest}>
      <AvatarSigla>
        <Sigla>{item.sigla}</Sigla>
      </AvatarSigla>
      <Estado>{item.nome}</Estado>
    </Botao>
  );
};

export default ItemEstado;
