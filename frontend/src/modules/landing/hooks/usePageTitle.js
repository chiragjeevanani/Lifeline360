import { useEffect } from 'react';

// Sets the document title for a page.
export function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} — Lifeline 360`;
  }, [title]);
}
