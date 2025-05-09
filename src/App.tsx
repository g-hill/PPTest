import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider"

import DashboardPage from "./pages/dashboard";
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;
