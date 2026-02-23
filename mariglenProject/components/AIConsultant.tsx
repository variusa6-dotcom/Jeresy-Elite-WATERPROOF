import React, { useState } from 'react';
import { Bot, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { analyzeWaterIssue, AssessmentResult } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setResult(null);
    
    // Simulate slight delay for effect if API is too fast
    const assessment = await analyzeWaterIssue(description);
    setResult(assessment);
    setLoading(false);
  };

  const getSeverityColor = (sev: string) => {
    switch (sev) {
      case 'Low': return 'text-green-600 bg-green-100 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'High': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'Critical': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="assessment" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Bot size={14} />
              AI Powered
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Instant Leak Analysis
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Not sure how serious your water problem is? Describe the issue to our AI diagnostic tool. 
              It uses advanced models to estimate severity and suggest the right fix before you even pick up the phone.
            </p>
            
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span>Instant preliminary assessment</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span>Understand potential causes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-500" size={20} />
                <span>No obligation, 100% free</span>
              </li>
            </ul>
          </div>

          {/* Interactive Tool Side */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-700 shadow-2xl">
              {!result ? (
                <form onSubmit={handleAnalyze}>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Describe your problem (e.g., "Water seeping through basement floor cracks after rain")
                  </label>
                  <textarea
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32 resize-none mb-6"
                    placeholder="Type here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading || !description}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Bot />}
                    Analyze Issue
                  </button>
                </form>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-start mb-6 border-b border-slate-700 pb-4">
                    <h3 className="text-xl font-bold text-white">Assessment Result</h3>
                    <button 
                      onClick={() => { setResult(null); setDescription(''); }}
                      className="text-sm text-slate-400 hover:text-white"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="grid gap-4">
                    <div className={`p-4 rounded-xl border ${getSeverityColor(result.severity)} bg-opacity-10 border-opacity-20`}>
                      <span className="text-xs font-bold uppercase opacity-75">Severity Level</span>
                      <div className="text-lg font-bold flex items-center gap-2">
                        {result.severity === 'High' || result.severity === 'Critical' ? <AlertTriangle size={20} /> : <CheckCircle size={20} />}
                        {result.severity}
                      </div>
                    </div>

                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <span className="text-xs text-slate-400 font-bold uppercase">Likely Cause</span>
                      <p className="text-slate-200 mt-1">{result.likelyCause}</p>
                    </div>

                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <span className="text-xs text-slate-400 font-bold uppercase">Recommendation</span>
                      <p className="text-slate-200 mt-1">{result.recommendedAction}</p>
                    </div>
                    
                    <div className="mt-4">
                        <a href="#contact" className="block w-full text-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors">
                            Schedule This Repair
                        </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIConsultant;