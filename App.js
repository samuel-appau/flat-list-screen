import React from 'react';
import { Text, View,FlatList,Image } from 'react-native';

const listData=[{Key:1,name:"Michael",message:"Articles are words that define a noun as specific or unspecific. Consider the following",time:"9:22AM"},
                {Key:2,name:"Samuel",message:"Articles are words that define a noun as specific or unspecific. Consider the following",time:"9:22AM"},
                {Key:3,name:"Mushud",message:"By using the article the By using the article the, we’ve shown that it was one specific day ",time:"9:22AM"},
                {Key:4,name:"Mushud",message:"By using the article the By using the article the, we’ve shown that it was one specific day ",time:"9:22AM"},
                {Key:5,name:"Mushud",message:" we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.,",time:"9:22AM"},
                {Key:6,name:"Mushud",message:"By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.",time:"9:22AM"},
                {Key:7,name:"Mushud",message:"By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.",time:"9:22AM"},
                {Key:8,name:"Mushud",message:"By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.",time:"9:22AM"},
                {Key:9,name:"Mushud",message:"By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.",time:"9:22AM"},
                {Key:10,name:"Mushud",message:"By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.",time:"9:22AM"},
                
            ];

const ListItem=(props)=>{
  return(
    <View style={{flexDirection:"row",paddingHorizontal:20}}>
      <View style={{flex:1,alignItems:"center",flexDirection:"row"}}>
        <Image source={require('./assets/img.jpg')} style={{ width: 50, height: 50, borderRadius:45}} />
       </View>
       <View  style={{flex:5}}>
       <View  style={{borderBottomWidth:0.3,borderBottomColor:"#e3e3e3",paddingVertical:10}}>
           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
             <Text style={{fontWeight:'bold'}}>{props.name}</Text>
             <Text style={{color:"#565656",fontSize:10}}>{props.time}</Text>
           </View>
           <Text  style={{color:"#565656"}}>{props.message}</Text>
           </View>
       
       </View>
      
      
       </View>
  
  )
}

export default function App() {
  return (

    <View style={{flex:1,paddingTop:50,}}>
      <Text  style={{fontSize:20,paddingLeft:90}}>Demo FlatList</Text>
      <FlatList 
         data={listData}
         renderItem={({item})=><ListItem name={item.name}  message={item.message} time={item.time}/>}

         />
        
    </View>
    
  );
}


