import {TouchableOpacityProps} from 'react-native';

export interface IEstado {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}
export interface IParams {
  estado: IEstado;
}
export interface IMunicipio {
  id: number;
  nome: string;
}
export interface IItemEstadoProps extends TouchableOpacityProps {
  item: IEstado;
}
export interface IItemMunicipioProps extends TouchableOpacityProps {
  item: IMunicipio;
}
