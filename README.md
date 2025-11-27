<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# Learn-hub-esi

A modern, interactive learning platform with an AI-powered chatbot assistant.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.6-purple.svg)](https://vitejs.dev/)

</div>

## ✨ Features

- 📚 **Comprehensive Course Catalog** - Browse curated learning paths and courses
- 🤖 **AI Chatbot Assistant** - Get instant help and recommendations
- 🔍 **Smart Search** - Quickly find courses by title or topics
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI:** Google Generative AI
- **Markdown:** Marked + DOMPurify

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learn-hub-esi.git
   cd learn-hub-esi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the app.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 📁 Project Structure

```
learn-hub-esi/
├── components/
│   ├── CategorySection.tsx   # Course category display
│   ├── ChatBot.tsx           # AI chatbot component
│   └── CourseCard.tsx        # Individual course card
├── services/
│   └── ai.ts                 # AI service integration
├── App.tsx                   # Main application component
├── constants.ts              # Course data and configuration
├── types.ts                  # TypeScript type definitions
├── index.tsx                 # Application entry point
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google AI](https://ai.google.dev/) for AI capabilities
- [Lucide Icons](https://lucide.dev/) for beautiful icons

---

<div align="center">
Made with ❤️ for the developer community
</div>
