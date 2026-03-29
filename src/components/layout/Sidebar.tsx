import { NavLink } from 'react-router-dom'
import { clsx } from 'clsx'

const links = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/transactions', label: 'Transações', icon: '💳' },
  { to: '/categories', label: 'Categorias', icon: '🏷️' },
  { to: '/insights', label: 'Insights', icon: '🧠' },
  { to: '/reports', label: 'Relatórios', icon: '📋' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen p-4 flex flex-col">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold text-brand-700">💰 Marconde</h1>
        <p className="text-xs text-gray-400">Finanças</p>
      </div>
      <nav className="flex-1 space-y-1">
        {links.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'}
            className={({ isActive }) => clsx(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
              isActive ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'
            )}>
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-100 px-2">
        <p className="text-xs text-gray-400">Powered by AegisHub</p>
      </div>
    </aside>
  )
}
