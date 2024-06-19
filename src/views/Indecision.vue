<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <HeadItems />
    <ChatMesssages :messages="messages" />
    <MessageBox />
  </div>
</template>
<script lang="ts" setup>
import ChatMesssages from '@/components/chat/ChatMesssages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import HeadItems from '@/components/chat/HeadItems.vue';
import type { ChatMessage } from '@/interfaces/chat-meesage';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: 1,
    message: 'Wola amigo',
    itsMine: true,
  },
  {
    id: 2,
    message: 'Wola amaretto luis',
    itsMine: false,
  },
  {
    id: 3,
    message: 'Como va la joda',
    itsMine: true,
  },
  {
    id: 4,
    message: 'Dolor de cabeza uwu',
    itsMine: false,
  },
]);
</script>
