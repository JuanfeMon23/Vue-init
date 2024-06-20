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
import { usechat } from '@/composables/useChat';
const { messages, onMessage } = usechat();
</script>
