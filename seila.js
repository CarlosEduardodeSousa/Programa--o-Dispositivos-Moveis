import { StatusBar } from "expo status-bar";
import {StyleSheet, text, View, Button, TextInput, Keyboard, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App(){
    const [alcool, setAlcool] = useState('');
    const [gasolina, setgasolina] = useState('');
    const [resultado, setResultado] = useState('');
    
    const calcular = () =>{
        if(!alcool || !gasolina){
            setResultado('Preencha os valores');
            return;
        }
    }

    const precoAlcool = parseFloat(alcool.replace(',', '.'));
const precoGasolina = parseFloat(gasolina.replace(',', '.'));

if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoGasolina === 0){
    setResultado('valores invaidos');
    return;
}

const proporcao = precoAlcool / precoGasolina;

if (proporcao < 0.7){
    setResultado('Compensa abastecer com Álcool!');
}

else{
    setResultado('Compensa abastecer com Gasolina!')
}

Keyboard.dismiss();
};

return(
    <View style={StyleSheet.container}>
        <Text style={StyleSheet.titulo}>Bem-vindo ao app de Cálculo de gasolina!</Text>
        <Image source={require('./assets/gas.png')}></Image>
    </View>
);
