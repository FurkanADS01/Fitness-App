import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (!username || !password || !confirmPassword) {
            Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Hata", "Şifreler uyuşmuyor.");
            return;
        }

        // Burada gerçek bir backend API çağrısı olmalı, biz simüle ediyoruz
        Alert.alert("Başarılı", "Kayıt işlemi başarılı!", [
            {
                text: "Tamam",
                onPress: () => navigation.goBack() // Kayıt başarılı, login ekranına dön
            }
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt Ol</Text>
            <TextInput
                placeholder="Kullanıcı Adı"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Şifre"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <TextInput
                placeholder="Şifre Tekrar"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40,
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#1E90FF",
        padding: 15,
        borderRadius: 8,
        width: "100%",
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
