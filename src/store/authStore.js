import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  signIn: async (email, password) => {
    set({ loading: true });

    try {
      // Temporary local authentication for the capstone.
      // This can later be replaced with Supabase authentication.

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = {
        email,
      };

      localStorage.setItem("addisEatsUser", "true");
      localStorage.setItem("addisEatsUserEmail", email);

      set({
        user,
        isAuthenticated: true,
        loading: false,
      });

      return {
        success: true,
        user,
      };
    } catch (error) {
      console.error("Sign in error:", error);

      set({
        loading: false,
      });

      return {
        success: false,
        error: "Unable to sign in. Please try again.",
      };
    }
  },

  signOut: () => {
    localStorage.removeItem("addisEatsUser");
    localStorage.removeItem("addisEatsUserEmail");

    set({
      user: null,
      isAuthenticated: false,
    });
  },

  initializeAuth: () => {
    const authenticated = localStorage.getItem("addisEatsUser") === "true";

    const email = localStorage.getItem("addisEatsUserEmail");

    if (authenticated) {
      set({
        user: email ? { email } : null,
        isAuthenticated: true,
      });
    } else {
      set({
        user: null,
        isAuthenticated: false,
      });
    }
  },
}));
