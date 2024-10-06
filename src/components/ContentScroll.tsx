import React from 'react';
import {Flex} from '@chakra-ui/react';
import Card from './Card';
import Creadores from '../img/creadores.jpg';
import { faBagShopping, faBookOpen, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const ContentScroll = () => {
  return (
    <Flex flexDir={{base: "column", md:"row"}} alignItems="center" gap={20}>
      <Card title='Comunidad' icon={faPeopleGroup} backTitle={"Únete"} />
      <Card title='Nosotros' icon={faBookOpen} backTitle={"Dos amigos, una visión"}  image={Creadores}/>
      <Card title='Productos' icon={faBagShopping} backTitle={"Explora nuestros productos"} />
    </Flex>
  );
};

export default ContentScroll;