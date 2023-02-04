import React from 'react';
import {Text,View,StyleSheet, Dimensions} from 'react-native'
import {bgColor, textPrimary} from './constants'
const wHeight=Dimensions.get('window').height
const wWidth=Dimensions.get('window').width

export default Splash=(props)=>{
  return(
    <View style={{backgroundColor:bgColor, height:wHeight}}>
    <View style={styles.container}>

    <View style={styles.flexCont}>
    <View>
    
      <Text style={styles.smallText}>{props.content.leftTopText}</Text>
      <Text style={styles.smallText}>{props.content.leftBottomText}</Text>
    </View>
    <Text style={styles.bigText}>{props.content.commonLetter}</Text>
    </View>
    </View>
    <Text style={{textAlign:'center', color:textPrimary}}>{props.content.bottomText}</Text>
    </View>
  )
}


const styles=StyleSheet.create({
  flexCont:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bigText:{
    fontSize:80,
    color:textPrimary
  },
  smallText:{
    fontSize:30,
    color:textPrimary
  },
  container:{
    justifyContent:'center',
    height:wHeight*0.9,
    textAlign:'center'
  }
})

