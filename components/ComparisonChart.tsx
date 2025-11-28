import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card } from './UI';

const data = [
  { name: 'Traditional', cost: 4500, label: '$4.5k' },
  { name: 'Low Vacancy', cost: 1200, label: '$1.2k' },
];

export const ComparisonChart: React.FC = () => {
  return (
    <Card className="h-full min-h-[300px] flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1">Cost Per Lease</h3>
        <p className="text-industrial-400 text-xs font-mono">Market Avg vs. Organic Strategy</p>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 0, right: 30 }}>
            <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="#a1a1aa" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              width={100}
              fontFamily="JetBrains Mono"
            />
            <Tooltip 
              cursor={{fill: '#27272a'}}
              contentStyle={{ backgroundColor: '#09090b', borderColor: '#3f3f46', color: '#fff' }}
              itemStyle={{ color: '#FF5F1F' }}
              formatter={(value: number) => [`$${value}`, 'Cost']}
            />
            <Bar 
              dataKey="cost" 
              fill="#FF5F1F" 
              barSize={32}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};