import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native'
import Card from '../components/Card'
const LoginScreen = (props) =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (username) =>{
        setUsername(username);
        console.log(username);
    }
    const handlePasswordChange = (password) =>{
        setPassword(password);
        console.log(password);
    }
    const onSubmit = () =>{
        
        console.log(username);
        console.log(password);
        console.log("Going to the new screen");
        props.navigation.navigate('Home')
    }
    return(
        <View style={styles.container}>
            <Card>
            <TextInput placeholder="Username" value={username} onChangeText={(username)=>handleUsernameChange(username)}/>
            <TextInput placeholder="Password" value={password} onChangeText={(password)=>handlePasswordChange(password)}/>
            <Button onPress={onSubmit} title="Login"/>
            <Text>{this.username}</Text>
            <Text>{this.password}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontSize : 24
    },
    container:{
        padding:30,
      display: "flex",
  justifyContent: "center",
        marginHorizontal:60,
    }
})
export default LoginScreen;