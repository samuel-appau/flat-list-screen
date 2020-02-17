import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <View>
            <Text style={{fontSize:20,marginTop:40,marginLeft:40}}>What brings you to Voir</Text>
            <Text  style={{fontSize:15,marginTop:25,marginBottom:20,marginLeft:40}}>This will help us to recommend the right</Text>
           </View>


           <View style={{backgroundColor:"blue",borderRadius:20,padding:25,width:310,marginLeft:40}}>
              <Text>Try-on makeup products</Text>
            </View>


            <View style={{backgroundColor:"blue",borderRadius:20,padding:25,width:310,marginLeft:40,marginTop:30}}>
              <Text>Try-on makeup products</Text>
            </View>


            <View style={{backgroundColor:"blue",borderRadius:20,padding:25,width:310,marginLeft:40,marginTop:30}}>
              <Text>Try-on makeup products</Text>
            </View>

            <View style={{backgroundColor:"blue",borderRadius:20,padding:25,width:310,marginLeft:40,marginTop:30}}>
              <Text>Try-on makeup products</Text>
            </View>

            <View style={{backgroundColor:"blue",borderRadius:20,padding:25,width:310,marginLeft:40,marginTop:30}}>
              <Text>Try-on makeup products</Text>
            </View>

          

          <Button  title="continue" ButtonStyle={{backgroundColor:"pink",borderRadius:20,padding:25,width:310,marginLeft:40,marginTop:30}} />
          </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  
  },
});
