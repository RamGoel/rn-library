import React, { useState } from 'react'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function ImageSlider(props) {
    const [clicked, setClicked] = useState(1)
    return (
        (props.scroll) ?
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.slide}>
                {
                    props.keys.map((elem) => {
                        return <TouchableOpacity onPress={() => setClicked(elem.count)} style={{ ...styles.card, opacity: (elem.count == clicked) ? 1 : 0.6 }}>
                            {(elem.icon) ? <FontAwesomeIcon icon={elem.url} size={30} style={styles.cardIcon} /> : <Image style={styles.sliderImage} source={elem.url} />}
                            <Text style={styles.cardText}>{elem.text}</Text>
                        </TouchableOpacity>
                    })
                }

            </ScrollView> : <View showsHorizontalScrollIndicator={false} horizontal={true} style={{ ...styles.slide }}>
                {
                    props.keys.map((elem) => {
                        return <TouchableOpacity onPress={() => setClicked(elem.count)} style={{ ...styles.card, opacity: (elem.count == clicked) ? 1 : 0.6 }}>
                            {(elem.icon) ? <FontAwesomeIcon icon={elem.url} size={30} style={styles.cardIcon} /> : <Image style={styles.sliderImage} source={elem.url} />}
                            <Text style={styles.cardText}>{elem.text}</Text>
                        </TouchableOpacity>
                    })
                }

            </View>
    )
}

const styles = StyleSheet.create({

    slide: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    card: {
        padding: 10,
        margin: 10,
        width: 100,
        textAlign: 'center',
        textAlign: 'center'
    },
    sliderImage: {
        height: 30,
        width: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    cardText: { marginLeft: 'auto', marginRight: 'auto', marginTop: 10 },
    cardIcon: { marginLeft: 'auto', marginRight: 'auto', opacity: 0.9 }
})

export default ImageSlider
