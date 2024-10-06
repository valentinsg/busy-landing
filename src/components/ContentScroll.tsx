import React from 'react';
import {Flex} from '@chakra-ui/react';
import Card from './Card';
import Creadores from '../img/creadores.jpg';
import Remeras from '../img/remez.jpg';
import ChicoBolsa from '../img/chicobolsa.jpg';
import { faBagShopping, faBookOpen, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const ContentScroll = () => {
  return (
    <Flex flexDir={{base: "column", md:"row"}} alignItems="center" gap={20}>
      <Card title='Comunidad' icon={faPeopleGroup} backTitle={"Únete"}  image={ChicoBolsa} footer='algo' />
      <Card title='Nosotros' icon={faBookOpen} backTitle={"Dos amigos, una visión"} image={Creadores} footer='Quienes somos y que queremos lograr con Busy.'/>
      <Card title='Productos' icon={faBagShopping} backTitle={"Nuestros productos"} image={Remeras} footer='Conoce, tanto los nuevos productos como los de anteriores temporadas.'/>
    </Flex>
  );
};

export default ContentScroll;