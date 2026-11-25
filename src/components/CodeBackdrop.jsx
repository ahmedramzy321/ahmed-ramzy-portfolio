const SNIPPETS = [
  { text: 'const stack = ["react", "laravel", "postgres"]', top: '10%', left: '3%', anim: 'float-a 30s ease-in-out infinite' },
  { text: 'SELECT * FROM projects ORDER BY craft DESC;', top: '26%', left: '68%', anim: 'float-b 38s ease-in-out infinite', cls: 'hide-sm' },
  { text: 'git commit -m "ship it"', top: '44%', left: '6%', anim: 'float-c 34s ease-in-out infinite', cls: 'hide-sm' },
  { text: '<Hero name="Ahmed" role="full-stack" />', top: '58%', left: '72%', anim: 'float-a 42s ease-in-out infinite reverse' },
  { text: 'php artisan make:system --solid', top: '72%', left: '4%', anim: 'float-b 36s ease-in-out infinite', cls: 'hide-sm' },
  { text: 'await db.sync({ queue: true })', top: '86%', left: '66%', anim: 'float-c 44s ease-in-out infinite' },
  { text: 'docker compose up -d', top: '34%', left: '84%', anim: 'float-c 40s ease-in-out infinite', cls: 'hide-md' },
  { text: 'fn build() -> Result<Product, Bug>', top: '64%', left: '86%', anim: 'float-b 32s ease-in-out infinite reverse', cls: 'hide-md' },
];

// Faint, slow-drifting code fragments over a dotted field. Calm by design:
// low contrast, long durations, disabled under prefers-reduced-motion.
export default function CodeBackdrop() {
  return (
    <div className="code-field" aria-hidden="true">
      {SNIPPETS.map((s) => (
        <span
          key={s.text}
          className={`code-token ${s.cls || ''}`}
          style={{ top: s.top, left: s.left, animation: s.anim }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
