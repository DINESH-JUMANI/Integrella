# Digital Lead Generation - Robot Avatar Creator

A mobile-first web application that allows event attendees to generate personalized robot avatars by selecting traits, in exchange for their contact details. Built with React and Vite.

## Features

- Mobile-friendly web app accessible via QR code
- Contact details capture (Name, Email, Company, Position)
- Avatar customization options:
  - Gender (Male/Female)
  - Hair color and length
  - Eye color
  - Glasses
  - Favorite color
- Social media sharing (LinkedIn, Twitter)
- Responsive and interactive UI
- Theme customization support
- Clean and modular code structure

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd digital-lead-generation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── theme/            # Theme configuration
├── routes/           # Route configuration
└── assets/          # Static assets
```

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing
- [Styled Components](https://styled-components.com/) - Styling
- [React Share](https://github.com/nygardk/react-share) - Social media sharing
- [React Webcam](https://github.com/mozmorris/react-webcam) - Camera integration

## Future Enhancements

- Integration with avatar generation API
- HubSpot integration for lead capture
- Enhanced social sharing features
- Additional avatar customization options
- Analytics integration

## License

This project is licensed under the MIT License.
