import React from 'react';

import {IItemMunicipioProps} from '../../types';
import {Botao, AvatarSigla, Sigla, Estado} from '../../globalStyled';

const ItemMunicipio = ({item, ...rest}: IItemMunicipioProps) => {
  return (
    <Botao {...rest}>
      <AvatarSigla>
        <Sigla>{item.nome.substring(0, 2)}</Sigla>
      </AvatarSigla>
      <Estado>{item.nome}</Estado>
    </Botao>
  );
};

export default ItemMunicipio;
