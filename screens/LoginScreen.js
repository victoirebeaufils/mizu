import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native'

const LoginScreen = (props) =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    const onSubmit = () =>{
        console.log(username);
        console.log(password);
    }
    return(
        <View>
            <TextInput placeholder="Username" value={username} onChangeText={handleUsernameChange}/>
            <TextInput placeholder="Password" value={password} onChangeText={handlePasswordChange}/>
            <Button onPress={()=> props.navigation.navigate('Home')} onSubmit={onSubmit} title="Login"/>
        </View>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontSize : 24
    }
})
export default LoginScreen;