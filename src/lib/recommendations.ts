const HISTORY_KEY = 'awkward_browsing_history';
const MAX_HISTORY_LENGTH = 10;

export const trackProductView = (productId: string) => {
  if (typeof window === 'undefined') return;

  try {
    const historyString = localStorage.getItem(HISTORY_KEY);
    let history: string[] = historyString ? JSON.parse(historyString) : [];

    // Remove existing entry to move it to the front
    history = history.filter(id => id !== productId);

    // Add new product to the front
    history.unshift(productId);

    // Trim history to max length
    if (history.length > MAX_HISTORY_LENGTH) {
      history = history.slice(0, MAX_HISTORY_LENGTH);
    }

    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error("Failed to update browsing history:", error);
  }
};

export const getBrowsingHistory = (): string[] => {
  if (typeof window === 'undefined') return [];

  try {
    const historyString = localStorage.getItem(HISTORY_KEY);
    return historyString ? JSON.parse(historyString) : [];
  } catch (error) {
    console.error("Failed to retrieve browsing history:", error);
    return [];
  }
};
