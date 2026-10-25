"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Play, CheckCircle2, RefreshCw, Cpu, ShieldCheck, Zap } from "lucide-react";

interface LogLine {
  id: string;
  text: string;
  type: "info" | "success" | "warn" | "cmd";
  timestamp: string;
}

export function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "tests" | "health">("pipeline");
  const [isRunning, setIsRunning] = useState(false);
  const [testStats, setTestStats] = useState({ passed: 142, failed: 0, skipped: 2, duration: "1.42s" });
  const [inputVal, setInputVal] = useState("");
  
  const [logs, setLogs] = useState<LogLine[]>([
    { id: "1", text: "$ autoflow run --env=production --concurrency=8", type: "cmd", timestamp: "10:14:02" },
    { id: "2", text: "✓ Linting & AST type-checking verified [0 errors]", type: "success", timestamp: "10:14:03" },
    { id: "3", text: "✓ 142/142 unit & contract specs passed (1.42s)", type: "success", timestamp: "10:14:04" },
    { id: "4", text: "⚡ Ephemeral Docker runner spun up: runner-us-west-8a", type: "info", timestamp: "10:14:05" },
    { id: "5", text: "✓ Container vulnerability scan: 0 critical, 0 high", type: "success", timestamp: "10:14:06" },
    { id: "6", text: "🚀 Zero-downtime canary deployment: 10% traffic shifted", type: "info", timestamp: "10:14:07" },
    { id: "7", text: "✓ Health check response 200 OK (p99 latency: 1.1ms)", type: "success", timestamp: "10:14:08" },
    { id: "8", text: "✨ 100% production rollout completed successfully!", type: "success", timestamp: "10:14:09" },
  ]);

  const runSimulation = (scenario: "deploy" | "test" | "heal") => {
    if (isRunning) return;
    setIsRunning(true);
    const time = () => new Date().toLocaleTimeString("en-US", { hour12: false });

    if (scenario === "deploy") {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), text: "$ git push origin main && trigger-canary", type: "cmd", timestamp: time() },
        { id: Math.random().toString(), text: "⚙️ Validating Terraform state & security gates...", type: "info", timestamp: time() },
        { id: Math.random().toString(), text: "✓ Kubernetes rolling update initiated across 3 zones", type: "success", timestamp: time() },
        { id: Math.random().toString(), text: "🚀 Canary verified. Global traffic 100% live without downtime.", type: "success", timestamp: time() },
      ]);
    } else if (scenario === "test") {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), text: "$ playwright test --shard=1/4 --reporter=list", type: "cmd", timestamp: time() },
        { id: Math.random().toString(), text: "Running 64 E2E browser tests in parallel...", type: "info", timestamp: time() },
        { id: Math.random().toString(), text: "✓ Visual regression diff: 0% divergence", type: "success", timestamp: time() },
        { id: Math.random().toString(), text: "✓ All 64 E2E browser workflows passed!", type: "success", timestamp: time() },
      ]);
      setTestStats((s) => ({ ...s, passed: s.passed + 64 }));
    } else if (scenario === "heal") {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), text: "$ autoflow heal --flaky-detect", type: "cmd", timestamp: time() },
        { id: Math.random().toString(), text: "⚠️ Detected timing race condition in auth_flow.spec.ts:42", type: "warn", timestamp: time() },
        { id: Math.random().toString(), text: "🔧 Replaced arbitrary sleep with reactive waitForResponse()", type: "info", timestamp: time() },
        { id: Math.random().toString(), text: "✓ Suite stabilized. Deterministic pass rate: 100%", type: "success", timestamp: time() },
      ]);
    }

    setTimeout(() => {
      setIsRunning(false);
    }, 900);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const cmd = inputVal.trim().toLowerCase();
    const time = new Date().toLocaleTimeString("en-US", { hour12: false });
    
    if (cmd === "clear") {
      setLogs([]);
      setInputVal("");
      return;
    }

    const newLogs: LogLine[] = [
      ...logs,
      { id: Math.random().toString(), text: `$ ${inputVal}`, type: "cmd", timestamp: time },
    ];

    if (cmd === "help") {
      newLogs.push({ id: Math.random().toString(), text: "Available commands: deploy, test, heal, stats, clear", type: "info", timestamp: time });
    } else if (cmd.includes("deploy")) {
      newLogs.push({ id: Math.random().toString(), text: "🚀 Production canary triggered. All pods healthy.", type: "success", timestamp: time });
    } else if (cmd.includes("test")) {
      newLogs.push({ id: Math.random().toString(), text: "✓ All integration suites green [0 failed]", type: "success", timestamp: time });
    } else if (cmd.includes("stats")) {
      newLogs.push({ id: Math.random().toString(), text: `Pass rate: 99.8% | Flakiness: <0.2% | Uptime: 99.99%`, type: "info", timestamp: time });
    } else {
      newLogs.push({ id: Math.random().toString(), text: `Executed '${cmd}'. Type 'help' for commands.`, type: "info", timestamp: time });
    }

    setLogs(newLogs);
    setInputVal("");
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950/90 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl flex flex-col font-mono text-xs sm:text-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            autoflow-agent@alex-macbook-pro:~
          </span>
        </div>

        {/* Tab switcher */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === "pipeline" ? "bg-cyan-500/20 text-cyan-400 font-semibold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            pipeline.sh
          </button>
          <button
            onClick={() => setActiveTab("tests")}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === "tests" ? "bg-cyan-500/20 text-cyan-400 font-semibold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            test_metrics.log
          </button>
          <button
            onClick={() => setActiveTab("health")}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === "health" ? "bg-cyan-500/20 text-cyan-400 font-semibold" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            telemetry.json
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 sm:h-72 overflow-y-auto space-y-2 selection:bg-cyan-500/40">
        {activeTab === "pipeline" && (
          <>
            {logs.slice(-8).map((log) => (
              <div key={log.id} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-slate-500 text-[11px] select-none shrink-0">{log.timestamp}</span>
                <span
                  className={
                    log.type === "cmd"
                      ? "text-cyan-400 font-bold"
                      : log.type === "success"
                      ? "text-emerald-400"
                      : log.type === "warn"
                      ? "text-amber-400"
                      : "text-slate-300"
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
          </>
        )}

        {activeTab === "tests" && (
          <div className="space-y-3 text-slate-300 text-xs">
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Total Suites Executed</span>
                <span className="text-emerald-400 font-bold">14 Suites Passed</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[99.4%]" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Passing: {testStats.passed}</span>
                <span>Failing: {testStats.failed}</span>
                <span>Flakiness: &lt;0.1%</span>
                <span>Duration: {testStats.duration}</span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-900/60 rounded-lg text-slate-400 text-[11px] font-mono">
              [Playwright Engine] Chromium, Firefox, WebKit headless workers active.<br />
              [Contract Broker] 100% API schema conformity with OpenAPI spec v3.1.
            </div>
          </div>
        )}

        {activeTab === "health" && (
          <div className="space-y-2 font-mono text-[11px] text-slate-300">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 text-[10px]">P99 LATENCY</div>
                <div className="text-base font-bold text-cyan-400">1.18 ms</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 text-[10px]">UPTIME SLA</div>
                <div className="text-base font-bold text-emerald-400">99.992%</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 text-[10px]">CONTAINER PODS</div>
                <div className="text-base font-bold text-violet-400">32 Healthy</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-slate-400 text-[10px]">DAILY EVENTS</div>
                <div className="text-base font-bold text-amber-400">15.2M / day</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Quick Action Buttons */}
      <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => runSimulation("test")}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors disabled:opacity-50"
          >
            <Play className="w-3 h-3 text-cyan-400" />
            <span>Run E2E Suite</span>
          </button>
          <button
            onClick={() => runSimulation("heal")}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors disabled:opacity-50"
          >
            <ShieldCheck className="w-3 h-3 text-amber-400" />
            <span>Auto-Heal Flaky Test</span>
          </button>
          <button
            onClick={() => runSimulation("deploy")}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors disabled:opacity-50"
          >
            <Zap className="w-3 h-3 text-emerald-400" />
            <span>Canary Deploy</span>
          </button>
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommandSubmit} className="flex-1 min-w-[140px] flex items-center">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'test', 'clear'..."
            className="w-full bg-slate-950/80 border border-slate-700/80 rounded px-2 py-1 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 placeholder:text-slate-600 font-mono"
          />
        </form>
      </div>
    </div>
  );
}
