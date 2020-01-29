import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const pedra = require('../img/pedra.png');
const papel = require('../img/papel.png');
const tesoura = require('../img/tesoura.png');

export default class Icone extends Component{
    render(){

        if(this.props.escolha == 'pedra'){

            return(
                <View style = {styles.icone}>
                    <Text style = {styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source = {pedra}/>
                </View>
            );
            
        } else if(this.props.escolha == 'papel'){

            return(
                <View style = {styles.icone}>
                    <Text style = {styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source = {papel}/>
                </View>
            );

        } else if(this.props.escolha == 'tesoura'){

            return(
                <View style = {styles.icone}>
                    <Text style = {styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source = {tesoura}/>
                </View>
            );

        } 

        return false;
        

    }

}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center', 
        marginBottom: 15
    }, 
    txtJogador:{
        fontSize: 16
    }

});
