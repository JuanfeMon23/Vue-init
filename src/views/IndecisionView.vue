<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <HeadItems />
    <ChatMesssages :messages="messages" />
    <MessageBox @-send-message="onMessage" />
  </div>
</template>
<script lang="ts" setup>
import ChatMesssages from '@/components/chat/ChatMesssages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import HeadItems from '@/components/chat/HeadItems.vue';
import type { ChatMessage } from '@/interfaces/chat-meesage';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {id : new Date().getTime(), message : "Hola mundo", itsMine : true},
  {id : new Date().getTime() + 1, message : "mundos dos", itsMine : false , image : "https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1718755200&semt=sph"},

]);


function onMessage(text:string){
  messages.value.push({
    id: new Date().getTime(),
    itsMine : true,
    message : text
  })
}
</script>
