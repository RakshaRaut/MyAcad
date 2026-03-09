import { useState } from "react";
import AdminPortal from "./components/admin/AdminPortal";
import LandingView from "./components/landing/LandingView";
import StudentPortal from "./components/student/StudentPortal";
import { adminStudents, studentData } from "./data/portalData";
import "./App.css";

export default function App() {
  const [view, setView] = useState("landing");
  const [viewHistory, setViewHistory] = useState([]);
  const [page, setPage] = useState("profile");
  const [adminPage, setAdminPage] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const navigateTo = (nextView) => {
    setView((currentView) => {
      if (currentView === nextView) {
        return currentView;
      }

      setViewHistory((history) => [...history, currentView]);
      return nextView;
    });
  };

  const goBack = () => {
    setViewHistory((history) => {
      if (history.length === 0) {
        setView("landing");
        return history;
      }

      const nextHistory = [...history];
      const previousView = nextHistory.pop();
      setView(previousView || "landing");
      return nextHistory;
    });
  };

  const openStudentView = () => navigateTo("student");
  const openAdminView = () => navigateTo("admin");
  const goHome = () => {
    setView("landing");
    setViewHistory([]);
  };

  const viewStudentProfileFromAdmin = () => {
    navigateTo("student");
    setPage("profile");
  };

  const previousView = viewHistory[viewHistory.length - 1] || "landing";
  const backTargetLabel =
    previousView === "admin" ? "Admin Portal" : previousView === "student" ? "Student Portal" : "Home";

  return (
    <>
      {view === "landing" && <LandingView onOpenAdmin={openAdminView} onOpenStudent={openStudentView} />}

      {view === "student" && (
        <StudentPortal
          studentData={studentData}
          page={page}
          setPage={setPage}
          onBack={goBack}
          backLabel={backTargetLabel}
          onHome={goHome}
        />
      )}

      {view === "admin" && (
        <AdminPortal
          adminPage={adminPage}
          setAdminPage={setAdminPage}
          onBack={goBack}
          backLabel={backTargetLabel}
          onHome={goHome}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          adminStudents={adminStudents}
          onViewStudentProfile={viewStudentProfileFromAdmin}
        />
      )}
    </>
  );
}
