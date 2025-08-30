# Vehicle Selection Helper

A modern React application built with the latest technologies for vehicle selection and management.

## 🚀 Technologies Used

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Query (TanStack Query)** - Powerful server state management
- **Axios** - HTTP client for API requests
- **Create React App** - React development environment
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting and style consistency
- **React i18next** - Internationalization and multi-language support

## ✨ Features

- Modern, responsive UI with Tailwind CSS
- Type-safe development with TypeScript
- Efficient server state management with React Query
- Clean API integration with Axios
- Beautiful gradient backgrounds and modern design
- Example API integration demonstration
- **Multi-language support** for Ukrainian and English
- **Organized translations** split by pages and components
- **Language detection** and switching capabilities

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vehicle-selection-helper
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── App.tsx              # Main application component
├── index.tsx            # Application entry point with React Query provider
├── index.css            # Tailwind CSS imports
├── i18n/                # Internationalization configuration
│   ├── index.ts         # Main i18n setup
│   └── locales/         # Translation files
│       ├── en/          # English translations
│       │   ├── common.json
│       │   ├── home.json
│       │   └── app.json
│       └── uk/          # Ukrainian translations
│           ├── common.json
│           ├── home.json
│           └── app.json
├── components/          # Reusable components
│   └── LanguageSwitcher.tsx
├── hooks/               # Custom hooks
│   └── useLanguage.ts
└── types/               # TypeScript type definitions
    └── i18n.ts
```

## 🎨 Tailwind CSS

The project uses Tailwind CSS v3 with:
- Custom configuration in `tailwind.config.js`
- PostCSS configuration in `postcss.config.js`
- Utility-first approach for rapid UI development

## 🔄 React Query

React Query is configured for:
- Server state management
- Automatic caching and background updates
- Loading and error states
- Optimistic updates

## 📡 API Integration

Axios is configured for:
- HTTP requests
- Request/response interceptors
- Error handling
- Example integration with JSONPlaceholder API

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run lint` - Runs ESLint to check code quality
- `npm run lint:fix` - Automatically fixes ESLint issues
- `npm run lint:check` - Strict linting with no warnings allowed
- `npm run format` - Formats code with Prettier
- `npm run format:check` - Checks if code is properly formatted

## 🌟 Key Features Demonstrated

1. **Modern UI Design** - Beautiful gradients, shadows, and responsive layout
2. **API Integration** - Real-time data fetching with loading states
3. **Error Handling** - Graceful error display and user feedback
4. **Responsive Design** - Mobile-first approach with Tailwind CSS
5. **Type Safety** - Full TypeScript support for better development experience

## 🔧 Customization

### Adding New Components
Create new components in the `src/components/` directory and import them into `App.tsx`.

### Styling
Use Tailwind CSS utility classes for styling. Custom CSS can be added to `src/index.css`.

### API Calls
Add new API functions using Axios and integrate them with React Query hooks.

### Code Quality
- **ESLint**: Configure rules in `.eslintrc.js`
- **Prettier**: Configure formatting in `.prettierrc`
- Run `npm run lint:fix` to automatically fix issues
- Run `npm run format` to format all code

### Internationalization
- **Translation files**: Organized by pages (`home`, `app`) and common elements
- **Language switching**: Built-in language switcher component
- **Type safety**: Full TypeScript support for translation keys
- **Custom hooks**: `useLanguage` hook for easy language management
- **Auto-detection**: Browser language detection with localStorage persistence

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository. Do not hesitate.

