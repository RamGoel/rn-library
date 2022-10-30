import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

function ProductCard(props) {
  return (
    <TouchableOpacity style={styles.productMainContainer}>
      <View style={styles.cardContainer}>

        <Image style={styles.cardImage} source={props.url} />
      </View>
      <View style={styles.cardTextContainer}>

        <Text style={styles.productName}>{props.title.toUpperCase()}</Text>
        <Text style={styles.productDesc}>{props.indegredients}</Text>
        <Text style={styles.productDesc}>{props.packageDesc}</Text>
        <Text style={styles.offer}>{props.priceDesc}</Text>
        {(props.offerDesc1 && props.offerDesc2) ? <Text style={styles.offerDesc}><Text style={{ backgroundColor: 'red', borderRadius: '2', color: 'white' }}>  {props.offerDesc1}  </Text>{props.offerDesc2}</Text>
          : null}
        <Text style={styles.price}>₹ {props.price} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  productMainContainer: { width: '48%', textAlign: 'center', padding: 15 },
  cardContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: 'white',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: { width: 100, height: 120, marginLeft: 'auto', marginRight: 'auto' },
  cardTextContainer: { textAlign: 'left' },
  productName: { marginTop: 3, fontSize: 17, fontWeight: 'bold', color: '#2E2787' },
  productDesc: { marginTop: 3, fontSize: 13, color: '#2E2787' },
  offer: { marginTop: 3, fontSize: 11 },
  offerDesc: { marginTop: 3, fontSize: 12 },
  price: { marginTop: 3, fontSize: 20, fontWeight: 'bold', color: '#2E2787' }


})

export default ProductCard;

