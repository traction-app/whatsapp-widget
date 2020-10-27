<template>
  <form @submit.prevent="submit">
    <input
      v-model="form.name"
      placeholder="Seu nome"
      type="text"
      autofocus
      required
    />
    <input
      v-model="form.email"
      placeholder="Seu e-mail"
      type="email"
      required
    />
    <input
      v-model="form.phone"
      placeholder="Seu telefone"
      type="text"
      maxlength="15"
      required
    />
    <button
      type="submit"
    >
      {{ $wppConfig.cta || 'Enviar mensagem' }}
    </button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  watch: {
    'form.phone'() {
      let a = this.form.phone
      a = a.replace(/\D/g, '')
      a = a.replace(/^(\d{2})(\d)/g, '($1) $2')
      if (a.length > 12) a = a.replace(/(\d)(\d{4})$/, '$1-$2')
      this.form.phone = a
    },
  },
  methods: {
    submit() {
      const { phone, endpoint, message } = this.$wppConfig
      if (endpoint) {
        this.sendRequest(endpoint)
      }
      this.openWhatsapp(phone, message)
      this.destroyForm()
    },
    openWhatsapp(phone, message = null) {
      const append = (message) ? `?text=${encodeURIComponent(message)}` : '';
      window.open(`https://wa.me/${phone}${append}`, '_blank')
    },
    sendRequest(endpoint) {
      axios.post(`${endpoint}`, {
        ...this.form,
        utm_source: 'whatsapp',
      })
    },
    destroyForm() {
      this.$parent.isOpen = false
    },
  },
}
</script>

<style scoped>
form {
  padding: 25px 15px 0;
}
input {
  @apply block w-full py-2 px-3 border-none rounded-md;
  padding: 8px 12px;
  margin-bottom: 15px;
}
input:focus {
  @apply border-2 outline-none shadow;
}
button {
  @apply border-0 bg-green-500 text-white block w-full rounded-md;
  padding: 8px;
}
</style>
