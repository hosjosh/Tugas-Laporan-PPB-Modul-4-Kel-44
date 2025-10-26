import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import HomePage from './pages/HomePage'
import RecipeList from './pages/RecipeList'
import RecipeDetail from './pages/RecipeDetail'
import Profile from './pages/Profile'
import ProfilePage from './pages/ProfilePage'
import MakananPage from './pages/MakananPage'
import MinumanPage from './pages/MinumanPage'
import FavoritePage from './pages/FavoritePage'
import DesktopNavbar from './components/navbar/DesktopNavbar'
import MobileNavbar from './components/navbar/MobileNavbar'
import './index.css'
import PWABadge from './PWABadge'

function AppRoot() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <DesktopNavbar />
        <MobileNavbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resep" element={<RecipeList />} />
            <Route path="/resep/:id" element={<RecipeDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/makanan" element={<MakananPage />} />
            <Route path="/minuman" element={<MinumanPage />} />
            <Route path="/favorit" element={<FavoritePage />} />
          </Routes>
        </main>
        <PWABadge />
      </div>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>
)