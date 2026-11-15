import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { TrainingPage } from "./pages/Training";
import { GalleryPage } from "./pages/Gallery";
import { AlbumDetailPage } from "./pages/AlbumDetail";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="galeria" element={<GalleryPage />} />
          <Route path="galeria/:id" element={<AlbumDetailPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}

export default App;
