/**
 * Tüm görevlerin ilerlemeleri ile listelendiği görünüm
 */
export default function ProgressListView({ todos, onClose }) {
  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 p-6 text-center">
        <p className="text-slate-500 dark:text-slate-400">Henüz görev yok.</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-200 transition"
        >
          Kapat
        </button>
      </div>
    )
  }

  const completedCount = todos.filter((t) => t.completed).length
  const progressPercent = todos.length ? Math.round((completedCount / todos.length) * 100) : 0

  return (
    <div className="rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800/90 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Tüm Görevler ve İlerlemeler</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {completedCount} / {todos.length} tamamlandı • %{progressPercent} ilerleme
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-200 text-sm font-medium transition"
        >
          Kapat
        </button>
      </div>
      <div className="max-h-[70vh] overflow-y-auto">
        <ul className="divide-y divide-slate-200 dark:divide-slate-600">
          {todos.map((todo, index) => (
            <li key={todo.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
              <div className="flex items-start gap-3">
                <span className="flex shrink-0 w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`font-medium ${todo.completed ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}
                    >
                      {todo.title}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        todo.completed
                          ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200'
                          : 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200'
                      }`}
                    >
                      {todo.completed ? 'Tamamlandı' : 'Devam ediyor'}
                    </span>
                  </div>
                  {(todo.workDuration || todo.workDescription) && (
                    <div className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {todo.workDuration && (
                        <p>
                          <span className="font-medium text-slate-700 dark:text-slate-300">Süre:</span> {todo.workDuration}
                        </p>
                      )}
                      {todo.workDescription && (
                        <p className="whitespace-pre-wrap">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Yapılanlar:</span>{' '}
                          {todo.workDescription}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
