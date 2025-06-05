# Movie App

A simple React Native app built with Expo to search for movies and TV shows using The Movie Database (TMDB) API. 
The app features tabbed navigation and a search interface with live results.

---

## Features

- Tab-based navigation: Movies, Search Results, and TV Shows
- Media search powered by TMDB API
- Search by title and media type (movie, TV shows)
- Responsive UI built with React Native Elements (@rneui/themed)

---

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- TMDB API key

### Installation

```bash
# Clone the repo
git clone https://github.com/yasu1218/movie-app.git
cd movie-app

# Install dependencies
npm install
# or
yarn install
```

---

## Environment Variables

Create a ".env" file in the root directory:

```env
TMDB_API_KEY=your_tmdb_api_key_here
```

---

## Project Structure

```
/src
  /components     # Reusable UI components
    /containers   # Logic wrappers 
    /forms        # Input form components
    /layout       # Loading spinner
    /listItems    # List item components
    /lists        # List components
    /navigation   # Top navigation
    /screens      # Main screens
    /stacks       # Stack components
  /config         # Config files for APIs
  /services       # APIs
  /utilities      # Helper methods
App.js            # Entry point
```

---

## Future Improvements

- Pagination
- Better image placeholders

---

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/)
- [Expo](https://expo.dev/)
- UI components by [React Native Elements](https://reactnativeelements.com/)
- **Special thanks to [@paulhklam1122](https://github.com/paulhklam1122)** for teaching React Native concepts and guiding the development of this app as part of a learning project.
