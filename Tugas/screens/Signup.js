import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput, Alert
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: 'center',
    marginTop: 15,

  },
  inputView: {
    backgroundColor: "white",
    width: 250,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    padding:15,
    alignItems:"center",
    justifyContent: "center"
  },
  signupbutton: {
    backgroundColor: "black",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    

  },


});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const AuthSignup = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXL8D2PevPkJZHK6C2_eD372dRHzn0y8o", {
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
      await navigation.navigate('Login')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // // const app = () => {
  //     navigation.navigate('Tab');
  // };

  return (
   
      <View style={styles.container}>
        <Image
        style={{ marginTop: 60, marginBottom: 40, height: 100, width: 175}}
        source={require('../assets/image/Logoxd2.png')}
      />
        <View >
          <Text style={{marginBottom: 40, color: "black", fontSize: 20, fontWeight:"bold", textAlign: "center"}}>Sign Up</Text>
        </View>

        <View>
        <TextInput style={styles.inputView}
            value={email}
            // onChangeText={setEmail}
            placeholder="Email"
            onChangeText= {(text) => {
              setEmail(text)
          }}
           
          />
        <TextInput style={styles.inputView}
            value={password}
            // onChangeText={setPassword}
            placeholder="Password"
            onChangeText= {(text) => {
              setPassword(text)
          }}
        
          />
        <TextInput style={styles.inputView}
            value={confirmPass}
            // onChangeText={setConfirmPass}
            placeholder="Password"
            onChangeText= {(text) => {
              setConfirmPass(text)
          }}
          
          />
        </View>

        <TouchableOpacity
           style= {styles.signupbutton}
            onPress={AuthSignup}
          >
            <Text style={{ 
              color:"white",
               }}>Sign Up</Text>
          </TouchableOpacity>
      </View>
  
  );
};

export default SignupScreen;
