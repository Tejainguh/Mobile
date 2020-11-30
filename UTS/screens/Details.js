import React from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView
} from 'react-native';



const DetailsScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <View>
        <Text style={{marginTop:30, textAlign:"center", fontSize: 20, fontWeight:"bold"}}> DETAILS</Text>
        <Text style={{marginTop:30, textAlign:"center", fontSize: 30, fontWeight:"bold"}}> XD Fiesta 2020</Text>
            <View style={{ marginTop: 20 }}>
            <Text style={{marginBottom:10, fontSize: 20, fontWeight:"bold"}}> Song Cover</Text>
              <Image style={styles.postImg} source={require('../assets/image/CoverLagu.png')} />
            </View>
         
            <View>
            <Text style={{marginBottom:10, fontSize: 20, fontWeight:"bold"}}> Mobile Legend Tournament</Text>
              <Image style={styles.postImg} source={require('../assets/image/MobileLegend.png')} />
            </View>
         
            <View>
            <Text style={{ marginBottom:10, fontSize: 20, fontWeight:"bold"}}> Magic Chess Tournament</Text>
              <Image style={styles.postImg} source={require('../assets/image/magicChess.png')} />
            </View>
       
      </View>
      </ScrollView>
    </View>
);
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    marginTop: 20
  },
  postImg: {
    backgroundColor: '#DDD',
    width: 340,
    height: 480,
    marginBottom: 30
  }
});
