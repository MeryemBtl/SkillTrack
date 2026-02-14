import { useState } from 'react'

/**
 * Yeni todo ekleme ve düzenleme formu
 */
export default function TodoForm({ onSubmit, initialValue = '', editId = null, onCancel }) {
  const [value, setValue] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSubmit(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={editId ? 'Görevi güncelle...' : 'Yeni görev ekle...'}
        className="flex-1 min-w-[200px] px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
        autoFocus={!!editId}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
        >
          {editId ? 'Güncelle' : 'Ekle'}
        </button>
        {editId && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-200 transition"
          >
            İptal
          </button>
        )}
      </div>
    </form>
  )
}
