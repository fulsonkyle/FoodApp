import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

var data = [
    {
        name: 'Alex Sander',
        rating: 5,
        comment: 'Good',
        image: require("../asset/avatar1.png")
    },
    {
        name: 'Trong Thanh',
        rating: 4,
        comment: 'Ok',
        image: require("../asset/avatar2.png")
    },
    {
        name: 'Huynh Nhu',
        rating: 2,
        comment: 'Bad',
        image: require("../asset/avatar3.png")
    },
    {
        name: 'Trong That',
        rating: 5,
        comment: 'good food good mood',
        image: require("../asset/avatar4.png")
    },
    {
        name: 'Ngoc Trai',
        rating: 4,
        comment: 'Very good',
        image: require("../asset/avatar2.png")
    },
    {
        name: 'Hai Bang',
        rating: 2,
        comment: 'normal',
        image: require("../asset/avatar4.png")
    }
]

export default class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }

    _rating = (item)=>{
        let rating = [];
        for (i = 0; i < item; i++) {
            rating.push(
                <Image
                    source={require("../asset/star2.png")}
                    style={{ width: 15, height: 15, marginRight: 3 }}
                    resizeMode="cover"
                />
            )
        }
        return rating;
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {this._rating(item.rating)}
                </View>
                <Text style={styles.comment} numberOfLines={2}>"{item.comment}"</Text>
            </View>
        );
    }

    ItemSeparatorComponent =  ()=>{
        return(
            <View style={{height:30}}>

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
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        numColumns={3}
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
        marginTop : 20,
        marginBottom: 5
    },
    item: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'green'
    },
    name: {
        color: 'green',
        fontWeight: 'bold'
    },
    comment: {
        fontStyle:'italic',
        marginTop:5
    }
});