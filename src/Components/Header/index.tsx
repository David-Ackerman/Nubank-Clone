import React from 'react';
import { View } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import logo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>David</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}

export default Header;