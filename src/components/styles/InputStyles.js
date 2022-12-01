import styled from "styled-components/native";

export const InputGroup = styled.KeyboardAvoidingView`
  flex-direction: row;
  margin: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const InputBox = styled.KeyboardAvoidingView`
  flex-direction: row;
  width: 50%;
`;

export const InputText = styled.TextInput`
  background: #ffffff;
  width: 65px;
  padding: 4px;
  height: 40px;
  border: 1px solid #000000;
  elevation: 4;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const InputTitle = styled.Text`
  padding-left: ${({ active }) => (!active ? "0px" : "15px")};
  font-size: 20px;
`;
