import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import PublicLayout from "./layout/PublicLayout";
import MateriPage from "./pages/materi";
import SubmissionStatusPage from "./pages/submission";

function App() {
  const [completed, setCompleted] = useState({
    preTest: true,

    p1_m1: true,
    p1_m2: true,
    p1_submission: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicLayout
              completed={completed}
              setCompleted={setCompleted}
            />
          }
        >
          <Route
            index
            element={<Navigate to="/materi/pertemuan-1/materi-1" replace />}
          />

          <Route
            path="materi/pertemuan-1/materi-1"
            element={<MateriPage />}
          />
          <Route
            path="materi/pertemuan-1/materi-2"
            element={<MateriPage />}
          />

          <Route
            path="submission/pertemuan-1"
            element={
              <SubmissionStatusPage
                submitted={completed.p1_submission}
                onSubmit={() =>
                  setCompleted((prev) => ({
                    ...prev,
                    p1_submission: true,
                  }))
                }
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 