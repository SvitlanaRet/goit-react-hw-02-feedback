import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const OptionsItem = styled.li`
  list-style: none;
`;

export const OptionsButton = styled.button`
  width: 100px;
  font-size: 18px;
  padding: 5px;
  border-radius: 10px;
  border: none;

  &:hover,
  &:focus {
    color: white;
    background-color: #ed5ab3;
    cursor: pointer;
    box-shadow: 0 1px 7px rgba(1, 1, 1, 1.3);
  }
`;
