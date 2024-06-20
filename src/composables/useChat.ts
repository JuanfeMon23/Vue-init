import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-meesage';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export function usechat() {
  const messages = ref<ChatMessage[]>([]);

  async function getResponse() {
    const response = await fetch('https://yesno.wtf/api');
    const data = (await response.json()) as YesNoResponse;
    console.log(data);
    return data;
  }

  async function onMessage(text: string) {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    await sleep(2.5);
    if (!text.endsWith('?')) return;

    const { answer, image } = await getResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  }

  return {
    messages,
    onMessage,
  };
}
