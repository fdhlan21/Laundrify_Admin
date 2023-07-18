import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ProfileandNotif, TabNav } from '../../assets'
import colors from '../../utils/colors/colors'
export default function HalamanHome({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
<LinearGradient style={{flex:1}} colors={['#3785A7','rgba(55,133,167,0.5)']}>

    <View style={{padding:10, margin:20, alignItem:'center'}}>
<Image style={{width:312, height:36}} source={ProfileandNotif}/>
    </View>

     
  <View style={{padding:10, backgroundColor:'white', height:'100%' , borderRadius:20}}>
<Text style={{padding:10, fontFamily:'Poppins-SemiBold'}}>Pesanan</Text>

<View style={{padding:10, alignItems:'center'}}>

<View style={{borderWidth:1, borderColor:colors.primary, padding:10, borderRadius:50, flexDirection:'row', width:312, }}>
<View style={{padding:10,backgroundColor:colors.primary,width:155, borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', color:'white', textAlign:'center',}}>New Order</Text>
</View>

<View style={{padding:10,width:155, borderRadius:20}}>
<Text style={{fontFamily:'Poppins-SemiBold', textAlign:'center',}}>History</Text>
</View>
</View>

<View style={{flexDirection:'row', padding:10, margin:10,}}>

<View style={{padding:10, borderWidth:1, borderRadius:5, width:150, borderRadius:10, right:5, borderColor:colors.yellow}}>

<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'left'}}>Achmad</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>1200123-0001</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>gang. hablumin...</Text>

<View style={{padding:10, borderWidth:1, borderColor:colors.yellow, borderRadius:10, marginTop:20}}>
<Text style={{color:colors.yellow, textAlign:'center'}}>Pending</Text>
</View>

<TouchableOpacity onPress={() => navigation.navigate('HalamanProgres')} style={{padding:10, backgroundColor:colors.yellow, borderRadius:10, marginTop:20}}>
<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular', fontSize:12}}>Lihat</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, borderWidth:1, borderRadius:5, width:150, borderRadius:10, left:5, borderColor:colors.yellow}}>

<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'left'}}>Michael</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>1200123-0002</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>gang. hablumin....</Text>

<View style={{padding:10, borderWidth:1, borderColor:colors.yellow, borderRadius:10, marginTop:20}}>
<Text style={{color:colors.yellow, textAlign:'center'}}>Hitung Berat</Text>
</View>

<TouchableOpacity style={{padding:10, backgroundColor:colors.primary, borderRadius:10, marginTop:20}}>
<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular', fontSize:12}}>Lihat</Text>
</TouchableOpacity>
</View>
</View>


<View style={{flexDirection:'row', padding:10, margin:10,}}>

<View style={{padding:10, borderWidth:1, borderRadius:5, width:150, borderRadius:10, right:5, borderColor:colors.primary}}>

<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'left'}}>Azaz</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>1200123-00031</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>gang. hablumin...</Text>

<View style={{padding:10, borderWidth:1, borderColor:colors.primary, borderRadius:10, marginTop:20, backgroundColor:colors.biru2}}>
<Text style={{color:colors.primary, textAlign:'center'}}>Diterima</Text>
</View>

<TouchableOpacity style={{padding:10, backgroundColor:colors.primary, borderRadius:10, marginTop:20}}>
<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular', fontSize:12}}>Lihat</Text>
</TouchableOpacity>
</View>

<View style={{padding:10, borderWidth:1, borderRadius:5, width:150, borderRadius:10, left:5, borderColor:colors.primary}}>

<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'left'}}>Budi</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>1200123-0004</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>gang. hablumin...</Text>

<View style={{padding:10, borderWidth:1, borderColor:colors.primary, borderRadius:10, marginTop:20, backgroundColor:colors.biru2}}>
<Text style={{color:colors.primary, textAlign:'center'}}>Diterima</Text>
</View>

<TouchableOpacity style={{padding:10, backgroundColor:colors.primary, borderRadius:10, marginTop:20}}>
<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular', fontSize:12}}>Lihat</Text>
</TouchableOpacity>
</View>
</View>



</View>
<View style={{flexDirection:'row', padding:10, justifyContent:'flex-start'}}>


<View style={{padding:10, borderWidth:1, borderRadius:5, width:150, borderRadius:10, left:5, borderColor:colors.primary}}>

<Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'left'}}>Udin</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>1200123-0005</Text>
<Text style={{fontFamily:'Poppins-Regu;ar', fontSize:12, textAlign:'left'}}>gang. hablumin...</Text>

<View style={{padding:10, borderWidth:1, borderColor:colors.primary, borderRadius:10, marginTop:20, backgroundColor:colors.biru2}}>
<Text style={{color:colors.primary, textAlign:'center'}}>Diterima</Text>
</View>

<TouchableOpacity style={{padding:10, backgroundColor:colors.primary, borderRadius:10, marginTop:20}}>
<Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-Regular', fontSize:12}}>Lihat</Text>
</TouchableOpacity>
</View>
</View>

  </View>


</LinearGradient>
 </ScrollView>

      <View>
        <Image style={{width:360, height:60}} source={TabNav}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})