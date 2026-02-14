import { useState, useEffect } from 'react'
import { createTodo } from '../Interfaces/Todo'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList'

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
  const [editValue, setEditValue] = useState('')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  // Ekle
  const handleAdd = (title) => {
    const newTodo = createTodo(crypto.randomUUID(), title, false)
    setTodos((prev) => [newTodo, ...prev])
  }

  // Listeleme TodoList içinde yapılıyor

  // Güncelle (toggle + metin)
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditValue(todo.title)
  }

  const handleEditSubmit = (id, newTitle) => {
    const trimmed = (newTitle ?? editValue).trim()
    if (trimmed) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, title: trimmed } : t))
      )
    }
    setEditingId(null)
    setEditValue('')
  }

  const handleEditCancel = () => {
    setEditingId(null)
    setEditValue('')
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
            editValue={editValue}
            onEditSubmit={handleEditSubmit}
            onEditCancel={handleEditCancel}
          />
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          React + Tailwind CSS • Ekle • Listele • Güncelle • Sil
        </footer>
      </div>
    </div>
  )
}
