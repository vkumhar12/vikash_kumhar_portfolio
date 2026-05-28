import { AnimatePresence, motion } from 'framer-motion';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';

type LineType = 'command' | 'output' | 'error' | 'welcome';

interface OutputLine {
  id: number;
  type: LineType;
  content: string[];
}

const COMMANDS: Record<string, string[]> = {
  help: [
    '╭──────────────────────────────────────╮',
    '│         Available Commands            │',
    '╰──────────────────────────────────────╯',
    '',
    '  help         → Show this help message',
    '  whoami       → Learn about Vikash',
    '  skills       → Technical skill set',
    '  experience   → Work experience',
    '  projects     → Projects showcase',
    '  contact      → Contact information',
    '  clear        → Clear the terminal',
    '',
  ],
  whoami: [
    "Hi! I'm Vikash Kumhar 👋",
    '',
    '  Role    → Frontend / React Developer',
    '  Based   → India',
    '  Coding  → Since 2021',
    '  Focus   → Sleek UIs & smooth UX',
    '',
    'I love turning ideas into engaging',
    'web experiences — every line of code',
    'is an adventure in innovation!',
    '',
  ],
  skills: [
    '─── Frontend ──────────────────────────',
    '  React.js    ████████████░░  90%',
    '  Next.js     ██████████░░░░  80%',
    '  TypeScript  ████████░░░░░░  70%',
    '  Tailwind    █████████████░  95%',
    '',
    '─── State & APIs ──────────────────────',
    '  Redux TK    ██████████░░░░  80%',
    '  REST APIs   ████████████░░  85%',
    '  Axios       ████████████░░  85%',
    '',
    '─── Tools ─────────────────────────────',
    '  Git/GitHub  ████████████░░  90%',
    '  Framer Mtn  ██████████░░░░  75%',
    '  Postman     ████████░░░░░░  70%',
    '',
  ],
  experience: [
    '─── Work Experience ───────────────────',
    '',
    '● React.js Developer',
    '  SearchingYard Group',
    '  Dec 2023 – Aug 2024',
    '  → CRM, ERP & HRMS platforms',
    '  → React, Next.js, TypeScript',
    '  → Redux Toolkit, Material UI',
    '',
    '● Frontend Developer (Intern)',
    '  SearchingYard Group',
    '  May 2023 – Nov 2023',
    '  → E-commerce, CMS, Inventory',
    '  → HTML, CSS, React, JS',
    '  → Responsive Design',
    '',
  ],
  projects: [
    '─── Projects ──────────────────────────',
    '',
    '01. Developer Portfolio',
    '    Next.js • Framer Motion • Tailwind',
    '',
    '02. CRM Platform',
    '    React • Redux • TypeScript • REST',
    '',
    '03. ERP Web Application',
    '    React • Next.js • Chart.js • Redux',
    '',
    '04. HRMS Platform',
    '    React • Tailwind • REST API',
    '',
    '05. E-Commerce Platform',
    '    React • Redux • Node.js • MongoDB',
    '',
    'Scroll up to <Projects /> to see more!',
    '',
  ],
  contact: [
    '─── Get in Touch ──────────────────────',
    '',
    '  📧  vikashkumhar13@gmail.com',
    '  🔗  linkedin.com/in/vikash-kumhar-7a67b8216',
    '  🐙  github.com/vkumhar12',
    '',
    'Open to freelance & full-time roles!',
    'Feel free to reach out anytime 🚀',
    '',
  ],
};

const WELCOME_LINES = [
  ' ██╗   ██╗██╗  ██╗    ██████╗ ███████╗██╗   ██╗',
  ' ██║   ██║██║ ██╔╝    ██╔══██╗██╔════╝██║   ██║',
  ' ██║   ██║█████╔╝     ██║  ██║█████╗  ██║   ██║',
  ' ╚██╗ ██╔╝██╔═██╗     ██║  ██║██╔══╝  ╚██╗ ██╔╝',
  '  ╚████╔╝ ██║  ██╗    ██████╔╝███████╗ ╚████╔╝ ',
  '   ╚═══╝  ╚═╝  ╚═╝    ╚═════╝ ╚══════╝  ╚═══╝  ',
  '',
  'Welcome to Vikash Kumhar\'s interactive terminal!',
  'Type "help" to explore. Use ↑↓ for history.',
  '',
];

let _uid = 0;
const uid = () => ++_uid;

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<OutputLine[]>([
    { id: uid(), type: 'welcome', content: WELCOME_LINES },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newLines: OutputLine[] = [
      { id: uid(), type: 'command', content: [`vikash@portfolio:~$ ${raw}`] },
    ];

    if (cmd === 'clear') {
      setLines([{ id: uid(), type: 'welcome', content: WELCOME_LINES }]);
      setInput('');
      return;
    }

    if (cmd === '') {
      setLines(prev => [...prev, ...newLines]);
      setInput('');
      return;
    }

    if (COMMANDS[cmd]) {
      newLines.push({ id: uid(), type: 'output', content: COMMANDS[cmd] });
    } else {
      newLines.push({
        id: uid(),
        type: 'error',
        content: [
          `bash: ${cmd}: command not found`,
          'Type "help" for available commands.',
          '',
        ],
      });
    }

    setLines(prev => [...prev, ...newLines]);
    setCmdHistory(prev => [raw, ...prev]);
    setHistIdx(-1);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : cmdHistory[next]);
    }
  };

  const lineColor = (type: LineType) => {
    if (type === 'welcome') return 'text-cyan-400';
    if (type === 'command') return 'text-white';
    if (type === 'error') return 'text-red-400';
    return 'text-green-300';
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
      >
        {/* Title bar */}
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 select-none">
          <span className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
          <span className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
          <span className="ml-auto text-gray-400 text-xs font-mono tracking-wide">
            vikash@portfolio:~
          </span>
        </div>

        {/* Terminal body */}
        <div
          className="bg-gray-950 text-green-400 font-mono text-xs md:text-sm p-4 h-72 md:h-80 overflow-y-auto cursor-text scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700"
          onClick={() => inputRef.current?.focus()}
        >
          <AnimatePresence initial={false}>
            {lines.map(line => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.12 }}
              >
                {line.content.map((text, i) => (
                  <div key={i} className={lineColor(line.type)}>
                    {text || ' '}
                  </div>
                ))}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input row */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-cyan-400 shrink-0 select-none">vikash@portfolio:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white caret-green-400 min-w-0"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal input"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>

      <p className="text-center text-xs text-slate-500 mt-3">
        Click terminal &amp; try:{' '}
        {['help', 'skills', 'projects', 'contact'].map((cmd, i) => (
          <span key={cmd}>
            <code
              className="text-cyan-500 cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={() => {
                inputRef.current?.focus();
                setInput(cmd);
              }}
            >
              {cmd}
            </code>
            {i < 3 ? ' · ' : ''}
          </span>
        ))}
      </p>
    </div>
  );
}
