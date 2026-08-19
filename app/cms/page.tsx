"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PhotoSlot {
  id: string;
  name: string;
  category: "brand" | "case-studies" | "testimonials";
  location: string;
  currentSrc: string;
  recommendedSize: string;
  aspectRatio: string;
  updatedAt: string;
}

const initialSlots: PhotoSlot[] = [
  {
    id: "michael-kaizer",
    name: "Michael Kaizer Avatar",
    category: "testimonials",
    location: "Case Studies / Testimonial section",
    currentSrc: "/assets/michael-kaizer.png",
    recommendedSize: "200 × 200 px",
    aspectRatio: "1:1 (Square)",
    updatedAt: "Default",
  },
  {
    id: "logo-dark",
    name: "Stoiclabs Primary Logo (Dark)",
    category: "brand",
    location: "Header Navigation & Footer across all pages",
    currentSrc: "/assets/logo.png",
    recommendedSize: "512 × 512 px (PNG / SVG)",
    aspectRatio: "1:1 Shield Icon",
    updatedAt: "Default",
  },
  {
    id: "logo-white",
    name: "Stoiclabs White / Inverted Logo",
    category: "brand",
    location: "Dark backgrounds & CTA banners",
    currentSrc: "/assets/logo-white.png",
    recommendedSize: "512 × 512 px (PNG / SVG)",
    aspectRatio: "1:1 Shield Icon",
    updatedAt: "Default",
  },
  {
    id: "medtech-portal",
    name: "MedTech Portal — Case Study Showcase",
    category: "case-studies",
    location: "Case Studies Page / Large Showcase 1",
    currentSrc: "/assets/michael-kaizer.png",
    recommendedSize: "1200 × 800 px",
    aspectRatio: "3:2 Horizontal",
    updatedAt: "Default",
  },
  {
    id: "aura-protocol",
    name: "Aura Blockchain Protocol Showcase",
    category: "case-studies",
    location: "Case Studies Page / Large Showcase 2",
    currentSrc: "/assets/michael-kaizer.png",
    recommendedSize: "1200 × 800 px",
    aspectRatio: "3:2 Horizontal",
    updatedAt: "Default",
  },
];

