module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        ink: '#080b12',
        panel: '#0f1520',
        elevated: '#151d2a',
        line: '#263244',
        muted: '#94a3b8',
        cyan: '#22d3ee',
        violet: '#8b5cf6',
        success: '#34d399'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.08)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
