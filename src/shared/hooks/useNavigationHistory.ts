'use client';

import { usePathname, useRouter } from 'next/navigation';
// 1. Imports
import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/shared/utils/constants';

// 2. Tipos/Interfaces
interface NavigationItem {
  path: string;
  title: string;
  timestamp: number;
  visited: boolean;
}

interface NavigationHistory {
  items: NavigationItem[];
  currentIndex: number;
  canGoBack: boolean;
  canGoForward: boolean;
}

// 3. Hook
export function useNavigationHistory() {
  // 4. Estados
  const [history, setHistory] = useState<NavigationHistory>({
    items: [],
    currentIndex: -1,
    canGoBack: false,
    canGoForward: false,
  });

  // 5. Hooks
  const pathname = usePathname();
  const router = useRouter();

  // 6. Lógica
  useEffect(() => {
    // Carregar histórico do localStorage
    const savedHistory = localStorage.getItem(STORAGE_KEYS.navigationHistory);
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setHistory(parsed);
      } catch {
        // Se falhar, começar com histórico vazio
        setHistory({
          items: [],
          currentIndex: -1,
          canGoBack: false,
          canGoForward: false,
        });
      }
    }
  }, []);

  useEffect(() => {
    // Salvar histórico no localStorage sempre que mudar
    localStorage.setItem(
      STORAGE_KEYS.navigationHistory,
      JSON.stringify(history)
    );
  }, [history]);

  const addToHistory = (path: string, title: string) => {
    setHistory((prev) => {
      const newItem: NavigationItem = {
        path,
        title,
        timestamp: Date.now(),
        visited: true,
      };

      // Se estamos no meio do histórico, remover itens futuros
      const items = prev.items.slice(0, prev.currentIndex + 1);

      // Adicionar novo item
      const newItems = [...items, newItem];

      return {
        items: newItems,
        currentIndex: newItems.length - 1,
        canGoBack: newItems.length > 1,
        canGoForward: false,
      };
    });
  };

  const goBack = () => {
    if (history.canGoBack && history.currentIndex > 0) {
      const newIndex = history.currentIndex - 1;
      const targetPath = history.items[newIndex].path;

      setHistory((prev) => ({
        ...prev,
        currentIndex: newIndex,
        canGoBack: newIndex > 0,
        canGoForward: newIndex < prev.items.length - 1,
      }));

      router.push(targetPath);
    }
  };

  const goForward = () => {
    if (
      history.canGoForward &&
      history.currentIndex < history.items.length - 1
    ) {
      const newIndex = history.currentIndex + 1;
      const targetPath = history.items[newIndex].path;

      setHistory((prev) => ({
        ...prev,
        currentIndex: newIndex,
        canGoBack: newIndex > 0,
        canGoForward: newIndex < prev.items.length - 1,
      }));

      router.push(targetPath);
    }
  };

  const clearHistory = () => {
    setHistory({
      items: [],
      currentIndex: -1,
      canGoBack: false,
      canGoForward: false,
    });
    localStorage.removeItem(STORAGE_KEYS.navigationHistory);
  };

  const getRecentPages = (limit: number = 5): NavigationItem[] => {
    return history.items
      .slice(-limit)
      .reverse()
      .filter((item) => item.path !== pathname);
  };

  const getCurrentPage = (): NavigationItem | null => {
    if (
      history.currentIndex >= 0 &&
      history.currentIndex < history.items.length
    ) {
      return history.items[history.currentIndex];
    }
    return null;
  };

  // 7. Retorno
  return {
    history: history.items,
    currentIndex: history.currentIndex,
    canGoBack: history.canGoBack,
    canGoForward: history.canGoForward,
    addToHistory,
    goBack,
    goForward,
    clearHistory,
    getRecentPages,
    getCurrentPage,
    currentPath: pathname,
  };
}

// 8. Hook para usar com breadcrumbs
export function useNavigationWithBreadcrumbs() {
  const navigation = useNavigationHistory();

  const navigateWithHistory = (path: string, title: string) => {
    navigation.addToHistory(path, title);
    // A navegação será feita pelo componente que chama esta função
  };

  const getBreadcrumbHistory = () => {
    const currentPage = navigation.getCurrentPage();
    const recentPages = navigation.getRecentPages(3);

    return {
      current: currentPage,
      recent: recentPages,
      canGoBack: navigation.canGoBack,
      canGoForward: navigation.canGoForward,
    };
  };

  return {
    ...navigation,
    navigateWithHistory,
    getBreadcrumbHistory,
  };
}
