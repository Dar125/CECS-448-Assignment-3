import PlaceholderScreen from "../components/PlaceholderScreen.jsx";

function ResourcesPage() {
  return (
    <PlaceholderScreen
      eyebrow="Support screen"
      title="Resources"
      description="Placeholder for academic, financial, personal, first-generation, and emergency support resources."
      nextActions={[
        { label: "Back to Dashboard", to: "/dashboard" },
        { label: "Review Alerts", to: "/alerts" },
      ]}
    />
  );
}

export default ResourcesPage;
