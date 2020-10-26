<template>
  <div class="wpp-app">
    <section class="fixed bottom-0 right-0" :style="sectionStyle">
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
          class="shadow absolute bottom-0 border right-0 mb-20 bg-gray-200 rounded-xl transform w-84"
        >
          <div class="bg-green-500 p-6 rounded-t-xl text-white">
            <h2 class="text-lg text-white font-bold mb-4">
              {{ $wppConfig.title || 'Envie sua mensagem! 👋' }}
            </h2>
            <p>
              {{
                $wppConfig.description ||
                  'Preencha os dados para abrir a janela do WhatsApp'
              }}
            </p>
          </div>
          <Form />
          <p class="-mt-4 pb-2 text-center text-gray-500 text-sm text-xs">
            <small>Powered by Traction</small>
          </p>
        </div>
      </transition>
      <a
        @click="isOpen = !isOpen"
        class="block text-green-500 hover:text-green-600 cursor-pointer"
      >
        <img
          class="h-16"
          src="data:image/png;base64,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"
          alt="Abrir WhatsApp"
        />
      </a>
    </section>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components: {
    Form,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    sectionStyle () {
      return {
        marginRight: (this.$wppConfig.right || 30 ) + 'px',
        marginBottom: (this.$wppConfig.bottom || 30 ) + 'px',
        zIndex: 99999
      }
    }
  }
}
</script>
<style>
html {
  font-size: 16px;
}
</style>
