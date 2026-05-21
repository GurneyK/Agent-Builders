import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Copy,
  Database,
  FileCode2,
  FileSearch,
  FileUp,
  LayoutTemplate,
  MessageSquarePlus,
  Moon,
  PanelLeftOpen,
  Plus,
  Send,
  Sparkles,
  Star,
  Tag,
  X,
} from "lucide-react";
import "./styles.css";

const BASE = import.meta.env.BASE_URL;
const BLUE = "#1570EF";

function routeTo(path) {
  window.history.pushState({}, "", `${BASE}${path.replace(/^\/+/, "")}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function getRoute() {
  const path = window.location.pathname.replace(BASE, "").replace(/^\/+|\/+$/g, "");
  if (path === "login") return "login";
  if (path === "research-agent") return "research";
  if (path === "ds-agent") return "ds";
  return "home";
}

function App() {
  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => {
    const update = () => setRoute(getRoute());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  if (route === "login") return <LoginPage />;
  if (route === "ds") return <DsAgentApp />;
  if (route === "research") return <ResearchAgentApp />;
  return <PrototypeHome />;
}

function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex min-h-screen items-center justify-center px-6 py-6">
        <section className="w-full max-w-[1040px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/70 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative hidden min-h-[620px] overflow-hidden bg-[#07111F] p-8 text-white lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(21,112,239,0.34),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(45,212,191,0.18),transparent_26%),linear-gradient(135deg,rgba(21,112,239,0.18),transparent_42%)]" />
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-sky-400/10" />
            <div className="absolute -right-12 top-32 h-44 w-44 rounded-full border border-teal-300/10" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={`${BASE}h3l-logo.png`} alt="H3L Labs" className="h-10 w-auto" />
                  <div>
                    <p className="text-sm font-semibold">Unilever H3L Labs Teams</p>
                    <p className="text-xs text-slate-400">High fidelity agent demos</p>
                  </div>
                </div>
                <span className="rounded-md border border-sky-300/30 bg-sky-300/10 px-3 py-1.5 text-xs font-semibold text-sky-100">
                  Live prototype
                </span>
              </div>

              <div className="mt-8 max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">Demo path</p>
                    <p className="mt-1 text-sm text-slate-400">Click through the story in order</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1570EF]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    ["01", "Login", "Entry point"],
                    ["02", "Templates", "Choose workflow"],
                    ["03", "Experiment", "Set parameters"],
                    ["04", "Compare", "Review results"],
                  ].map(([number, title, note], index) => (
                    <div key={title} className="rounded-xl border border-white/10 bg-slate-950/35 p-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-400/10 text-[11px] font-bold text-sky-200">
                        {number}
                      </span>
                      <div className="mt-2 min-w-0">
                        <p className="flex items-center justify-between gap-2 text-sm font-semibold">
                          {title}
                          {index < 3 ? <ChevronRight className="h-4 w-4 text-slate-500" /> : <Check className="h-4 w-4 text-emerald-300" />}
                        </p>
                        <p className="text-xs text-slate-500">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid max-w-[420px] grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-xl font-semibold">2</p>
                  <p className="mt-1 text-xs text-slate-400">Agent apps</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <p className="text-xl font-semibold">9</p>
                  <p className="mt-1 text-xs text-slate-400">Research screens</p>
                </div>
              </div>

              <div className="mt-7">
                <p className="inline-flex rounded-md border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-200">
                  Demo mode
                </p>
                <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight">
                  Start at the front door, then open the full agent flow.
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
                  A shareable login entry that keeps the review polished, quick, and easy to narrate.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mx-auto max-w-md">
              <div className="flex justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF8FF] text-[#1570EF]">
                  <Bot className="h-8 w-8" />
                </span>
              </div>
              <div className="mt-7 text-center">
                <h2 className="text-3xl font-semibold tracking-tight">DS & Research Agent</h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">Template-driven experimentation platform</p>
              </div>

              <div className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Email</span>
                  <input
                    className="h-12 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#1570EF] focus:ring-4 focus:ring-[#EFF8FF]"
                    defaultValue="ds@company.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">Password</span>
                  <input
                    type="password"
                    className="h-12 w-full rounded-md border border-gray-300 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#1570EF] focus:ring-4 focus:ring-[#EFF8FF]"
                    defaultValue="password"
                  />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => routeTo("ds-agent")}
                    className="h-11 rounded-md bg-[#1570EF] text-sm font-semibold text-white shadow-sm transition hover:bg-[#175CD3]"
                  >
                    Log In
                  </button>
                  <button className="h-11 rounded-md border border-gray-300 bg-white text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
                    Sign Up
                  </button>
                </div>
                <button
                  onClick={() => routeTo("ds-agent")}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#84CAFF] bg-[#EFF8FF] text-sm font-semibold text-[#175CD3] transition hover:border-[#1570EF] hover:bg-white"
                >
                  View mockup screens
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-400">
                <span>Local auth</span>
                <span>SQLite + JWT</span>
                <span>Demo mode</span>
              </div>
              <div className="mt-8 flex justify-center gap-3">
                <button onClick={() => routeTo("")} className="text-sm font-semibold text-gray-500 hover:text-gray-900">
                  Prototype hub
                </button>
                <span className="text-gray-300">/</span>
                <button onClick={() => routeTo("research-agent")} className="text-sm font-semibold text-gray-500 hover:text-gray-900">
                  Research Agent
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function PrototypeHome() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <img src={`${BASE}h3l-logo.png`} alt="H3L Labs" className="h-10 w-auto" />
          <div>
            <h1 className="text-3xl font-semibold">H3L Agent Prototypes</h1>
            <p className="text-slate-400">Clickable demo links for the two agent apps.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <HomeCard
            title="Login Flow"
            text="Start at the login page, then use the demo button to jump into the mock UI screens."
            path="login"
            icon={Bot}
          />
          <HomeCard
            title="DS & Research Agent"
            text="Template library, time-series experiment setup, experiment history, and compare workflow."
            path="ds-agent"
            icon={LayoutTemplate}
            tone="light"
          />
          <HomeCard
            title="Research Agent"
            text="Dark-mode research flow from brief to query planning, search results, code generation, canvas, benchmarks, and pool."
            path="research-agent"
            icon={FileSearch}
          />
        </div>
      </div>
    </main>
  );
}

function HomeCard({ title, text, path, icon: Icon, tone }) {
  return (
    <button
      onClick={() => routeTo(path)}
      className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-left shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-sky-500/70"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1570EF]/15 text-sky-300">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-400">{text}</p>
      <span className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-[#1570EF] px-4 text-sm font-semibold text-white">
        Open prototype
        <ArrowRight className="h-4 w-4" />
      </span>
    </button>
  );
}

const templateCards = [
  {
    title: "Time Series Forecasting",
    description: "Multivariate time-series forecasting with EDA, feature engineering, feature selection, and multi-model backtesting.",
    icon: BarChart3,
    tag: "time-series",
    flow: ["EDA", "FE", "FS", "MD"],
    meta: ["4 experiments", "1 recipe", "Last run: 2h ago"],
    status: "Ready",
  },
  {
    title: "Binary Classification",
    description: "Classification pipeline with EDA, feature selection, and multi-classifier comparison with stratified cross-validation.",
    icon: Tag,
    tag: "classification",
    flow: ["EDA", "FS", "CLF"],
    meta: ["0 experiments", "0 recipes", "No experiments yet"],
    status: "Draft",
  },
];

const experiments = [
  ["exp-001", "Completed", "FS=lasso, lag=12, models=LGB+Ridge", "RMSE: 0.142  R²: 0.89", true, "green"],
  ["exp-002", "Running", "FS=rmr, lag=12, models=LGB+Ridge", "Step 3/8: Feature Selection", true, "blue"],
  ["exp-003", "Completed", "FS=rfe, lag=24, models=LGB+Ridge", "RMSE: 0.128  R²: 0.93", true, "green"],
  ["exp-004", "Completed", "FS=lasso, lag=24, models=All 5", "RMSE: 0.135  R²: 0.91", true, "green"],
  ["exp-005", "Failed", "FS=mrmr, lag=6, models=XGBoost", "Error: mrmr requires at least 10 features, got 4.", false, "red"],
];

function DsAgentApp() {
  const [screen, setScreen] = React.useState("templates");
  const [chatOpen, setChatOpen] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <DsTop />
      {screen === "templates" ? (
        <main className="flex min-h-[calc(100vh-132px)] flex-col lg:flex-row">
          {chatOpen ? <LightAgentChat onClose={() => setChatOpen(false)} /> : <CollapsedChat onOpen={() => setChatOpen(true)} />}
          <section className="min-w-0 flex-1 p-6 lg:p-8">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-md bg-[#EFF8FF] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#175CD3]">
                  <LayoutTemplate className="h-3.5 w-3.5" />
                  Template library
                </p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight">My Templates</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">Choose an experiment template, review the built-in flow, and start from a clean H3L Labs workspace.</p>
              </div>
              <button onClick={() => setScreen("experiment")} className="inline-flex h-12 items-center gap-2 rounded-md bg-[#1570EF] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#175CD3]">
                <Plus className="h-4 w-4" />
                New Template
              </button>
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {templateCards.map((card) => (
                <TemplateCard key={card.title} card={card} onOpen={() => setScreen("experiment")} />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <div className="grid min-h-[calc(100vh-132px)] lg:grid-cols-[360px_minmax(0,1fr)]">
          <LightAgentChat compare={screen === "compare"} />
          <main className="min-w-0 border-l border-gray-200">
            {screen === "compare" ? <CompareExperiments onBack={() => setScreen("experiment")} /> : <ExperimentBuilder onOpenModal={() => setModal(true)} />}
          </main>
        </div>
      )}
      {modal && <ExperimentModal onClose={() => setModal(false)} onCompare={() => { setModal(false); setScreen("compare"); }} />}
    </div>
  );
}

function DsTop() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-[76px] items-center justify-between gap-4 px-6">
        <button onClick={() => routeTo("ds-agent")} className="flex min-w-0 items-center gap-3 text-left">
          <img src={`${BASE}h3l-logo.png`} alt="H3L Labs" className="h-8 w-auto object-contain" />
          <div>
            <p className="text-sm font-semibold">DS & Research Agent</p>
            <p className="text-xs text-gray-500">Unilever H3L Labs Teams</p>
          </div>
        </button>
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden text-gray-500 sm:inline">ds@company.com</span>
          <span className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 font-medium text-gray-700">Data Scientist</span>
        </div>
      </div>
      <nav className="px-6">
        <div className="inline-flex border-b-2 border-[#1570EF] px-3 pb-3 text-sm font-semibold">Templates</div>
      </nav>
    </header>
  );
}

function CollapsedChat({ onOpen }) {
  return (
    <aside className="flex border-b border-gray-200 bg-white p-4 lg:w-[88px] lg:justify-center lg:border-b-0 lg:border-r">
      <button onClick={onOpen} aria-label="Open agent chat" className="flex h-12 w-full items-center justify-center rounded-md border border-[#84CAFF] bg-[#EFF8FF] px-3 text-[#175CD3] shadow-sm lg:w-12 lg:px-0">
        <PanelLeftOpen className="h-5 w-5" />
      </button>
    </aside>
  );
}

function LightAgentChat({ onClose, compare = false }) {
  const seed = compare
    ? [
        ["assistant", "Comparing 4 experiments. exp-003 dominates on all accuracy metrics."],
        ["user", "Why did exp-003 beat exp-004?"],
        ["assistant", "mRMR found features with high relevance but low inter-correlation, and exp-003 used a stronger ensemble."],
      ]
    : [
        ["assistant", "I see your data has 1,200 rows x 15 columns spanning Jan 2020 - Dec 2025. Period = 12 and Max lag = 12-24 are good defaults."],
        ["user", "Should I enable polynomial features?"],
        ["assistant", "I would skip polynomial features and rely on rolling + lag features instead."],
      ];
  const [messages, setMessages] = React.useState(seed);
  const [draft, setDraft] = React.useState("");
  const send = () => {
    const text = draft.trim() || "What should I do next?";
    setMessages([...messages, ["user", text], ["assistant", compare ? "Clone exp-003 and increase Optuna trials to 100." : "Start the experiment, then compare completed runs to pick the best setup."]]);
    setDraft("");
  };

  return (
    <aside className="relative order-last flex min-h-[520px] flex-col border-t border-gray-200 bg-white lg:order-first lg:w-[380px] lg:border-t-0 lg:border-r">
      <div className="border-b border-gray-200 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-[#1570EF]" />
              <h2 className="text-sm font-semibold">Agent Chat</h2>
            </div>
            <p className="mt-1 text-sm leading-5 text-gray-500">{compare ? "Ask about results & next steps" : "Ask about data & parameter choices"}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button onClick={() => setMessages([["assistant", "New chat started. Ask me anything about this demo flow."]])} className="inline-flex h-9 min-w-[112px] items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-700 shadow-sm">
              <MessageSquarePlus className="h-3.5 w-3.5" />
              New chat
            </button>
            {onClose && (
              <button onClick={onClose} aria-label="Close agent chat" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-500">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-5 pb-28">
        {messages.map(([role, text], index) => (
          <div key={index} className={`${role === "user" ? "ml-8 border-[#1570EF] bg-[#1570EF] font-semibold text-white" : "mr-5 border-gray-200 bg-gray-50 text-gray-700"} rounded-lg border p-4 text-sm leading-6 shadow-sm`}>
            <p className="mb-1 text-xs font-semibold opacity-80">{role === "user" ? "You" : "Agent"}</p>
            {text}
          </div>
        ))}
      </div>
      <div className="sticky bottom-4 mx-5 rounded-lg border border-gray-200 bg-white p-3 shadow-lg shadow-gray-200/70">
        <div className="flex gap-2">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} className="h-11 min-w-0 flex-1 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#1570EF] focus:ring-4 focus:ring-[#EFF8FF]" placeholder="Ask the agent..." />
          <button onClick={send} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#1570EF] text-white">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

function TemplateCard({ card, onOpen }) {
  const Icon = card.icon;
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#84CAFF] hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-md bg-[#EFF8FF] p-3 text-[#1570EF]"><Icon className="h-5 w-5" /></div>
        <div className="flex gap-2"><span className="rounded-md bg-[#EFF8FF] px-2.5 py-1 text-xs font-semibold text-[#175CD3]">{card.tag}</span><span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">{card.status}</span></div>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{card.title}</h2>
      <p className="mt-3 text-sm leading-6 text-gray-600">{card.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">{card.flow.map((step, index) => <span key={step} className="inline-flex items-center gap-2"><span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">{step}</span>{index < card.flow.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-gray-300" />}</span>)}</div>
      <div className="mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-3">{card.meta.map((item) => <span key={item}>{item}</span>)}</div>
      <button onClick={onOpen} className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#1570EF] px-4 text-sm font-semibold text-white">Open <ArrowRight className="h-4 w-4" /></button>
    </article>
  );
}

function ExperimentBuilder({ onOpenModal }) {
  return (
    <div className="space-y-5 p-6">
      <button onClick={() => routeTo("ds-agent")} className="inline-flex items-center gap-1 text-sm font-medium text-gray-500"><ArrowLeft className="h-4 w-4" />Back to Templates</button>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><h1 className="text-2xl font-semibold">New Experiment</h1><p className="mt-2 flex items-center gap-2 text-sm text-gray-600"><BarChart3 className="h-4 w-4 text-[#1570EF]" />Time Series Forecasting <span className="text-gray-300">.</span> {"EDA -> FE -> FS -> MD"}</p></div>
        <button onClick={onOpenModal} className="inline-flex h-11 items-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm"><BarChart3 className="h-4 w-4 text-[#1570EF]" />Experiments (5)</button>
      </div>
      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2"><span className="rounded-md bg-[#EFF8FF] p-2 text-[#1570EF]"><Database className="h-4 w-4" /></span><h2 className="text-sm font-semibold">Data</h2></div>
        <div className="space-y-3"><UploadRow label="Target CSV" required /><UploadRow label="Exogenous CSV" /></div>
      </section>
      <div className="grid gap-4 xl:grid-cols-2">{["EDA", "Feature Engineering", "Feature Selection", "Modeling"].map((title, i) => <ModuleCard key={title} title={title} number={i + 1} />)}</div>
      <button onClick={onOpenModal} className="flex min-h-[126px] w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white text-center text-gray-500"><span><Plus className="mx-auto h-6 w-6" /><span className="mt-2 block text-sm font-semibold text-gray-700">Add Module</span><span className="mt-1 block text-sm">Upload ZIP or clone from Git</span></span></button>
      <section className="sticky bottom-4 rounded-lg border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <label className="text-sm font-medium text-gray-700">Experiment Name</label>
        <div className="mt-2 flex flex-col gap-3 md:flex-row"><input className="h-11 min-w-0 flex-1 rounded-md border border-gray-300 px-3 text-sm font-semibold outline-none" defaultValue="Lasso + lag24 + LGB/Ridge" /><button onClick={onOpenModal} className="h-11 rounded-md bg-[#1570EF] px-6 text-sm font-semibold text-white">Start Experiment</button></div>
      </section>
    </div>
  );
}

function UploadRow({ label, required }) {
  const [uploaded, setUploaded] = React.useState(false);
  return <div className="grid gap-3 md:grid-cols-[120px_minmax(0,1fr)] md:items-center"><p className="text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</p><button onClick={() => setUploaded(true)} className={`${uploaded ? "border-[#84CAFF] bg-[#EFF8FF] text-[#175CD3]" : "border-gray-300 bg-gray-50 text-gray-500"} flex h-12 items-center justify-center gap-2 rounded-md border border-dashed text-sm font-medium`}>{uploaded ? <Check className="h-4 w-4" /> : <FileUp className="h-4 w-4" />}{uploaded ? `${label.toLowerCase().replace(" csv", "")}_data.csv uploaded` : `Click to upload or drag & drop ${required ? "(.csv)" : "(optional)"}`}</button></div>;
}

function ModuleCard({ title, number }) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2"><span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF8FF] text-sm font-semibold text-[#1570EF]">{number}</span><h2 className="text-sm font-semibold">MODULE: {title}</h2><span className="text-xs text-gray-400">({number === 1 ? 22 : number === 2 ? 9 : number === 3 ? 8 : 6} tools)</span></div>
      <div className="space-y-2">{["Descriptive Stats", "Distributions", "Seasonal Decomposition", "Lag Features", "Lasso", "Ridge"].map((label, i) => <CheckLine key={label} label={label} defaultChecked={i < 3} />)}</div>
      <button className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1570EF]"><Plus className="h-3.5 w-3.5" />Add Tool</button>
    </section>
  );
}

function CheckLine({ label, defaultChecked }) {
  const [checked, setChecked] = React.useState(defaultChecked);
  return <button onClick={() => setChecked(!checked)} className="flex items-center gap-2 text-left text-sm text-gray-700"><span className={`${checked ? "border-[#1570EF] bg-[#1570EF] text-white" : "border-gray-300 bg-white"} flex h-4 w-4 items-center justify-center rounded border`}>{checked && <Check className="h-3 w-3" />}</span>{label}</button>;
}

function ExperimentModal({ onClose, onCompare }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/40 p-4 backdrop-blur-sm">
      <section className="flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4"><div><h2 className="text-lg font-semibold">Experiment History</h2><p className="text-sm text-gray-500">Choose experiments to compare, clone, or review.</p></div><button onClick={onClose} className="rounded-md p-2 text-gray-400"><X className="h-5 w-5" /></button></div>
        <div className="grid gap-3 overflow-y-auto p-5 sm:grid-cols-2">{experiments.map((exp) => <ExperimentCard key={exp[0]} exp={exp} onCompare={onCompare} onClose={onClose} />)}</div>
        <div className="flex justify-end gap-3 border-t border-gray-200 bg-gray-50 px-5 py-4"><button onClick={onClose} className="h-10 rounded-md border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-700">Close</button><button onClick={onCompare} className="h-10 rounded-md bg-[#1570EF] px-4 text-sm font-semibold text-white">Compare Experiments</button></div>
      </section>
    </div>
  );
}

function ExperimentCard({ exp, onCompare, onClose }) {
  return (
    <article onClick={exp[5] === "red" ? undefined : onCompare} className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#84CAFF]">
      <div className="flex items-start justify-between gap-3"><span className="flex items-center gap-2 text-sm font-semibold"><span className={`${exp[4] ? "border-[#1570EF] bg-[#1570EF] text-white" : "border-gray-300 bg-white"} flex h-4 w-4 items-center justify-center rounded border`}>{exp[4] && <Check className="h-3 w-3" />}</span>{exp[0]}</span><span className={`${exp[5] === "red" ? "bg-red-50 text-red-700" : exp[5] === "blue" ? "bg-[#EFF8FF] text-[#175CD3]" : "bg-green-50 text-green-700"} rounded-md px-2 py-1 text-xs font-semibold`}>{exp[1]}</span></div>
      <p className="mt-3 text-sm text-gray-600">{exp[2]}</p><p className={`${exp[5] === "red" ? "text-red-600" : "text-gray-900"} mt-2 text-sm font-semibold`}>{exp[3]}</p>
      <div className="mt-4 flex gap-2"><button onClick={(e) => { e.stopPropagation(); onClose(); }} className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold">Clone</button><button onClick={(e) => { e.stopPropagation(); exp[5] === "red" ? onClose() : onCompare(); }} className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold">{exp[5] === "red" ? "Clone & Fix" : "Results"}</button></div>
    </article>
  );
}

function CompareExperiments({ onBack }) {
  const rows = [
    ["FS Method", "Lasso", "RFE", "mRMR", "Lasso"],
    ["Max Lag", "12", "24", "24", "24"],
    ["Models", "LGB, Ridge", "LGB, Ridge", "LGB, Ridge, XGB", "LGB"],
    ["RMSE ↓", "142.3", "138.7", "★ 125.4", "134.1"],
    ["MAPE ↓", "8.2%", "7.5%", "★ 6.1%", "7.8%"],
    ["R² ↑", "0.87", "0.89", "★ 0.93", "0.90"],
  ];
  return <div className="space-y-5 p-6"><button onClick={onBack} className="inline-flex items-center gap-1 text-sm font-medium text-gray-500"><ArrowLeft className="h-4 w-4" />Back to Experiments</button><h1 className="text-2xl font-semibold">Compare Experiments</h1><section className="overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><table className="w-full min-w-[760px] text-sm"><thead><tr className="border-b text-left"><th className="px-4 py-4">Metric</th>{["exp-001", "exp-002", "exp-003", "exp-004"].map((h) => <th key={h} className="px-4 py-4 text-center">{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={r[0]} className={`${i > 2 ? "bg-green-50" : ""} border-b border-gray-100`}><td className="px-4 py-4 font-medium">{r[0]}</td>{r.slice(1).map((v) => <td key={v} className="px-4 py-4 text-center">{v}</td>)}</tr>)}</tbody></table></section><section className="rounded-lg border border-gray-200 bg-white p-5"><div className="flex items-center gap-2"><Bot className="h-4 w-4 text-[#1570EF]" /><h2 className="text-sm font-semibold">Agent Recommendation</h2></div><p className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm leading-7"><strong>Verdict:</strong> exp-003 is the best overall experiment because it balances accuracy, relevance, redundancy, and acceptable runtime.</p></section></div>;
}

const researchSteps = ["Brief", "Queries", "Results", "Deep Dive", "Code Gen", "Code", "Benchmarks", "Compare", "Pool"];
const researchCrumbs = ["Landing", "Query Planning", "Search Results", "Deep Dive", "Code Generation", "Canvas: Code", "Canvas: Benchmarks", "Canvas: Comparison", "Pool Manager"];

function ResearchAgentApp() {
  const [step, setStep] = React.useState(1);
  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100">
      <div className="flex min-h-screen">
        <ResearchSide step={step} setStep={setStep} />
        <section className="flex min-w-0 flex-1 flex-col">
          <ResearchHeader step={step} />
          <ResearchStepper step={step} setStep={setStep} />
          <main className="min-h-0 flex-1 overflow-auto bg-[radial-gradient(circle_at_20%_0%,rgba(21,112,239,0.14),transparent_30%),#070B12]">
            {step === 1 && <BriefScreen setStep={setStep} />}
            {step === 2 && <QueriesScreen setStep={setStep} />}
            {step === 3 && <ResultsScreen setStep={setStep} />}
            {step === 4 && <DeepDive setStep={setStep} />}
            {step === 5 && <CodeGen setStep={setStep} />}
            {step >= 6 && step <= 8 && <Canvas step={step} setStep={setStep} />}
            {step === 9 && <Pool setStep={setStep} />}
          </main>
        </section>
      </div>
    </div>
  );
}

function ResearchSide({ step, setStep }) {
  return <aside className="hidden w-[292px] shrink-0 flex-col border-r border-slate-800 bg-[#0A101A] px-5 py-6 xl:sticky xl:top-0 xl:flex xl:h-screen"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1570EF]/30 bg-[#1570EF]/10"><FileSearch className="h-5 w-5 text-sky-300" /></div><div><p className="font-semibold">Research Agent</p><p className="text-xs text-slate-400">H3L Evidence Scout</p></div></div><div className="mt-7 space-y-3"><button onClick={() => setStep(1)} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1570EF] text-sm font-semibold"><Plus className="h-4 w-4" />New Search</button><button onClick={() => setStep(9)} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 text-sm font-semibold"><Database className="h-4 w-4" />Pool</button><button onClick={() => setStep(7)} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 text-sm font-semibold"><BarChart3 className="h-4 w-4" />Benchmarks</button></div><div className="mt-9 text-xs uppercase tracking-[0.14em] text-slate-500">Search History</div><button onClick={() => setStep(3)} className={`${step > 1 && step < 9 ? "bg-[#1570EF]/15 text-white" : "text-slate-400"} mt-4 flex w-full justify-between rounded-md px-3 py-2 text-left text-sm`}><span>Feature selection for ...</span><span>12:28 p.m.</span></button><div className="mt-auto flex items-center gap-2 pt-8 text-xs font-semibold text-slate-500"><span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-sky-300">U</span>HORIZON3</div></aside>;
}

function ResearchHeader({ step }) {
  return <header className="border-b border-slate-800 bg-[#0A101A]/95 px-6 py-4"><div className="flex items-center justify-between"><div className="flex items-center gap-4"><img src={`${BASE}h3l-logo.png`} alt="H3L Labs" className="h-8 w-auto" /><div><p className="font-semibold">Research Agent <span className="text-slate-600">/</span> <span className="text-sm text-slate-400">{researchCrumbs[step - 1]}</span></p><p className="text-xs text-slate-500">Search and rank papers with one prompt</p></div></div><div className="flex items-center gap-3 text-sm"><span className="hidden text-slate-400 md:inline">research@company.com</span><span className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-sky-200">Research Scientist</span><Moon className="h-4 w-4 text-violet-300" /></div></div></header>;
}

function ResearchStepper({ step, setStep }) {
  return <div className="sticky top-0 z-20 border-b border-slate-800 bg-[#0A101A]/95 px-6 py-3"><div className="mb-3 flex items-center gap-2 text-xs text-slate-500">Research Agent <ArrowRight className="h-3 w-3" /> Feature selection for lagged time-series regression <ArrowRight className="h-3 w-3" /><span className="font-semibold text-sky-300">{researchCrumbs[step - 1]}</span></div><div className="flex gap-2 overflow-x-auto pb-1">{researchSteps.map((label, i) => <button key={label} onClick={() => setStep(i + 1)} className={`${step === i + 1 ? "border-[#1570EF] bg-[#1570EF] text-white" : i + 1 < step ? "border-[#1570EF]/30 bg-[#1570EF]/10 text-sky-200" : "border-slate-700 bg-slate-900 text-slate-400"} flex h-10 shrink-0 items-center gap-2 rounded-lg border px-3 text-sm font-semibold`}><span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-xs">{i + 1 < step ? <Check className="h-3 w-3" /> : i + 1}</span>{label}</button>)}</div></div>;
}

function Frame({ eyebrow, title, subtitle, children, side }) {
  return <div className="grid min-h-[calc(100vh-151px)] gap-8 p-6 xl:grid-cols-[minmax(0,1fr)_340px]"><section><div className="mb-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">{eyebrow}</p><h1 className="mt-2 text-3xl font-semibold">{title}</h1><p className="mt-2 text-slate-400">{subtitle}</p></div>{children}</section><aside className="hidden xl:block">{side}</aside></div>;
}

function BriefScreen({ setStep }) {
  return <Frame eyebrow="Landing" title="Research Agent" subtitle="Search and rank papers with one prompt" side={<SideCard title="Brief Quality" text="The prompt is scoped to pipeline stage, data shape, and weak point." />}><div className="mx-auto max-w-5xl"><div className="mb-5 flex justify-center gap-3"><Pill active>Research Brief</Pill><Pill onClick={() => setStep(2)}>Quick Search</Pill></div><div className="mb-5 flex justify-center gap-3"><DarkSelect>Gemini 2.5 Pro</DarkSelect><DarkSelect>5 results</DarkSelect><button className="h-10 rounded-lg border border-slate-700 bg-slate-900 px-4 text-sm font-semibold">Code only</button></div><section className="rounded-xl border border-slate-800 bg-slate-950/75 p-5 shadow-2xl"><div className="mb-5 rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200"><span className="mr-3 rounded-md bg-violet-500/20 px-2 py-1 text-xs">DS Agent</span>Auto-filled by DS Agent request</div>{["Task *|Feature selection for lagged time-series regression", "Data Fingerprint|1000 rows, 100 lag features, 1 target, weekly frequency", "Weak Point|Multicollinearity among lagged features", "Constraints|Must handle 100+ features efficiently", "Pipeline Stage|Feature Selection"].map((x) => { const [l, v] = x.split("|"); return <Field key={l} label={l} value={v} />; })}<div className="mt-5 flex justify-between gap-4"><button onClick={() => setStep(9)} className="flex h-10 min-w-[190px] items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-4 text-left text-sm font-semibold">Pool<ChevronDown className="h-4 w-4" /></button><button onClick={() => setStep(2)} className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#1570EF] px-5 text-sm font-semibold">Generate Search Queries <ArrowRight className="h-4 w-4" /></button></div></section></div></Frame>;
}

function QueriesScreen({ setStep }) {
  const queries = ["arXiv|feature selection methods for lagged time-series regression with multicollinear features", "Semantic Scholar|feature selection for multicollinear lagged time series regression", "GitHub|time-series feature-selection multicollinearity", "Pool|Feature selection methods for lagged time-series regression with multicollinear features, handling 100+ lag columns efficiently."];
  return <Frame eyebrow="Query Planning" title="Research Agent" subtitle="Search and rank papers with one prompt" side={<SideCard title="Research Agent" text="I am decomposing the task into paper, implementation, and pool searches." />}><div className="mx-auto max-w-5xl"><p className="mb-6 text-center text-sm italic text-slate-500">...Feature selection for lagged time-series regression with multicollinear features.</p><div className="space-y-4">{queries.map((q, i) => { const [s, t] = q.split("|"); return <button key={s} onClick={() => setStep(3)} className={`${i === 3 ? "border-[#1570EF] bg-[#1570EF]/10" : "border-slate-800 bg-slate-950/75"} block w-full rounded-xl border p-5 text-left transition hover:border-[#1570EF]`}><p className="font-semibold">{s}</p><p className="mt-3 text-lg">{t}</p></button>; })}</div><div className="mt-7 flex justify-between"><button onClick={() => setStep(1)} className="text-sm font-semibold text-slate-400 underline">Re-plan queries</button><button onClick={() => setStep(3)} className="h-10 rounded-lg bg-[#1570EF] px-5 text-sm font-semibold">Searching...</button></div></div></Frame>;
}

function ResultsScreen({ setStep }) {
  return <Frame eyebrow="Search Results" title="Found 5 results" subtitle="From Pool - ranked by Gemini 2.5 Pro" side={<div className="sticky top-32 rounded-xl bg-[#1570EF] p-5 text-sm font-semibold">Feature selection methods for lagged time-series regression with multicollinear features</div>}><div className="max-w-4xl space-y-4">{["BorutaSHAP: A Wrapper Feature Selection Method", "Stability Selection with SHAP-based Feature Importance", "TSFresh: Feature Extraction and Selection for Time Series"].map((title, i) => <article key={title} className="rounded-xl border border-slate-800 bg-slate-950/75 p-5"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-1 text-sm text-slate-500">{i === 0 ? "Keany, E. - 2020" : "Christ, M. et al. - 2018"}</p><p className="mt-4 leading-7 text-slate-300">Combines feature selection methods with model-agnostic importance scoring. Handles multicollinearity through careful relevance comparison.</p><div className="mt-5 flex gap-2"><button onClick={() => setStep(4)} className="h-9 rounded-md border border-slate-700 px-3 text-sm font-semibold">Deep Dive</button><button onClick={() => setStep(5)} className="h-9 rounded-md bg-[#1570EF] px-3 text-sm font-semibold">Generate Code</button><button onClick={() => setStep(9)} className="h-9 rounded-md border border-slate-700 px-3 text-sm font-semibold">Save to Pool</button></div></article>)}</div></Frame>;
}

function DeepDive({ setStep }) {
  return <Frame eyebrow="Deep Dive" title="BorutaSHAP" subtitle="1, BorutaSHAP" side={<div className="sticky top-32 rounded-xl bg-[#1570EF] px-4 py-3 text-sm font-semibold">1, BorutaSHAP</div>}><article className="max-w-4xl rounded-xl border border-slate-800 bg-slate-950/75 p-7 leading-8 text-slate-300"><h2 className="mb-3 text-lg font-semibold text-white">How It Works</h2><p>BorutaSHAP combines the Boruta algorithm for all-relevant feature selection and SHAP for model-agnostic feature importance.</p><h2 className="mb-3 mt-7 text-lg font-semibold text-white">Strengths</h2><p>It identifies all features carrying signal while handling nonlinear relationships and interactions.</p><button onClick={() => setStep(5)} className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-[#1570EF] px-5 text-sm font-semibold">Generate Code <Code2 className="h-4 w-4" /></button></article></Frame>;
}

function CodeGen({ setStep }) {
  return <Frame eyebrow="Code Generation" title="Generate Code: BorutaSHAP" subtitle="Validated implementation workflow" side={<div className="sticky top-32 rounded-xl bg-[#1570EF] px-4 py-3 text-sm font-semibold">Generate Code: BorutaSHAP</div>}><div className="max-w-3xl space-y-7"><section className="rounded-xl border border-[#1570EF]/40 bg-[#1570EF]/10 p-6"><h3 className="text-lg font-semibold text-sky-100">Generating Code <span className="float-right text-sm">34s</span></h3><div className="mt-5 space-y-3 text-sm"><p>✓ Cloned repo scikit-learn-contrib/boruta_py</p><p>✓ Extracted 4,821 chars of source code</p><p>● Attempt 1 - running benchmark on stationary_linear_ar...</p></div><div className="mt-5 h-2 rounded-full bg-sky-950"><div className="h-full w-[45%] rounded-full bg-sky-400" /></div></section><section className="rounded-xl border border-slate-800 bg-slate-950/75 p-6"><h3 className="text-lg font-semibold">BorutaSHAP</h3><p className="mt-5 font-semibold text-emerald-300">Validated implementation of BorutaSHAP (passed on attempt 1, F1: 100%, total time: 72s)</p><button onClick={() => setStep(6)} className="mt-5 h-10 w-full rounded-lg bg-[#1570EF] text-sm font-semibold">Open in Canvas</button></section></div></Frame>;
}

function Canvas({ step, setStep }) {
  const active = step === 6 ? "Code" : step === 7 ? "Benchmarks" : "Comparison";
  return <div className="grid min-h-[calc(100vh-151px)] bg-[#070B12] lg:grid-cols-[360px_minmax(0,1fr)]"><aside className="border-r border-slate-800 bg-[#0B1220] p-6"><div className="mb-6 flex items-center justify-between"><h2 className="font-semibold">Chat</h2><button onClick={() => setStep(5)} className="h-10 rounded-lg bg-[#1570EF] px-4 text-sm font-semibold">Generate Code</button></div><div className="rounded-xl border border-slate-800 bg-slate-950 p-5"><p className="font-semibold">BorutaSHAP</p><p className="mt-2 text-sm font-semibold text-emerald-300">Validated (attempt 1, F1: 100%)</p></div></aside><section className="bg-[#080D14]"><div className="flex items-center justify-between border-b border-slate-800 px-6 py-4"><div className="flex gap-6">{["Code", "Benchmarks", "Comparison"].map((tab, i) => <button key={tab} onClick={() => setStep(i + 6)} className={`${active === tab ? "border-[#1570EF] text-white" : "border-transparent text-slate-500"} border-b-2 px-1 pb-3 text-sm font-semibold`}>{tab}</button>)}</div>{step === 7 && <button onClick={() => setStep(8)} className="h-9 rounded-lg bg-[#1570EF] px-4 text-sm font-semibold">Run All</button>}{step === 8 && <button onClick={() => setStep(7)} className="h-9 rounded-lg border border-slate-700 px-3 text-sm">Refresh</button>}{step === 6 && <button onClick={() => setStep(7)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700"><Copy className="h-4 w-4" /></button>}</div>{step === 6 && <CodePanel />}{step === 7 && <BenchmarkPanel setStep={setStep} />}{step === 8 && <ComparisonPanel />}</section></div>;
}

function CodePanel() {
  const lines = ["import numpy as np", "from sklearn.ensemble import RandomForestRegressor", "import shap", "", "class BorutaSHAPSelector:", "    def __init__(self, n_features_to_select=10):", "        self.support_ = None", "    def fit(self, X, y):", "        shadow = np.apply_along_axis(np.random.permutation, 0, X)"];
  return <pre className="h-[calc(100vh-216px)] overflow-auto p-8 font-mono text-sm leading-8 text-slate-300">{lines.map((l, i) => <div key={i} className="grid grid-cols-[42px_minmax(0,1fr)] gap-4"><span className="text-right text-slate-600">{i + 1}</span><code>{l}</code></div>)}</pre>;
}

function BenchmarkPanel({ setStep }) {
  return <div className="space-y-4 p-6">{["Stationary Linear AR|1.00", "Multicollinear|0.80", "Trend + Seasonality|0.72", "Nonlinear Interaction|0.67"].map((x) => { const [n, f] = x.split("|"); return <div key={n} className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4"><span className="rounded-md bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-300">Run</span><p className="flex-1 font-semibold">{n}</p><p className="font-semibold text-emerald-300">F1: {f}</p><button onClick={() => setStep(8)} className="rounded-md border border-slate-700 px-3 py-1.5 text-sm">Run</button></div>; })}</div>;
}

function ComparisonPanel() {
  return <div className="overflow-auto p-6"><table className="w-full min-w-[900px] text-sm"><thead><tr className="border-b border-slate-800 text-left text-slate-400"><th className="py-5">Method</th>{["Stationary AR", "Multicollinear", "Seasonality", "Avg"].map((h) => <th key={h} className="px-3 py-5 text-right">{h}</th>)}</tr></thead><tbody>{["Lasso|1.00|1.00|0.86|0.83", "RF Importance|1.00|0.80|0.86|0.80", "BorutaSHAP|1.00|0.80|0.72|0.72"].map((x) => { const r = x.split("|"); return <tr key={r[0]} className="border-b border-slate-800"><td className="py-4 font-semibold">{r[0]}</td>{r.slice(1).map((v) => <td key={v} className="px-3 py-4 text-right"><span className="rounded-md bg-emerald-500/15 px-2 py-1 font-mono text-emerald-300">{v}</span></td>)}</tr>; })}</tbody></table></div>;
}

function Pool({ setStep }) {
  return <div className="flex min-h-[calc(100vh-151px)] items-center justify-center bg-slate-950/80 p-8"><section className="w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-[#090E16] shadow-2xl"><div className="flex items-center justify-between border-b border-slate-800 p-5"><h2 className="text-xl font-semibold">Pool <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">11 methods</span></h2><button onClick={() => setStep(1)}><X className="h-5 w-5" /></button></div><table className="w-full text-left text-sm"><thead className="bg-slate-900 text-slate-400"><tr><th className="px-5 py-4">Method</th><th>Type</th><th>Avg F1</th><th className="text-right pr-5">Actions</th></tr></thead><tbody>{["Lasso|Pipeline|0.83", "RF Importance|Pipeline|0.80", "BorutaSHAP|Discovered|0.72", "TSFresh|Discovered|-"].map((x, i) => { const r = x.split("|"); return <tr key={r[0]} className="border-b border-slate-800"><td className="px-5 py-4 font-semibold">{r[0]}</td><td>{r[1]}</td><td className="font-bold">{r[2]}</td><td className="pr-5 text-right"><button onClick={() => setStep(i > 1 ? 6 : 4)} className="rounded-md border border-slate-700 px-3 py-1.5">View</button></td></tr>; })}</tbody></table></section></div>;
}

function Pill({ active, children, onClick }) {
  return <button onClick={onClick} className={`${active ? "bg-[#1570EF] text-white" : "text-slate-400 hover:bg-slate-900"} inline-flex h-9 items-center rounded-lg px-4 text-sm font-semibold`}>{children}</button>;
}

function DarkSelect({ children }) {
  return <button className="flex h-10 min-w-[150px] items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 px-4 text-sm font-semibold">{children}<ChevronDown className="h-4 w-4 text-slate-500" /></button>;
}

function Field({ label, value }) {
  return <label className="mb-4 block"><span className="mb-2 block text-sm font-semibold text-slate-300">{label}</span><span className="block min-h-10 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-slate-200">{value}</span></label>;
}

function SideCard({ title, text }) {
  return <div className="sticky top-32 rounded-xl border border-slate-800 bg-slate-950/80 p-5"><div className="mb-4 flex items-center gap-2"><Sparkles className="h-4 w-4 text-sky-300" /><p className="font-semibold">{title}</p></div><p className="text-sm leading-6 text-slate-400">{text}</p></div>;
}

createRoot(document.getElementById("root")).render(<App />);
