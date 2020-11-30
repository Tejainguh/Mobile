import React from 'react';
import {
  StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
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

  const handlerLogin = () => {
    navigation.navigate('Tab');
  };

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
        />
        <TextInput style={styles.inputView}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"

          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={handlerLogin}
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
