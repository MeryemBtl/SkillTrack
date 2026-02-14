/**
 * Todo öğesi için arayüz (Interface)
 * @typedef {Object} Todo
 * @property {string} id - Benzersiz kimlik
 * @property {string} title - Görev başlığı
 * @property {boolean} completed - Tamamlanma durumu
 * @property {string} createdAt - Oluşturulma tarihi (ISO string)
 * @property {string} [workDuration] - Ne kadar çalışıldı (örn: "2 saat")
 * @property {string} [workDescription] - Ne çalışıldı (açıklama)
 */

/**
 * @returns {Todo}
 */
export function createTodo(id, title, completed = false, workDuration = '', workDescription = '') {
  return {
    id,
    title,
    completed,
    createdAt: new Date().toISOString(),
    workDuration: workDuration || '',
    workDescription: workDescription || '',
  }
}
