/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Topo from './componentes/Topo';
import Icone from './componentes/Icone';
import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

class app extends Component{

    constructor(props){
        super(props);

        this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''};

    }

    jokenpo(escolhaUsuario){

        // gera número aleatório
        let numAleatorio = Math.floor(Math.random() * 3);
        let escolhaComputador = '';

        switch(numAleatorio){
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador =  'tesoura'; break;  
            default: escolhaComputador = '';

        }

        let resultado = '';

        //Teste pedra
        if (escolhaComputador == 'pedra'){
            
            if(escolhaUsuario == 'pedra')
                resultado = 'Empate'
            if(escolhaUsuario == 'papel')
                resultado = 'Você Venceu'   
            if(escolhaUsuario == 'tesoura')
                resultado = 'Você Perdeu'       
  
        }

        //Teste papel
        if (escolhaComputador == 'papel'){
        
            if(escolhaUsuario == 'pedra')
                resultado = 'Você Perdeu'
            if(escolhaUsuario == 'papel')
                resultado = 'Empate'   
            if(escolhaUsuario == 'tesoura')
                resultado = 'Você Venceu'       
    
        }

        //Teste tesoura
        if (escolhaComputador == 'tesoura'){

            if(escolhaUsuario == 'pedra')
                resultado = 'Você Venceu'
            if(escolhaUsuario == 'papel')
                resultado = 'Você Perdeu'   
            if(escolhaUsuario == 'tesoura')
                resultado = 'Empate'       
    
        }

        this.setState({escolhaUsuario, escolhaComputador, resultado });
    }



    render(){
        return(
            <View>
                <Topo></Topo>
               
                <View style = {styles.painelAcoes}>
                    <View style = {styles.btnEscolha}>
                        <Button title="Pedra" onPress={() =>{this.jokenpo('pedra')}}/>
                    </View>
                    
                    <View style = {styles.btnEscolha}>
                        <Button title="Papel" onPress={() =>{this.jokenpo('papel')}}/>
                    </View>
                    
                    <View style = {styles.btnEscolha}>
                        <Button title="Tesoura" onPress={() =>{this.jokenpo('tesoura')}}/>
                    </View>
                    
                </View>

                <View style = {styles.palco}>

                    <Text style = {styles.txtResultado}>{this.state.resultado}</Text>

                    <Icone escolha = {this.state.escolhaComputador} jogador= 'Computador'></Icone>

                    <Icone escolha = {this.state.escolhaUsuario} jogador= 'Usuário'></Icone>    
                    

                </View>

                
                
            </View>
        );
    }


}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 25, 
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }
});

AppRegistry.registerComponent(appName, () => app);
