import { Database } from 'lucide-react';

export function EmptyState() {
    return (
        <div className="glass-card p-12 text-center border-dashed border-2 border-slate-700/50 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-300 mb-2">Engine Idle</h3>
            <p className="text-slate-500 max-w-sm">
                Initiate the prediction sequence to aggregate real-time metrics and run inference.
            </p>
        </div>
    );
}
