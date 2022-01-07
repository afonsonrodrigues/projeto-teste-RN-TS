import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #eee;
`;
export const Botao = styled.TouchableOpacity`
  padding: 10px 0px;
  margin: 5px 30px;
  background-color: #fff;
  flex-direction: row;
  border-radius: 15px;
`;
export const AvatarSigla = styled.View`
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const Sigla = styled.Text`
  font-size: 20px;
  color: white;
`;
export const Estado = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #264653;
  margin-left: 10px;
  align-self: center;
`;
