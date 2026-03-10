import { useState } from 'react';
import { Network, Database, Brain, ArrowRight, ShieldCheck, LineChart, Globe, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { Skeleton } from './components/Skeleton';
import { EmptyState } from './components/EmptyState';

export default function App() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [mode, setMode] = useState<'pro' | 'fast'>('pro');
    const [quota, setQuota] = useState({ remaining: 15, limit: 15 });

    const simulatePrediction = () => {
        setStatus('loading');
        toast.info('Initializing PyTorch Inference...', { icon: <Loader2 className="animate-spin text-brand-400" /> });
        setTimeout(() => {
            setStatus('success');
            toast.success('Prediction Vectors Successfully Generated');
            setQuota(q => ({ ...q, remaining: Math.max(0, q.remaining - 1) }));
        }, 2500);
    };

    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center relative overflow-hidden">
            <Toaster theme="dark" position="bottom-right" richColors />
            {/* Background Decorators */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />

            <div className="max-w-5xl w-full z-10">

                {/* Header Section */}
                <div className="flex justify-between items-start mb-8 w-full z-20">
                    <div className="inline-flex flex-col gap-2 relative z-20">
                        <button
                            onClick={() => setMode(m => m === 'pro' ? 'fast' : 'pro')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all w-fit ${mode === 'pro'
                                ? 'bg-gradient-to-br from-brand-600 to-indigo-600 shadow-lg shadow-brand-500/20 text-white'
                                : 'bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/20 text-white'
                                }`}
                        >
                            {mode === 'pro' ? '⚡ PRO' : '🚀 FAST'}
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-500 transition-all duration-500" style={{ width: `${(quota.remaining / quota.limit) * 100}%` }} />
                            </div>
                            <span className="text-xs text-slate-400 font-mono">{quota.remaining}/{quota.limit}</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16 space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold uppercase tracking-widest mb-4">
                        <LineChart size={16} />
                        Proprietary Architecture Showcase
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                        Stock Return <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-300">Prediction Engine</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Due to the proprietary nature of this high-frequency trading algorithm, the source code and neural network weights are strictly confidential. This page documents the system's verifiable engineering architecture.
                    </p>
                </div>

                {/* System Architecture Diagram (CSS Grid) */}
                <div className="mb-8 flex justify-center relative z-20">
                    <button
                        onClick={simulatePrediction}
                        disabled={status === 'loading'}
                        className="px-8 py-4 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white rounded-xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-50 flex items-center gap-3 cursor-pointer"
                    >
                        {status === 'loading' ? (
                            <><Loader2 className="animate-spin" size={20} /> Running Inference...</>
                        ) : 'Simulate Prediction Sequence'}
                    </button>
                </div>

                <div className="w-full mb-16 min-h-[400px] relative z-10">
                    {status === 'idle' && <EmptyState />}

                    {status === 'loading' && <Skeleton />}

                    {status === 'success' && (
                        <div className="glass-card p-8 md:p-12 relative border-t border-t-brand-500/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Network className="text-brand-400" /> System Topology
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                                {/* Compute Node 1 */}
                                <div className="bg-surface-2 border border-slate-700/50 rounded-2xl p-6 relative">
                                    <Database className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                    <h3 className="font-semibold text-white mb-2">Quant Data Ingestion</h3>
                                    <p className="text-sm text-slate-400">Real-time OHLCV aggregation & fundamental web-scraping pipelines.</p>

                                    <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 items-center justify-center bg-brand-500/20 rounded-full text-brand-400 z-10">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>

                                {/* Compute Node 2 */}
                                <div className="bg-surface-2 border border-brand-500/30 shadow-[0_0_30px_rgba(99,102,241,0.15)] rounded-2xl p-6 relative">
                                    <Brain className="w-12 h-12 text-brand-400 mx-auto mb-4" />
                                    <h3 className="font-semibold text-white mb-2">Deep Learning Core</h3>
                                    <p className="text-sm text-slate-400">PyTorch LSTM ensembles predicting stochastic momentum signals.</p>

                                    <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 items-center justify-center bg-brand-500/20 rounded-full text-brand-400 z-10">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>

                                {/* Compute Node 3 */}
                                <div className="bg-surface-2 border border-slate-700/50 rounded-2xl p-6 relative">
                                    <Globe className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                    <h3 className="font-semibold text-white mb-2">Execution API</h3>
                                    <p className="text-sm text-slate-400">Zero-trust Pydantic layer routing secure trade signals.</p>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

                {/* Security / Specs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card p-8">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                            <ShieldCheck className="text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Zero-Trust Environment</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            API boundaries are strictly validated utilizing Pydantic (Backend) and Zod (Frontend) to eliminate injection or malformed payload risks before they reach the LSTM inference nodes.
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700/50 pb-4">Technical Stack</h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex justify-between">
                                <span className="text-slate-500">Core ML</span>
                                <span className="font-mono text-brand-300">PyTorch, pandas, scikit-learn</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-slate-500">Backend API</span>
                                <span className="font-mono text-brand-300">FastAPI, Pydantic, Uvicorn</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-slate-500">Agentic RAG</span>
                                <span className="font-mono text-brand-300">Gemini 1.5 Pro</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center text-sm text-slate-600">
                    <p>© 2026. Private Architectural Sandbox. Source unavailable.</p>
                </div>

            </div>
        </div>
    )
}
