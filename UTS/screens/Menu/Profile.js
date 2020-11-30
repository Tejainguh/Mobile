import React from 'react';
import {
  StyleSheet, View, Text, ScrollView, Image
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 15,
  },
  Border:{
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    height: 40,
    padding:10,
    marginBottom: 10,
    textAlign: "center"
  },

});

const ProfileScreen = () => (
  <View style={styles.container}>
     <Image style={{height:150, width:150, marginTop: 80, marginBottom: 40}}
        source={require('../../assets/image/foto.png')}></Image>
    <ScrollView>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 25, textAlign:'center', marginBottom: 30,}}>Profile</Text>
        <Text style={styles.Border}>I Putu Teja Artadi</Text>
        <Text style={styles.Border}>1801010051</Text>
        <Text style={styles.Border}>Sistem Informasi</Text>


      </View>


    </ScrollView>
  </View>
);

export default ProfileScreen;
