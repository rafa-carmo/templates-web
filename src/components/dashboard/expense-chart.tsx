'use client'
import { useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { Button } from '@/components/ui/button'

const COLORS = [
  '#F87171',
  '#FBBF24',
  '#60A5FA',
  '#34D399',
  '#A78BFA',
  '#F472B6',
]

const CATEGORY_DATA = [
  { name: 'Alimentação', value: 1500 },
  { name: 'Transporte', value: 800 },
  { name: 'Moradia', value: 2000 },
  { name: 'Lazer', value: 600 },
  { name: 'Saúde', value: 400 },
  { name: 'Outros', value: 300 },
]

const MONTHLY_DATA = [
  { name: 'Jan', value: 4000 },
  { name: 'Fev', value: 4500 },
  { name: 'Mar', value: 3800 },
  { name: 'Abr', value: 4200 },
  { name: 'Mai', value: 3900 },
  { name: 'Jun', value: 3600 },
]

type ChartType = 'pie' | 'bar'

export function ExpenseChart() {
  const [chartType, setChartType] = useState<ChartType>('pie')

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Análise de Despesas</h3>
        <div className="flex gap-2">
          <Button
            variant={chartType === 'pie' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('pie')}
          >
            Categorias
          </Button>
          <Button
            variant={chartType === 'bar' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartType('bar')}
          >
            Mensal
          </Button>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'pie' ? (
            <PieChart>
              <Pie
                data={CATEGORY_DATA}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                animationDuration={800}
                animationBegin={200}
              >
                {CATEGORY_DATA.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`R$ ${value}`, 'Valor']}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={8}
              />
            </PieChart>
          ) : (
            <BarChart
              data={MONTHLY_DATA}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `R$${value}`}
              />
              <Tooltip
                formatter={(value) => [`R$ ${value}`, 'Valor']}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
              />
              <Bar
                dataKey="value"
                fill="#60A5FA"
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
