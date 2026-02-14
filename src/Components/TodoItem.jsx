import { useState, useEffect } from 'react'

/**
 * Tekil todo satırı - listeleme, güncelleme, silme
 */
export default function TodoItem({ todo, onToggle, onEdit, onDelete, isEditing, editValue, onEditSubmit, onEditCancel }) {
  const [localEdit, setLocalEdit] = useState(editValue)

  useEffect(() => {
    setLocalEdit(editValue)
  }, [editValue, isEditing])

  if (isEditing) {
    const submit = () => {
      const trimmed = localEdit.trim()
      if (trimmed) onEditSubmit(todo.id, trimmed)
    }
    return (
      <li className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-emerald-200 dark:border-emerald-800">
        <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="flex-1 flex gap-2">
          <input
            type="text"
            value={localEdit}
            onChange={(e) => setLocalEdit(e.target.value)}
            onBlur={submit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submit()
              if (e.key === 'Escape') onEditCancel()
            }}
            className="flex-1 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            autoFocus
          />
          <button type="button" onClick={onEditCancel} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm">
            İptal
          </button>
        </form>
      </li>
    )
  }

  return (
    <li className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
      />
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}
      >
        {todo.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="px-2 py-1 rounded text-sm bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition"
          title="Düzenle"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-2 py-1 rounded text-sm bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60 transition"
          title="Sil"
        >
          Sil
        </button>
      </div>
    </li>
  )
}
