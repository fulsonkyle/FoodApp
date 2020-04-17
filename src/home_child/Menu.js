import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';


var data = [
    {
        type: 'Dessert',
        color: '#f7931e',
        data: [
            {
                name: 'Stewed Mushrooms',
                image: require("../asset/namkho.jpg"),
                price: "$12"
            },
            {
                name: 'Jackfruit Fried',
                image: require("../asset/mitkho.jpg"),
                price: "$15"
            }
        ]
    },
    {
        type: 'Main course',
        color: '#39b54a',
        data: [
            {
                name: 'Noodles',
                image: require("../asset/hutieu.jpg"),
                rating: 4,
                price: "$20"
            },
            {
                name: 'Beef',
                image: require("../asset/cuonlalot.jpg"),
                rating: 2,
                price: "$12"
            },
            {
                name: 'Salad dressing',
                image: require("../asset/cuondiep.jpg"),
                rating: 5,
                price: "$13"
            },
        ]
    },
    {
        type: 'Other',
        color: '#ed1e79',
        data: [
            {
                name: 'Salad dressing',
                image: require("../asset/cuondiep.jpg"),
                price: "$13"
            },
            {
                name: 'Jackfruit warehouse',
                image: require("../asset/mitkho.jpg"),
                price: "$15"
            }
        ]
    },
]

export default class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        }
    }

    renderItem_type = ({ item }) => {
        return (
            <TouchableOpacity
            onPress = {()=>{this.props.props.navigation.navigate("DetailScreen",{
                image:item.image,
                price:item.price,
                name:item.name
            })}}
            style={styles.item_type}>
                <Image
                source = {item.image}
                style = {styles.image}
                />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderItem = ({ item }) => {
        <View style={{ flex: 1 }}>
            <Text style={[styles.type, { color: item.color }]}>{item.type}</Text>
            <View style={[styles.item, { backgroundColor: item.color }]}>
                <FlatList
                    data={item.data}
                    renderItem={this.renderItem_type}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent= {this.ItemSeparatorComponent_type}
                />
            </View>
        </View>
    }

    ItemSeparatorComponent_type = ()=>{
        return(
            <View style = {{width: 10}}></View>
        )
    }

    ItemSeparatorComponent = ()=>{
        return(
            <View style={{height:20}}>

            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => { index.toString() }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent = {this.ItemSeparatorComponent}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginBottom: 10,
        marginTop: 10
    },
    type: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    item: {
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    item_type: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width:80,
        height: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    name:{
        marginTop: 10,
        color: 'white',
        fontSize: 15
    }
});