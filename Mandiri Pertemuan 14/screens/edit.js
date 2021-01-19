import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firestore/index';

export default function EditScreen({ route, navigation }) {
  const [Nama, setNama] = useState(route.params.Nama);
  const [Telepon, setTelepon] = useState(route.params.Telepon);
  const [Alamat, setAlamat] = useState(route.params.Alamat);
  const [Email, setEmail] = useState(route.params.Email);
  const [Event, setEvent] = useState(route.params.Event);
  // const [age, setAge] = useState(route.params.age);

  function editFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        Nama: Nama,
        Telepon: Telepon,
        Alamat: Alamat,
        Email: Email,
        Event: Event,
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setNama('');
      setTelepon('');
      setAlamat('');
      setEmail('');
      setEvent('');
      navigation.navigate("Details")
    }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.text}>Nama</Text>
        <TextInput style={styles.textInput} onChangeText={Nama => setNama(Nama)} value={Nama} />

        <Text style={styles.text}>Telepon</Text>
        <TextInput style={styles.textInput} onChangeText={Telepon => setTelepon(Telepon)} value={Telepon} />

        <Text style={styles.text}>Alamat</Text>
        <TextInput style={styles.textInput} onChangeText={Alamat => setAlamat(Alamat)} value={Alamat} />

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textInput} onChangeText={Email => setEmail(Email)} value={Email} />

        <Text style={styles.text}>Event</Text>
        <TextInput style={styles.textInput} onChangeText={Event => setEvent(Event)} value={Event} />

        <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire() }}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("Details")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});