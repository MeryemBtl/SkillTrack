import { useState, useEffect } from 'react'

/**
 * Tekil todo kartı - kutu görünümü, düzenlemede ne kadar/ne çalışıldı + Güncelle/Sil
 */
export default function TodoItem({
  todo,
  onToggle,
  onEdit,
  onDelete,
  isEditing,
  editTitle,
  editWorkDuration,
  editWorkDescription,
  onEditSubmit,
  onEditCancel,
  onMarkComplete,
}) {
  const [localTitle, setLocalTitle] = useState(editTitle)
  const [localDuration, setLocalDuration] = useState(editWorkDuration)
  const [localDescription, setLocalDescription] = useState(editWorkDescription)

  useEffect(() => {
    setLocalTitle(editTitle)
    setLocalDuration(editWorkDuration)
    setLocalDescription(editWorkDescription)
  }, [editTitle, editWorkDuration, editWorkDescription, isEditing])

  if (isEditing) {
    const handleUpdate = (e) => {
      e.preventDefault()
      const titleTrimmed = localTitle.trim()
      if (titleTrimmed) onEditSubmit(todo.id, titleTrimmed, localDuration.trim(), localDescription.trim())
    }
    const handleMarkComplete = () => {
      const titleTrimmed = localTitle.trim()
      if (titleTrimmed && onMarkComplete) onMarkComplete(todo.id, titleTrimmed, localDuration.trim(), localDescription.trim())
    }
    return (
      <li className="rounded-xl border-2 border-amber-300 dark:border-amber-600 bg-amber-50/80 dark:bg-slate-700/80 shadow-md p-4">
        <form onSubmit={handleUpdate} className="space-y-3">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Görev başlığı</label>
          <input
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            placeholder="Görev adı"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            required
          />
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ne kadar çalışıldı?</label>
          <input
            type="text"
            value={localDuration}
            onChange={(e) => setLocalDuration(e.target.value)}
            placeholder="Örn: 2 saat, 45 dakika"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          />
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ne çalışıldı?</label>
          <textarea
            value={localDescription}
            onChange={(e) => setLocalDescription(e.target.value)}
            placeholder="Yapılan işlerin kısa açıklaması..."
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 resize-y"
          />
          <div className="flex flex-wrap gap-2 pt-2">
            <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition">
              Güncelle
            </button>
            <button
              type="button"
              onClick={handleMarkComplete}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition border-2 border-emerald-400 dark:border-emerald-500"
              title="İlerlemeyi kaydet ve görevi tamamlandı işaretle"
            >
              İlerleme tamamlandı
            </button>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
            >
              Sil
            </button>
            <button type="button" onClick={onEditCancel} className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-200 transition">
              İptal
            </button>
          </div>
        </form>
      </li>
    )
  }

  return (
    <li className="rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 shadow hover:shadow-md transition p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <span className={`block font-medium ${todo.completed ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
            {todo.title}
          </span>
          {todo.workDuration && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">Süre:</span> {todo.workDuration}
            </p>
          )}
          {todo.workDescription && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 whitespace-pre-wrap">{todo.workDescription}</p>
          )}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onEdit(todo)}
          className="px-3 py-1.5 rounded-lg text-sm bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition"
          title="Düzenle"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1.5 rounded-lg text-sm bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60 transition"
          title="Sil"
        >
          Sil
        </button>
      </div>
    </li>
  )
}
