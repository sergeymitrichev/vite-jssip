import sanitize from 'sanitize-html'

const textSanitizeConfig: sanitize.IOptions = {
  allowedTags: [],
  allowedAttributes: {}
}

const messageSanitizeConfig: sanitize.IOptions = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a'],
  allowedAttributes: {
    a: ['href'],
    b: ['data-contact-uri', 'contenteditable']
  }
}

export function sanitizeToText (html: string): string {
  return 'test'
  // return sanitize(html, textSanitizeConfig)
}

export function sanitizeMessage (messageText: string): string {
  return sanitize(messageText, messageSanitizeConfig)
}
