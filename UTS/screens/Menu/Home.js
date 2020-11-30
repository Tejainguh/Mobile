import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, ScrollView,TouchableOpacity
} from 'react-native';



const HomeScreen = ({ navigation }) => (
  
  <View style={styles.container}>

    <ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View style={{marginTop: 20}}>
          <Image style={styles.postImg} source={require('../../assets/image/home1.png')}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View>
          <Image style={styles.postImg} source={require('../../assets/image/home2.png')}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View>
          <Image style={styles.postImg} source={require('../../assets/image/home3.png')}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View>
          <Image style={styles.postImg} source={require('../../assets/image/home4.png')}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View >
          <Image style={styles.postImg} source={require('../../assets/image/homelogo.png')}/>
        </View>
        </TouchableOpacity>
    </ScrollView>
    
    <View >
          <View style={{ alignItems: 'center',}}>
            <MaterialCommunityIcons
            />
            
          </View>
        
        </View>
 
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

  },
  postImg : {
    backgroundColor : '#DDD' ,
    width : 393,
    height : 393,
    marginBottom: 5
  }
});