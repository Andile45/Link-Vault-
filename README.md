# Link Vault

A modern, elegant bookmark manager built with React and TypeScript. Save, organize, and access your favorite links with a beautiful glass morphism UI design.

## Features

- **Modern UI** — Glass morphism interface with backdrop blur effects
- **Responsive** — Works on all screen sizes
- **Smart Search** — Debounced search across title, URL, description, and tags
- **Tags** — Organize links with comma-separated tags
- **Local Storage** — All data stored in your browser (no backend)
- **Fast** — Built with Vite for quick dev and builds
- **CRUD** — Add, edit, and delete links with validation
- **Feedback** — Toast notifications and smooth animations
- **Link Preview** — Domain and description on each card

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/link-vault.git
   cd link-vault
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start development server   |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run ESLint                 |

## Project Structure

```
src/
├── components/
│   ├── LinkCard.tsx      # Link card (title, domain, description, tags)
│   ├── LinkCard.css
│   ├── LinkForm.tsx      # Add/edit link modal form
│   ├── LinkForm.css
│   ├── LinkVault.tsx     # Main vault (state, search, CRUD)
│   ├── LinkVault.css
│   ├── navBar.tsx        # Top navigation with logo
│   ├── navBar.css
│   ├── SearchBar.tsx     # Search input with debounce
│   ├── SearchBar.css
│   ├── Notification.tsx  # Toast notifications
│   └── Notification.css
├── utils/
│   └── localStorage.ts   # CRUD + search for links
├── assets/               # Images (e.g. Logo.png)
├── types.ts              # Shared TypeScript types
├── App.tsx               # Root layout (NavBar + LinkVault)
├── App.css
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Usage

### Adding a link

1. Click **Add New Link**.
2. Enter title, URL, description, and optional tags (comma-separated).
3. Click **Add Link** (URL gets `https://` added if missing).

### Searching

- Type in the search bar; results update after a short delay (debounced).
- Search runs over title, URL, description, and tags.
- Clear the field to see all links again.

### Managing links

- **Visit** — Click the card to open the URL in a new tab.
- **Edit** — Click the edit icon, change fields, then **Update Link**.
- **Delete** — Click the delete icon and confirm.

## Design

- **Glass morphism** — Frosted panels with backdrop blur
- **Responsive grid** — Card layout adapts to screen size
- **Animations** — Hover and transition effects
- **Dark theme** — Dark background with semi-transparent surfaces
- **Typography** — Clear hierarchy and readability

## Tech Stack

- **React** 19.1.1
- **TypeScript** 5.8.3
- **Vite** 7.1.2
- **CSS3** (no UI framework)
- **Local Storage API** for persistence

## Browser Support

Chrome, Firefox, Safari, Edge (modern versions).

## Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request.

## License

MIT — see the LICENSE file for details.

## Acknowledgments

- React and TypeScript
- Vite for fast tooling
- Modern web design trends

---

Made with love by Andile Manganye
