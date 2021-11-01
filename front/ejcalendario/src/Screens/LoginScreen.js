import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { dreValidator } from '../helpers/dreValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import api from '../services/api'

export default function LoginScreen({ navigation }) {
  const [dre, setDre] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const dreError = dreValidator(dre.value)
    const passwordError = passwordValidator(password.value)
    if (dreError || passwordError) {
      setDre({ ...dre, error: dreError })
      setPassword({ ...password, error: passwordError })
      return
    }
    else {
      const params = {
        'dre': dre.value,
        'password': password.value
      }

      api.post('/login', params)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error.data);
        });
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Entrar</Header>
      <TextInput
        label="DRE"
        returnKeyType="next"
        value={dre.value}
        onChangeText={(text) => setDre({ value: text, error: '' })}
        error={!!dre.error}
        errorText={dre.error}
        autoCapitalize="none"
        textContentType="none"
        keyboardType="numeric"
        required="DRE obrigatório"
        
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Entrar
      </Button>
      <View style={styles.row}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.primary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})