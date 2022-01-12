import 'react-native';

describe('Tentando fazer teste', () => {
  const carregaEstado = require('./index').carregaEstados();
  expect(carregaEstado).toBeTruthy();
});
