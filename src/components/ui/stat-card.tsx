import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  description?: string
  icon: LucideIcon
  trend?: number
  trendLabel?: string
  className?: string
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendLabel,
  className,
}: StatCardProps) {
  return (
    <div className={cn('glass-card p-6 rounded-xl hover-scale', className)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>

      {(description || trend !== undefined) && (
        <div className="flex items-center justify-between">
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}

          {trend !== undefined && (
            <div
              className={cn(
                'text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full',
                trend > 0
                  ? 'bg-green-50 text-green-600'
                  : 'bg-red-50 text-red-600',
              )}
            >
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% {trendLabel}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
