import { useEffect, useMemo, useState } from "react";
import Card from "@/components/Card/Card";

type PlaygroundView = "button" | "input" | "card";

export default function Playground() {
  const views = useMemo(
    () =>
      [
        { key: "button", label: "Button" },
        { key: "input", label: "Input" },
        { key: "card", label: "Card" },
      ] as const,
    [],
  );

  const [active, setActive] = useState<PlaygroundView>("card");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <header style={{ display: "grid", gap: "0.75rem", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {views.map((item) => {
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  type="button"
                  style={{
                    padding: "0.5rem 0.75rem",
                    borderRadius: "999px",
                    border: isActive
                      ? "1px solid var(--primary-color)"
                      : "1px solid var(--border-color)",
                    background: isActive ? "var(--card-color)" : "transparent",
                    color: "var(--text-color)",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <section
        style={{
          border: "1px solid var(--border-color)",
          background: "var(--card-color)",
          borderRadius: "12px",
          padding: "1.5rem",
          display: "grid",
          gap: "1rem",
        }}
      >
        {active === "card" && (
          <>
            <div style={{ display: "grid", gap: "1rem" }}>
              <h3 style={{ margin: 0, fontSize: "1rem", opacity: 0.85 }}>Variants</h3>
              <div style={{ display: "grid", gap: "1rem", maxWidth: 620 }}>
                <Card variant="default">
                  <strong>Default</strong>
                  <div style={{ opacity: 0.85, marginTop: "0.5rem" }}>
                    Card default (background + border).
                  </div>
                </Card>

                <Card variant="outlined">
                  <strong>Outlined</strong>
                  <div style={{ opacity: 0.85, marginTop: "0.5rem" }}>Card Outlined.</div>
                </Card>

                <Card variant="surface">
                  <strong>Surface</strong>
                  <div style={{ opacity: 0.85, marginTop: "0.5rem" }}>Card surface.</div>
                </Card>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
