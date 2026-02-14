import { useState, useEffect } from 'react'
import { createTodo } from '../Interfaces/Todo'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList'
import ProgressListView from '../Components/ProgressListView'

const STORAGE_KEY = 'skilltrack-todos'

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (_) {}
  return []
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

export default function TodoPage() {
  const [todos, setTodos] = useState(loadTodos)
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editWorkDuration, setEditWorkDuration] = useState('')
  const [editWorkDescription, setEditWorkDescription] = useState('')
  const [showProgressList, setShowProgressList] = useState(false)

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  // Ekle
  const handleAdd = (title) => {
    const newTodo = createTodo(crypto.randomUUID(), title, false)
    setTodos((prev) => [newTodo, ...prev])
  }

  // Güncelle (toggle + düzenleme formu)
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditTitle(todo.title)
    setEditWorkDuration(todo.workDuration ?? '')
    setEditWorkDescription(todo.workDescription ?? '')
  }

  const handleEditSubmit = (id, newTitle, workDuration, workDescription) => {
    const trimmed = (newTitle ?? editTitle).trim()
    if (trimmed) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === id
            ? { ...t, title: trimmed, workDuration: workDuration ?? '', workDescription: workDescription ?? '' }
            : t
        )
      )
    }
    setEditingId(null)
    setEditTitle('')
    setEditWorkDuration('')
    setEditWorkDescription('')
  }

  const handleEditCancel = () => {
    setEditingId(null)
    setEditTitle('')
    setEditWorkDuration('')
    setEditWorkDescription('')
  }

  // İlerleme tamamlandı: bilgileri kaydet ve görevi tamamlandı işaretle
  const handleMarkComplete = (id, title, workDuration, workDescription) => {
    const trimmed = (title ?? '').trim()
    if (!trimmed) return
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, title: trimmed, workDuration: workDuration ?? '', workDescription: workDescription ?? '', completed: true }
          : t
      )
    )
    setEditingId(null)
    setEditTitle('')
    setEditWorkDuration('')
    setEditWorkDescription('')
  }

  // Sil
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-1">
            SkillTrack TODO
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Görevlerinizi ekleyin, listeleyin, güncelleyin ve silin.
          </p>
        </header>

        <section className="mb-6">
          <TodoForm onSubmit={handleAdd} />
        </section>

        <section className="mb-4">
          <button
            type="button"
            onClick={() => setShowProgressList(true)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Tüm görevler ve ilerlemeler
          </button>
        </section>

        {showProgressList && (
          <section className="mb-6">
            <ProgressListView todos={todos} onClose={() => setShowProgressList(false)} />
          </section>
        )}

        <section className="bg-white dark:bg-slate-800/80 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-4">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">
            Görev Listesi ({todos.length})
          </h2>
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
            editingId={editingId}
            editTitle={editTitle}
            editWorkDuration={editWorkDuration}
            editWorkDescription={editWorkDescription}
            onEditSubmit={handleEditSubmit}
            onEditCancel={handleEditCancel}
            onMarkComplete={handleMarkComplete}
          />
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          React + Tailwind CSS • Ekle • Listele • Güncelle • Sil
        </footer>
      </div>
    </div>
  )
}
