<script setup lang="ts">
import { ref } from 'vue'
import JsSIP from 'jssip'

defineProps<{ msg: string }>()

const socket = new JsSIP.WebSocketInterface('wss://webclientrtudev.satel.org:5059')
const ua = new JsSIP.UA({
  uri: 'sip:4494$ROOT@webclientrtudev.satel.org:5059',
  authorization_user: 'Bj7s9H6G',
  password: 'Gp3t9V0W',
  sockets: [socket],
  register: false,
  register_expires: 120,
  realm: 'debian'
})

const registered = ref(false)
const connected = ref(false)
const loading = ref(false)

ua.addListener('registered', () => registered.value = ua.isRegistered())
ua.addListener('unregistered', () => registered.value = ua.isRegistered())
ua.addListener('registrationFailed', () => registered.value = ua.isRegistered())
ua.addListener('connected', () => connected.value = ua.isConnected())
ua.addListener('disconnected', () => connected.value = ua.isConnected())

const connect = () => {
  loading.value = true
  ua.start()
  loading.value = false
}

const register = () => {
  loading.value = true
  ua.register()
  loading.value = false
}
</script>

<template>
  <h1>Connected: {{ connected }} | Registered: {{ registered }}</h1>
  <button @click="connect" :disabled="loading || connected">Connect</button>
  <span style="padding: 0 10px"></span>
  <button @click="register" :disabled="loading || registered">Register</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
