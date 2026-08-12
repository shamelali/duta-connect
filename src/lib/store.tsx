"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  location: string;
  profession: string;
  initials: string;
  avatarColor: string;
  visa?: string;
};

type Toast = {
  id: number;
  message: string;
  type: "success" | "info" | "error";
};

type AppState = {
  user: SessionUser | null;
  login: (user: SessionUser) => void;
  logout: () => void;
  toasts: Toast[];
  pushToast: (message: string, type?: Toast["type"]) => void;
  dismissToast: (id: number) => void;
  saved: Record<string, string[]>; // category -> ids
  toggleSave: (category: string, id: string) => void;
  isSaved: (category: string, id: string) => boolean;
  registeredEvents: string[];
  toggleEventRegister: (id: string) => void;
  isRegistered: (id: string) => boolean;
  likes: Record<string, boolean>; // id -> liked
  toggleLike: (id: string) => void;
};

const AppContext = createContext<AppState | null>(null);

const STORAGE_KEY = "duta-connect-state-v1";

type Persisted = {
  user: SessionUser | null;
  saved: Record<string, string[]>;
  registeredEvents: string[];
  likes: Record<string, boolean>;
};

function loadState(): Partial<Persisted> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Persisted) : {};
  } catch {
    return {};
  }
}

const PALETTE = [
  "#0d9488",
  "#db2777",
  "#2563eb",
  "#9333ea",
  "#ea580c",
  "#0891b2",
  "#16a34a",
  "#4f46e5",
];

function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [saved, setSaved] = useState<Record<string, string[]>>({});
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = loadState();
    setUser(s.user ?? null);
    setSaved(s.saved ?? {});
    setRegisteredEvents(s.registeredEvents ?? []);
    setLikes(s.likes ?? {});
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const payload: Persisted = { user, saved, registeredEvents, likes };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore quota errors */
    }
  }, [user, saved, registeredEvents, likes, hydrated]);

  const pushToast = useCallback(
    (message: string, type: Toast["type"] = "success") => {
      const id = Date.now() + Math.floor(Math.random() * 1000);
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3500);
    },
    []
  );

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const login = useCallback(
    (u: SessionUser) => {
      const complete: SessionUser = {
        ...u,
        initials: u.initials || initialsFrom(u.name),
        avatarColor: u.avatarColor || PALETTE[Math.floor(Math.random() * PALETTE.length)],
        id: u.id || `u-${Date.now()}`,
      };
      setUser(complete);
      pushToast(`Selamat datang, ${complete.name}! 👋`, "success");
    },
    [pushToast]
  );

  const logout = useCallback(() => {
    setUser(null);
    pushToast("Anda telah keluar. Sampai jumpa!", "info");
  }, [pushToast]);

  const toggleSave = useCallback(
    (category: string, id: string) => {
      setSaved((prev) => {
        const list = prev[category] ?? [];
        const next = list.includes(id)
          ? list.filter((x) => x !== id)
          : [...list, id];
        const removed = list.includes(id);
        pushToast(
          removed ? "Dihapus dari tersimpan" : "Disimpan ke favorit 🔖",
          removed ? "info" : "success"
        );
        return { ...prev, [category]: next };
      });
    },
    [pushToast]
  );

  const isSaved = useCallback(
    (category: string, id: string) => (saved[category] ?? []).includes(id),
    [saved]
  );

  const toggleEventRegister = useCallback(
    (id: string) => {
      setRegisteredEvents((prev) => {
        if (prev.includes(id)) {
          pushToast("Pendaftaran acara dibatalkan", "info");
          return prev.filter((x) => x !== id);
        }
        pushToast("Berhasil terdaftar untuk acara! 🎉", "success");
        return [...prev, id];
      });
    },
    [pushToast]
  );

  const isRegistered = useCallback(
    (id: string) => registeredEvents.includes(id),
    [registeredEvents]
  );

  const toggleLike = useCallback(
    (id: string) => {
      setLikes((prev) => {
        const isLiked = !!prev[id];
        pushToast(isLiked ? "Batal suka" : "Anda menyukai ini 👍", "info");
        return { ...prev, [id]: !isLiked };
      });
    },
    [pushToast]
  );

  const value = useMemo<AppState>(
    () => ({
      user,
      login,
      logout,
      toasts,
      pushToast,
      dismissToast,
      saved,
      toggleSave,
      isSaved,
      registeredEvents,
      toggleEventRegister,
      isRegistered,
      likes,
      toggleLike,
    }),
    [
      user,
      login,
      logout,
      toasts,
      pushToast,
      dismissToast,
      saved,
      toggleSave,
      isSaved,
      registeredEvents,
      toggleEventRegister,
      isRegistered,
      likes,
      toggleLike,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
