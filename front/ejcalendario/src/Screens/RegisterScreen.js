import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'
import api from '../services/api'


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [dre, setDre] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const dreError = dreValidator(dre.value)
    const passwordError = passwordValidator(password.value)
    if (dreError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setDre({ ...dre, error: dreError })
      setPassword({ ...password, error: passwordError })
      return
    }

    else {


      const params = {
        'name': name.value,
        'dre': dre.value,
        'password': password.value
      }

      api.post('/users', params)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error.data);
        });

      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      })
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Criar conta</Header>
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="DRE"
        returnKeyType="next"
        value={dre.value}
        onChangeText={(text) => setDre({ value: text, error: '' })}
        error={!!dre.error}
        errorText={dre.error}
        autoCapitalize="none"
        keyboardType="numeric"
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Criar conta
      </Button>
      <View style={styles.row}>
        <Text>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
