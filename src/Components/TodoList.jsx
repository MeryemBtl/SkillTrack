import TodoItem from './TodoItem'

/**
 * Todo listesi - Kutu kutu (kart) listeleme
 */
export default function TodoList({
  todos,
  onToggle,
  onEdit,
  onDelete,
  editingId,
  editTitle,
  editWorkDuration,
  editWorkDescription,
  onEditSubmit,
  onEditCancel,
  onMarkComplete,
}) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-slate-500 dark:text-slate-400 py-8">
        Henüz görev yok. Yukarıdan yeni görev ekleyebilirsiniz.
      </p>
    )
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          isEditing={editingId === todo.id}
          editTitle={editingId === todo.id ? editTitle : ''}
          editWorkDuration={editingId === todo.id ? editWorkDuration : ''}
          editWorkDescription={editingId === todo.id ? editWorkDescription : ''}
          onEditSubmit={onEditSubmit}
          onEditCancel={onEditCancel}
          onMarkComplete={onMarkComplete}
        />
      ))}
    </ul>
  )
}
