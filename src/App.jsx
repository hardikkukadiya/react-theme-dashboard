import { Suspense, useState, useEffect, startTransition } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Auth } from './layouts';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setIsLoaded(true); // Trigger re-render in a transition
    });
  }, []);

  return (
    isLoaded && (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      </Suspense>
    )
  );
}

export default App;
