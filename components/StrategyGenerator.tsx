import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { GeneratedStrategy, LoadingState } from '../types';
import { Button, Input, SectionTitle, Card } from './UI';
import { Loader2, Zap, Target, BarChart3, Hash } from 'lucide-react';

export const StrategyGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: '',
    features: ''
  });
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [strategy, setStrategy] = useState<GeneratedStrategy | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(LoadingState.LOADING);
    try {
      const result = await generateMarketingStrategy(
        formData.name,
        formData.location,
        formData.type,
        formData.features
      );
      setStrategy(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="generator" className="py-20 px-6 md:px-12 bg-industrial-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-industrial-900 to-transparent opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Lease Velocity Engine" 
          subtitle="Experience our proprietary logic. Input your development details below to generate a preliminary organic acquisition strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div>
            <Card className="h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-industrial-400 font-mono text-xs uppercase mb-2">Project Name</label>
                  <Input 
                    placeholder="e.g. The Ironworks Lofts" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-industrial-400 font-mono text-xs uppercase mb-2">Location/District</label>
                  <Input 
                    placeholder="e.g. Fulton Market, Chicago" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-industrial-400 font-mono text-xs uppercase mb-2">Unit Mix</label>
                  <Input 
                    placeholder="e.g. Luxury Studios & 1BDs" 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-industrial-400 font-mono text-xs uppercase mb-2">Key Selling Points</label>
                  <Input 
                    placeholder="e.g. Rooftop pool, coworking space, pet spa" 
                    value={formData.features}
                    onChange={(e) => setFormData({...formData, features: e.target.value})}
                    required
                  />
                </div>
                
                <div className="pt-4">
                  <Button disabled={status === LoadingState.LOADING} className="w-full flex justify-center items-center gap-2">
                    {status === LoadingState.LOADING ? (
                      <><Loader2 className="animate-spin h-4 w-4" /> Processing Data</>
                    ) : (
                      <><Zap className="h-4 w-4" /> Generate Strategy</>
                    )}
                  </Button>
                </div>
                {status === LoadingState.ERROR && (
                  <p className="text-red-500 font-mono text-sm mt-2">Error generating strategy. Please try again.</p>
                )}
              </form>
            </Card>
          </div>

          {/* Output Display */}
          <div className="relative min-h-[400px]">
             {status === LoadingState.IDLE && (
                <div className="absolute inset-0 border-2 border-dashed border-industrial-800 flex items-center justify-center text-industrial-600 font-mono text-sm uppercase tracking-widest">
                  Waiting for Input Signal...
                </div>
             )}

             {status === LoadingState.SUCCESS && strategy && (
               <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="border-safety/50 bg-industrial-900/50">
                    <div className="flex items-start gap-3">
                      <Target className="text-safety mt-1 shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{strategy.headline}</h3>
                        <p className="text-industrial-400 text-sm font-mono">{strategy.targetDemographic}</p>
                      </div>
                    </div>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <h4 className="text-industrial-400 font-mono text-xs uppercase mb-3 flex items-center gap-2">
                        <BarChart3 className="h-3 w-3" /> Reach Est.
                      </h4>
                      <p className="text-white font-bold">{strategy.estimatedReach}</p>
                    </Card>
                    <Card>
                       <h4 className="text-industrial-400 font-mono text-xs uppercase mb-3">Channels</h4>
                       <div className="flex flex-wrap gap-2">
                          {strategy.platforms.map((p, i) => (
                            <span key={i} className="bg-industrial-800 text-xs px-2 py-1 text-white border border-industrial-700">
                              {p}
                            </span>
                          ))}
                       </div>
                    </Card>
                  </div>

                  <Card>
                    <h4 className="text-industrial-400 font-mono text-xs uppercase mb-4">Content Tactics</h4>
                    <ul className="space-y-4">
                      {strategy.contentAngles.map((angle, idx) => (
                        <li key={idx} className="border-b border-industrial-800 pb-2 last:border-0 last:pb-0">
                          <span className="text-safety font-mono text-xs mr-2">0{idx + 1}</span>
                          <span className="text-white font-semibold text-sm">{angle.title}</span>
                          <p className="text-industrial-400 text-xs mt-1 pl-6">{angle.description}</p>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="bg-industrial-950 border-industrial-800">
                     <h4 className="text-industrial-400 font-mono text-xs uppercase mb-3 flex items-center gap-2">
                        <Hash className="h-3 w-3" /> Sample Copy
                      </h4>
                      <p className="font-mono text-xs text-industrial-300 whitespace-pre-wrap">
                        {strategy.sampleCaption}
                      </p>
                  </Card>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};