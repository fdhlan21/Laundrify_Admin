import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Back, Track } from '../../assets'
import colors from '../../utils/colors/colors'

const HalamanProgres = ({navigation}) => {
    const BackPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
   <View style={{padding:10, margin:20}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TouchableOpacity onPress={BackPage}>
<Image style={{width:15, height:15}} source={Back}/>
</TouchableOpacity>
<Text style={{fontFamily:'Poppins-SemiBold'}}>Progress Status</Text>
</View>

<View style={{alignItems:'center', marginTop:'30%'}}>
    <Image style={{width:360, height:267}} source={Track}/>
</View>
</View>
</ScrollView>
<View style={{padding:10}}>
<TouchableOpacity style={{padding:10, backgroundColor:colors.primary, borderRadius:20,}}>
<Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center'}}>Edit Status</Text>
</TouchableOpacity>
</View>
    </View>
  )
}

export default HalamanProgres

const styles = StyleSheet.create({})