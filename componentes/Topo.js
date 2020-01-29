import React, {Component} from 'react';
import {Image, View} from 'react-native';

const imagem = require('../img/jokenpo.png'); 

export default class Topo extends Component{
    render(){
        return(
            <View>
                <Image source = {imagem} />
            </View>
        );
    }
}
