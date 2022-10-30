import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

function TextSlider(props) {
    const [clicked,setClicked]=useState(1)
  return (
    <View style={{...styles.sliderContainer,flexWrap:(props.vertical)?'wrap':null}}>
                {
                    props.keys.map((elem) => {
                        
                        return <TouchableOpacity onPress={()=>setClicked(elem.count)} style={{...styles.sliderCard,backgroundColor:(elem.count==clicked)?'#2E2787':'white',borderRadius:(elem.count==clicked)?10:2.5}}>
                            <Text style={{marginLeft:'auto',marginRight:'auto',opacity:(elem.count==clicked)?1:0.4,color:(elem.count==clicked)?'white':'black'}}>{elem.text}</Text>
                        </TouchableOpacity>
                    })
                }

            </View>
  )
}

const styles = StyleSheet.create({
    
    sliderContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        overflow:'hidden',
        
    },
    sliderCard:{
        padding:10,
        margin:10,
        width:100,
        borderColor:'black',
        borderWidth:0.1,
        textAlign:'center'
    },
})

export default TextSlider
