<template>
  <form class="p-6" @submit.prevent="submit">
    <input
      class="block w-full py-2 px-3 border-none rounded-md mb-2 focus:border-2 focus:outline-none focus:shadow"
      v-model="form.name"
      placeholder="Seu nome"
      type="text"
      autofocus
      required
    />
    <input
      class="block w-full py-2 px-3 border-none rounded-md mb-2 focus:border-2 focus:outline-none focus:shadow"
      v-model="form.email"
      placeholder="Seu e-mail"
      type="email"
      required
    />
    <input
      class="block w-full py-2 px-3 border-none rounded-md mb-2 focus:border-2 focus:outline-none focus:shadow"
      v-model="form.phone"
      placeholder="Seu telefone"
      type="text"
      maxlength="15"
      required
    />
    <button
      type="submit"
      class="bg-green-500 text-white block w-full p-2 rounded-md"
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
