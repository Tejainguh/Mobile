import React, {useState} from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity
} from 'react-native';
import firebase from './firestore/index'
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems:'center',
    justifyContent: 'center'
  },
  inputView: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    padding:15,
    alignItems:"center",
    justifyContent: "center"
  },
  submitbutton: {
    backgroundColor: "black",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },

});

const Details2Screen = ({ navigation }) => {
  const [Nama, setNama] = React.useState('');
  const [Telepon, setTelepon] = React.useState('');
  const [Alamat, setAlamat] = React.useState('');
  const [Gmail, setGmail] = React.useState('');
  const [Event, setEvent] = React.useState('');
  const app = () => {
    navigation.navigate('BotTab');
  };

  const [state, setState] = useState ({
    Nama: "",
    Telepon: "",
    Alamat: "",
    Email:"",
    Event:"",
})

const handleChangeText = (name, value) => {
    setState ({ ...state, [name]: value})
}

const savecomment = async () => {
    if (state.name === '') {
        alert ('Please provide a name')
    }
    else {
        await firebase.bd.ref('/users').push({
            Nama: state.Nama,
            Telepon: state.Telepon,
            Alamat: state.Alamat,
            Email: state.Email,
            Event: state.Event
        })
        alert('Seved!')
    }
}

return (
<View style={styles.container}>
<Image style={{ marginBottom: 40, height: 100, width: 175}} source={require('../assets/image/Logoxd2.png')}/>
        <Text style={{marginBottom: 40, textAlign: "center", color: "black", fontSize: 30}}>Formulir</Text>
  
        <View>
          <TextInput style={styles.inputView}
            // value={Nama}
            // onChangeText={setNama}
            placeholder="Nama"
            onChangeText={(value) => handleChangeText("Nama", value)}
          /> 
          <TextInput style={styles.inputView}
            // value={Telepon}
            // onChangeText={setTelepon}
            placeholder="Nomor Telepon"
            onChangeText={(value) => handleChangeText("Telepon", value)}
          />
          <TextInput style={styles.inputView}
            // value={Alamat}
            // onChangeText={setAlamat}
            placeholder="Alamat"
            onChangeText={(value) => handleChangeText("Alamat", value)}
          />
          <TextInput style={styles.inputView}
            // value={Gmail}
            // onChangeText={setGmail}
            placeholder="Email"
            onChangeText={(value) => handleChangeText("Email", value)}
          />
          <TextInput style={styles.inputView}
            // value={Event}
            // onChangeText={setEvent}
            placeholder="Event"
            onChangeText={(value) => handleChangeText("Event", value)}
          />
        </View> 
        <TouchableOpacity  style={styles.submitbutton} onPress={savecomment} >
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Submit</Text>
        </TouchableOpacity>  
</View>

);
}
export default Details2Screen;