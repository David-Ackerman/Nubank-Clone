import React from 'react';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';
import Menu from '../../Components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles';

const Home: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event: any) {
    //condição que executa somente quando o usuario finaliza a animção, se ele
    //não tiver terminado a ação nada acontece
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }

  return (
    <Container >
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-40, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader >
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />

            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description> R$ 197.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 40,00 recebida de anônimo hoje as 07:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}

export default Home;