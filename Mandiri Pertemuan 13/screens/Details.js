import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firebase from './firestore/index';

export default function DetailsScreen({ navigation }) {
  
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            Nama: childItem.val().Nama,
            Telepon: childItem.val().Telepon,
            Alamat: childItem.val().Alamat,
            Email: childItem.val().Email,
            Event: childItem.val().Event,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()
  }

  function editFire(key, Nama, Telepon, Alamat, Email, Event) {
    navigation.navigate("edit",{
      key: key,
      Nama: Nama,
      Telepon: Telepon,
      Alamat: Alamat,
      Email: Email,
      Event: Event,
    });
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Nama   : {item.Nama} </Text>
            <Text style={styles.text}>Telepon: {item.Telepon}</Text>
            <Text style={styles.text}>Alamat : {item.Alamat}</Text>
            <Text style={styles.text}>Email  : {item.Email}</Text>
            <Text style={styles.text}>Event  : {item.Event}</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.Nama, item.Telepon, item.Alamat, item.Email, item.Event, ) }}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>

        } />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    marginTop: 20,
    marginBottom:30,
  },
  text: {
    color: '#fff',
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderRadius:3,
    borderColor: 'green',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    width: 350,
    height: 250,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  btnEnviar: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'green',
    width: 100,
    height: 30,
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  viewFlat: {
  
  }
});


// import React from 'react';
// import {
//   StyleSheet, Text, View, Image, ScrollView
// } from 'react-native';



// const DetailsScreen = () => (
//   <View style={styles.container}>
//     <ScrollView>
//       <View>
//         <Text style={{marginTop:30, textAlign:"center", fontSize: 20, fontWeight:"bold"}}> DETAILS</Text>
//         <Text style={{marginTop:30, textAlign:"center", fontSize: 30, fontWeight:"bold"}}> XD Fiesta 2020</Text>
//             <View style={{ marginTop: 20 }}>
//             <Text style={{marginBottom:10, fontSize: 20, fontWeight:"bold"}}> Song Cover</Text>
//               <Image style={styles.postImg} source={require('../assets/image/CoverLagu.png')} />
//             </View>
         
//             <View>
//             <Text style={{marginBottom:10, fontSize: 20, fontWeight:"bold"}}> Mobile Legend Tournament</Text>
//               <Image style={styles.postImg} source={require('../assets/image/MobileLegend.png')} />
//             </View>
         
//             <View>
//             <Text style={{ marginBottom:10, fontSize: 20, fontWeight:"bold"}}> Magic Chess Tournament</Text>
//               <Image style={styles.postImg} source={require('../assets/image/magicChess.png')} />
//             </View>
            
       
//       </View>
//       </ScrollView>
//     </View>
// );
// export default DetailsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: 'center',
//     marginTop: 20
//   },
//   postImg: {
//     backgroundColor: '#DDD',
//     width: 340,
//     height: 480,
//     marginBottom: 30
//   }
// });
