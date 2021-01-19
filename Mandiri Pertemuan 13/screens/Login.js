import React from 'react';
import {
  StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    marginTop: 20
  },
  inputView: {
    backgroundColor: "white",
    width: 250,
    borderRadius: 25,
    borderColor: "yellow",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    padding:15,
    alignItems:"center",
    justifyContent: "center"
  },
  loginbutton: {
    backgroundColor: "black",
    backgroundColor: "green",
    borderRadius: 25,
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    

  },


});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const AuthLogin = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXL8D2PevPkJZHK6C2_eD372dRHzn0y8o", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('Tab')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // const handlerLogin = () => {
  //   navigation.navigate('Tab');
  // };

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 250, width: 250, marginTop: 20}}
        source={require('../assets/image/Logoxd.png')}
      />
      <Text style={{ marginBottom: 40, textAlign: "center", color: "white", fontSize: 30, fontWeight: "bold" }}>Login </Text>
      <View>
        <TextInput style={styles.inputView}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          onChangeText= {(text) => {
            setEmail(text)
        }}
        />
        <TextInput style={styles.inputView}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          onChangeText= {(text) => {
            setPassword(text)
        }}

          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={AuthLogin}
        >
          <Text style={{
            color: "white",
          }}>Login</Text>
        </TouchableOpacity>

        <View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};


export default LoginScreen;
