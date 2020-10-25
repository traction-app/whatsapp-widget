<template>
  <section class="fixed bottom-0 right-0">
    <transition
      enter-active-class="transition ease-out duration-200"
      leave-active-class="transition ease-in duration-150"
      enter-class="opacity-0 translate-y-20 translate-x-10 scale-50"
      enter-to-class="opacity-100 translate-y-0 translate-x-0 scale-100"
      leave-class="opacity-100 translate-y-0 translate-x-0 scale-100"
      leave-to-class="opacity-0 translate-y-20 translate-x-10 scale-50"
    >
      <div
        v-if="isOpen"
        class="shadow fixed bottom-0 border right-0 mb-32 mr-10 bg-gray-200 rounded-xl transform w-84"
      >
        <div class="bg-green-500 p-6 rounded-t-xl text-white">
          <h2 class="text-lg font-bold mb-4">{{ $wppConfig.title || 'Envie sua mensagem! 👋' }} </h2>
          <p>
            {{ $wppConfig.description || 'Preencha os dados para abrir a janela do WhatsApp' }}
          </p>
        </div>
        <Form />
        <p class="-mt-4 pb-2 text-center text-gray-500 text-sm text-xs">
          <small>Powered by Traction</small>
        </p>
      </div>
    </transition>
    <a @click="isOpen = !isOpen" class="block text-green-500 mr-10 mb-10 cursor-pointer">
      <svg
        class="fill-current h-16 w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
        />
      </svg>
    </a>
  </section>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components: {
    Form
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    submit () {
      //console.log('Teste')
    }
  },
  created () {
    
  }
}
</script>