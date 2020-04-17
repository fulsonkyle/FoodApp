import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

var data=[
    {
        type: 'Dessert',
        color: '#f7931e',
        data:[
            {
                name:'Stewed Mushrooms',
                image: require("../asset/namkho.jpg"),
                price: "$12"
            },
            {
                name:'Jackfruit Fried',
                image: require("../asset/mitkho.jpg"),
                price: "$15"
            }
        ]
    },
    {
        type: 'Main course',
        color: '#39b54a',
        data:[
            {
                name:'Noodles',
                image: require("../asset/hutieu.jpg"),
                rating: 4,
                price: "$20"
            },
            {
                name:'Beef',
                image: require("../asset/cuonlalot.jpg"),
                rating: 2,
                price: "$12"
            },
            {
                name:'Salad dressing',
                image: require("../asset/cuondiep.jpg"),
                rating: 5,
                price: "$13"
            },
        ]
    },
    {
        type: 'Other',
        color: '#ed1e79',
        data:[
            {
                name:'Salad dressing',
                image: require("../asset/cuondiep.jpg"),
                price: "$13"
            },
            {
                name:'Jackfruit warehouse',
                image: require("../asset/mitkho.jpg"),
                price: "$15"
            }
        ]
    },
]

export default class All extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:data,
        }
    }


    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <FlatList
                    data = {this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor= {(item,index)=>{index.toString()}}
                    showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});