export default function CMSPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [slots, setSlots] = useState<PhotoSlot[]>(initialSlots);
  const [previewModalImg, setPreviewModalImg] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("stoiclabs_cms_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === "admin" && password === "stoiclabs") {
      sessionStorage.setItem("stoiclabs_cms_auth", "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password. (Demo: admin / stoiclabs)");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("stoiclabs_cms_auth");
    setIsAuthenticated(false);
  };

  const handleFileUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const newSrc = event.target?.result as string;
      setSlots((prev) =>
        prev.map((s) =>
          s.id === id
            ? { ...s, currentSrc: newSrc, updatedAt: "Just now (Uploaded)" }
            : s
        )
      );
      showNotification(`Updated photo for ${id}`);
    };
    reader.readAsDataURL(file);
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredSlots =
    activeTab === "all"
      ? slots
      : slots.filter((slot) => slot.category === activeTab);

  if (!isAuthenticated) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", padding: "40px 20px" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "20px", padding: "44px 40px", width: "100%", maxWidth: "440px", boxShadow: "0 20px 50px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "22px", color: "#010205", marginBottom: "12px" }}>
              <img src="/assets/logo.png" alt="Stoiclabs" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
              <span>STOICLABS</span>
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#010205", marginBottom: "6px" }}>Photo CMS Login</h2>
            <p style={{ fontSize: "14px", color: "#6B7280" }}>Sign in to manage website photos & brand media</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1F2937", marginBottom: "8px" }}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                style={{ width: "100%", height: "48px", padding: "0 16px", border: "1.5px solid #E5E7EB", borderRadius: "14px", fontSize: "14px", outline: "none" }}
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1F2937", marginBottom: "8px" }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{ width: "100%", height: "48px", padding: "0 16px", border: "1.5px solid #E5E7EB", borderRadius: "14px", fontSize: "14px", outline: "none" }}
              />
            </div>

            {loginError && (
              <div style={{ padding: "10px 14px", background: "#FEE2E2", color: "#991B1B", borderRadius: "10px", fontSize: "13px", marginBottom: "16px" }}>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              style={{ width: "100%", height: "50px", background: "#010205", color: "#FFFFFF", border: "none", borderRadius: "999px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}
            >
              Sign In to Dashboard &rarr;
            </button>
          </form>

          <div style={{ marginTop: "24px", padding: "12px 16px", background: "#F3F4F6", borderRadius: "14px", fontSize: "12px", color: "#6B7280", textAlign: "center" }}>
            Default credentials: <strong>admin</strong> / <strong>stoiclabs</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "80vh", padding: "40px 24px 80px", maxWidth: "1280px", margin: "0 auto" }}>
      {/* CMS Header */}
      <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "20px", padding: "36px", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#99CF63", color: "#010205", fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px", textTransform: "uppercase", marginBottom: "12px" }}>
            LIVE PHOTO CMS
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#010205", marginBottom: "8px" }}>Website Photo Management</h1>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "600px" }}>
            Manage and update images, brand assets, and case study visuals without changing code.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/case-study" className="btn btn--outline" style={{ padding: "10px 20px", fontSize: "13px" }}>
            View Live Site &rarr;
          </Link>
          <button onClick={handleLogout} className="btn btn--outline" style={{ padding: "10px 20px", fontSize: "13px", color: "#EF4444", borderColor: "#FCA5A5" }}>
            Logout
          </button>
        </div>
      </div>

      {notification && (
        <div style={{ position: "fixed", bottom: "30px", right: "30px", background: "#010205", color: "#FFFFFF", padding: "14px 24px", borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", zIndex: 1000, fontSize: "14px", fontWeight: 600 }}>
          ✓ {notification}
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "28px", borderBottom: "1px solid #E5E7EB", paddingBottom: "14px" }}>
        {[
          { key: "all", label: "All Photos" },
          { key: "brand", label: "Brand & Logos" },
          { key: "case-studies", label: "Case Studies" },
          { key: "testimonials", label: "Testimonials" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              background: activeTab === tab.key ? "#010205" : "transparent",
              color: activeTab === tab.key ? "#FFFFFF" : "#6B7280",
              border: "none",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Photo Cards Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "28px" }}>
        {filteredSlots.map((slot) => (
          <div key={slot.id} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ width: "100%", height: "200px", background: "#F3F4F6", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={slot.currentSrc}
                alt={slot.name}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
              <button
                onClick={() => setPreviewModalImg(slot.currentSrc)}
                style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(1,2,5,0.7)", color: "#FFFFFF", border: "none", borderRadius: "999px", padding: "6px 12px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}
              >
                Preview Full
              </button>
            </div>
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#010205", marginBottom: "6px" }}>{slot.name}</h3>
              <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "16px" }}>{slot.location}</p>
              
              <div style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "18px", background: "#F9FAFB", padding: "10px 14px", borderRadius: "10px" }}>
                <div><strong>Recommended:</strong> {slot.recommendedSize}</div>
                <div><strong>Aspect:</strong> {slot.aspectRatio}</div>
              </div>

              <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                <label style={{ flex: 1, height: "42px", background: "#010205", color: "#FFFFFF", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                  <span>Upload New</span>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileUpload(slot.id, e)}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewModalImg && (
        <div
          onClick={() => setPreviewModalImg(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "24px" }}
        >
          <div style={{ maxWidth: "800px", maxHeight: "80vh", background: "#FFFFFF", borderRadius: "20px", padding: "20px", position: "relative" }}>
            <img src={previewModalImg} alt="Preview" style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }} />
            <button
              onClick={() => setPreviewModalImg(null)}
              style={{ position: "absolute", top: "12px", right: "12px", background: "#010205", color: "#FFFFFF", border: "none", borderRadius: "999px", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px" }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
