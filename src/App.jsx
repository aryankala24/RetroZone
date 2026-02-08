import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages and components
import HeroSection from "./components/HeroSection";
import RecommendedSection from "./components/RecommendedSection";
import RetroPicksPage from "./components/RetroPicksPage";
import ConsolesPage from "./components/ConsolesPage";
import ReviewPage from "./components/ReviewPage"; // Import ReviewPage

// Homepage layout
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendedSection />
      <Footer />
    </>
  );
}

// Generic layout wrapper
function PageWithLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

// Wrapper for ReviewPage to read URL param and pass to ReviewPage
function ReviewPageWrapper() {
  const { gameId } = useParams();

  // We'll pass gameId as prop to ReviewPage
  return <ReviewPage gameId={gameId} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dynamic Review Page */}
        <Route
          path="/review/:gameId"
          element={
            <PageWithLayout>
              <ReviewPageWrapper />
            </PageWithLayout>
          }
        />

        <Route
          path="/retro-picks"
          element={
            <PageWithLayout>
              <RetroPicksPage />
            </PageWithLayout>
          }
        />

        <Route
          path="/consoles"
          element={
            <PageWithLayout>
              <ConsolesPage />
            </PageWithLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
