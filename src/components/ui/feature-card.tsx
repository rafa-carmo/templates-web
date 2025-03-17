import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'glass-card p-8 rounded-2xl hover-scale opacity-0',
        `animate-scale-in`,
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
