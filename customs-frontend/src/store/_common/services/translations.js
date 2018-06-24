import API from './api'

export function getTextLanguage(data) {
  return API.post(`/translate/google/language`, data)
}
export function translateText(data) {
  return API.post(`/translate/google`, data)
}
