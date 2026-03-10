export function Skeleton() {
    return (
        <div className="glass-card p-10 animate-pulse border-brand-500/20 bg-surface-2">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-slate-800 rounded-lg"></div>
                <div className="h-6 bg-slate-800 rounded w-48"></div>
            </div>

            <div className="space-y-4">
                <div className="h-4 bg-slate-800/50 rounded w-full"></div>
                <div className="h-4 bg-slate-800/50 rounded w-5/6"></div>
                <div className="h-4 bg-slate-800/50 rounded w-4/6"></div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="h-32 bg-slate-900/50 rounded-2xl border border-slate-700/50"></div>
                <div className="h-32 bg-slate-900/50 rounded-2xl border border-slate-700/50"></div>
                <div className="h-32 bg-slate-900/50 rounded-2xl border border-slate-700/50"></div>
            </div>
        </div>
    );
}
