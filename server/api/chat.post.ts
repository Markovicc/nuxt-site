import { defineEventHandler, readBody, createError } from 'h3'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history?: ChatMessage[]
}

// Rule-based responses about the agency
const agencyContext = `You are a helpful assistant for a digital marketing and data science agency. 
The agency offers the following services:
- Digital Marketing (SEO, social media marketing, content marketing)
- Data Science and Machine Learning solutions
- AI Integration for businesses
- Data visualization and interactive infographics
- Analytics and reporting
- Web development

The agency showcases its work through case studies, geopriče (geo stories), 
interactive graphics (interaktivne), and infographics (infografike).

You can help visitors learn about the agency's services, navigate the website,
or answer general questions about digital marketing and data science.
Respond concisely and helpfully. Support both English and Serbian language.`

const fallbackResponses: Record<string, string> = {
  services:
    'We offer digital marketing, data science, machine learning solutions, AI integration, data visualization, and analytics. How can we help your business?',
  contact:
    'You can reach us via our Contact page. We would love to hear about your project!',
  portfolio:
    'Check out our case studies, geo stories (Geopriče), interactive graphics (Interaktivne), and infographics (Infografike) sections.',
  hello: 'Hello! How can I assist you today? Ask me about our services, portfolio, or how we can help your business.',
  default:
    "I'm here to help! You can ask me about our services, portfolio, or how to get in touch with us.",
}

function getRuleBasedResponse(message: string): string {
  const lower = message.toLowerCase()
  if (lower.match(/\b(hello|hi|hey|zdravo|ćao|cao|hej)\b/))
    return fallbackResponses.hello
  if (lower.match(/\b(service|uslug|ponud)\b/))
    return fallbackResponses.services
  if (lower.match(/\b(contact|kontakt)\b/))
    return fallbackResponses.contact
  if (lower.match(/\b(portfolio|work|case|project|projekat|rad|primer)\b/))
    return fallbackResponses.portfolio
  return fallbackResponses.default
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ChatRequest>(event)

  if (!body?.message || typeof body.message !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Message is required' })
  }

  const message = body.message.trim().slice(0, 500)
  if (!message) {
    throw createError({ statusCode: 400, statusMessage: 'Message cannot be empty' })
  }

  const config = useRuntimeConfig()
  const openaiKey: string = (config.openaiApiKey as string) || ''

  if (openaiKey) {
    try {
      const history: ChatMessage[] = Array.isArray(body.history) ? body.history.slice(-10) : []
      const messages = [
        { role: 'system', content: agencyContext },
        ...history,
        { role: 'user', content: message },
      ]

      const response = await $fetch<{ choices: { message: { content: string } }[] }>(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${openaiKey}`,
            'Content-Type': 'application/json',
          },
          body: {
            model: 'gpt-3.5-turbo',
            messages,
            max_tokens: 300,
            temperature: 0.7,
          },
        },
      )

      const reply = response.choices?.[0]?.message?.content?.trim()
      if (reply) {
        return { reply }
      }
    } catch (err) {
      console.error('[chat] OpenAI API error, falling back to rule-based response:', err)
    }
  }

  return { reply: getRuleBasedResponse(message) }
})
