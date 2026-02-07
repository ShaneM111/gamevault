# GameVault

Play free games. Break them. Learn from them.

## Features

- 🎮 Interactive web-based games
- 🎨 Neon-themed UI with Tailwind CSS
- ⚡ Built with Next.js for optimal performance
- 🎯 Current games: Neon Snake

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start playing.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
gamevault/
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── index.tsx      # Home page
│   ├── games.tsx      # Games list
│   └── play/
│       └── [slug].tsx # Game player page
├── public/
│   └── games/         # Game assets and scripts
├── styles/            # Global styles and Tailwind
├── tailwind.config.js # Tailwind configuration
└── next.config.js     # Next.js configuration
```

## Available Games

- **Neon Snake**: Classic snake game with a neon aesthetic

## License

MIT