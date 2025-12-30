import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import MateriPage from "./pages/materi";
import SubmissionStatusPage from "./pages/submission";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          
          {/* DEFAULT PAGE */}
          <Route
            index
            element={<Navigate to="/materi/pertemuan-1/materi-1" replace />}
          />

          {/* MATERI */}
          <Route
            path="materi/pertemuan-1/materi-1"
            element={<MateriPage />}
          />
          <Route
            path="materi/pertemuan-1/materi-2"
            element={<MateriPage />}
          />

          {/* SUBMISSION */}
          <Route
            path="submission/pertemuan-1"
            element={<SubmissionStatusPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;