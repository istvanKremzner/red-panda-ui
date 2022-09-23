import { useCallback } from "react";

export const useThemeToggler = () => {
    const toggle = useCallback(() => document.documentElement.classList.toggle("dark"), []);

    return { toggle }
}