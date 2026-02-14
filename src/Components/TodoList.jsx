import TodoItem from './TodoItem'

/**
 * Todo listesi - Listeleme işlemi
 */
export default function TodoList({ todos, onToggle, onEdit, onDelete, editingId, editValue, onEditSubmit, onEditCancel }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-slate-500 dark:text-slate-400 py-8">
        Henüz görev yok. Yukarıdan yeni görev ekleyebilirsiniz.
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          isEditing={editingId === todo.id}
          editValue={editingId === todo.id ? editValue : ''}
          onEditSubmit={(id, newTitle) => onEditSubmit(id, newTitle)}
          onEditCancel={onEditCancel}
        />
      ))}
    </ul>
  )
}
