import { useCallback, useMemo, useState } from "react";

export const useThemeToggler = () => {
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))
    const toggle = useCallback(() => {
        document.documentElement.classList.toggle("dark")
        setIsDark(!isDark)
    }, []);

    return { isDark, toggle }
}