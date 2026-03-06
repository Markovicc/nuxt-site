<template>
  <div class="ai-chat-widget">
    <!-- Chat Toggle Button -->
    <button
      class="ai-chat-toggle"
      :class="{ open: isOpen }"
      :aria-label="isOpen ? 'Close chat' : 'Open AI assistant'"
      @click="toggleChat"
    >
      <i v-if="!isOpen" class="bx bx-chat"></i>
      <i v-else class="bx bx-x"></i>
    </button>

    <!-- Chat Window -->
    <transition name="chat-slide">
      <div v-if="isOpen" class="ai-chat-window" role="dialog" aria-label="AI Assistant">
        <!-- Header -->
        <div class="ai-chat-header">
          <div class="ai-chat-header-info">
            <span class="ai-chat-avatar"><i class="bx bx-bot"></i></span>
            <div>
              <strong>AI Asistent</strong>
              <span class="ai-chat-status">Online</span>
            </div>
          </div>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="ai-chat-messages">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="ai-chat-message"
            :class="msg.role"
          >
            <span v-if="msg.role === 'assistant'" class="ai-msg-icon">
              <i class="bx bx-bot"></i>
            </span>
            <div class="ai-msg-bubble">{{ msg.content }}</div>
            <span v-if="msg.role === 'user'" class="ai-msg-icon user-icon">
              <i class="bx bx-user"></i>
            </span>
          </div>
          <div v-if="isLoading" class="ai-chat-message assistant">
            <span class="ai-msg-icon"><i class="bx bx-bot"></i></span>
            <div class="ai-msg-bubble ai-typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="ai-chat-input-area">
          <input
            v-model="inputText"
            type="text"
            class="ai-chat-input"
            placeholder="Postavite pitanje..."
            maxlength="500"
            :disabled="isLoading"
            @keyup.enter="sendMessage"
          />
          <button
            class="ai-chat-send"
            :disabled="isLoading || !inputText.trim()"
            aria-label="Send message"
            @click="sendMessage"
          >
            <i class="bx bx-send"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export default defineComponent({
  name: 'AiChatWidget',
  setup() {
    const isOpen = ref(false)
    const isLoading = ref(false)
    const inputText = ref('')
    const messagesContainer = ref<HTMLElement | null>(null)
    const messages = ref<ChatMessage[]>([
      {
        role: 'assistant',
        content:
          'Zdravo! Ja sam AI asistent. Mogu da vam pomognem sa informacijama o našim uslugama, portfoliju ili da odgovorim na vaša pitanja. / Hello! I am an AI assistant. I can help you with information about our services, portfolio, or answer your questions.',
      },
    ])

    function toggleChat() {
      isOpen.value = !isOpen.value
    }

    async function scrollToBottom() {
      await nextTick()
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    }

    async function sendMessage() {
      const text = inputText.value.trim()
      if (!text || isLoading.value) return

      messages.value.push({ role: 'user', content: text })
      inputText.value = ''
      isLoading.value = true
      await scrollToBottom()

      try {
        const history = messages.value.slice(0, -1).slice(-10)
        const data = await $fetch<{ reply: string }>('/api/chat', {
          method: 'POST',
          body: { message: text, history },
        })
        messages.value.push({ role: 'assistant', content: data.reply })
      } catch (err) {
        console.error('[AiChatWidget] Failed to send message:', err)
        messages.value.push({
          role: 'assistant',
          content: 'Žao mi je, došlo je do greške. Molimo pokušajte ponovo. / Sorry, an error occurred. Please try again.',
        })
      } finally {
        isLoading.value = false
        await scrollToBottom()
      }
    }

    return { isOpen, isLoading, inputText, messages, messagesContainer, toggleChat, sendMessage }
  },
})
</script>

<style scoped>
.ai-chat-widget {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 1000;
  font-family: 'Nunito', sans-serif;
}

.ai-chat-toggle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #ff5d22;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 93, 34, 0.4);
  transition: background-color 0.3s, transform 0.3s;
  outline: none;
}

.ai-chat-toggle:hover {
  background-color: #221638;
  transform: translateY(-3px);
}

.ai-chat-toggle.open {
  background-color: #221638;
}

.ai-chat-window {
  position: absolute;
  bottom: 65px;
  right: 0;
  width: 340px;
  max-height: 480px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
  overflow: hidden;
}

.ai-chat-header {
  background: linear-gradient(135deg, #221638 0%, #3a2a5e 100%);
  color: #fff;
  padding: 14px 16px;
  display: flex;
  align-items: center;
}

.ai-chat-header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ai-chat-avatar {
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.ai-chat-header strong {
  display: block;
  font-size: 15px;
  font-weight: 700;
}

.ai-chat-status {
  font-size: 11px;
  color: #a8f5b0;
}

.ai-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8f9fc;
  min-height: 240px;
  max-height: 300px;
}

.ai-chat-message {
  display: flex;
  align-items: flex-end;
  gap: 7px;
}

.ai-chat-message.user {
  flex-direction: row-reverse;
}

.ai-msg-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #221638;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.ai-msg-icon.user-icon {
  background: #ff5d22;
}

.ai-msg-bubble {
  max-width: 230px;
  padding: 9px 13px;
  border-radius: 14px;
  font-size: 13.5px;
  line-height: 1.5;
  background: #fff;
  color: #221638;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.ai-chat-message.user .ai-msg-bubble {
  background: #ff5d22;
  color: #fff;
  border-radius: 14px 14px 4px 14px;
}

.ai-chat-message.assistant .ai-msg-bubble {
  border-radius: 14px 14px 14px 4px;
}

/* Typing indicator */
.ai-typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 12px 16px;
}

.ai-typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #221638;
  animation: typing-bounce 1.2s infinite ease-in-out;
}

.ai-typing span:nth-child(2) { animation-delay: 0.2s; }
.ai-typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-bounce {
  0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

.ai-chat-input-area {
  display: flex;
  padding: 10px 12px;
  border-top: 1px solid #eee;
  gap: 8px;
  background: #fff;
}

.ai-chat-input {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 22px;
  padding: 8px 14px;
  font-size: 13.5px;
  font-family: 'Nunito', sans-serif;
  outline: none;
  color: #221638;
  transition: border-color 0.2s;
}

.ai-chat-input:focus {
  border-color: #ff5d22;
}

.ai-chat-input:disabled {
  background: #f5f5f5;
}

.ai-chat-send {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ff5d22;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s, transform 0.2s;
  outline: none;
}

.ai-chat-send:hover:not(:disabled) {
  background: #221638;
  transform: scale(1.08);
}

.ai-chat-send:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Slide transition */
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.chat-slide-enter-from,
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}

@media (max-width: 400px) {
  .ai-chat-window {
    width: calc(100vw - 40px);
    right: 0;
  }
}
</style>
