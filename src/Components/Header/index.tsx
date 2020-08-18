import React from 'react';
import { View } from 'react-native';

import logo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>David</Title>
      </Top>
    </Container>
  );
}

export default Header;