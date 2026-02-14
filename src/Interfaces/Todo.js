/**
 * Todo öğesi için arayüz (Interface)
 * @typedef {Object} Todo
 * @property {string} id - Benzersiz kimlik
 * @property {string} title - Görev başlığı
 * @property {boolean} completed - Tamamlanma durumu
 * @property {string} createdAt - Oluşturulma tarihi (ISO string)
 */

/**
 * @returns {Todo}
 */
export function createTodo(id, title, completed = false) {
  return {
    id,
    title,
    completed,
    createdAt: new Date().toISOString(),
  }
}
