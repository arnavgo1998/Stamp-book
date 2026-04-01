import { useEffect } from 'react'

export function useStampNavigation(
  total: number,
  current: number,
  onNavigate: (index: number) => void,
  storyOpen: boolean,
  onToggleStory: () => void,
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !storyOpen) {
        e.preventDefault()
        onNavigate(Math.min(current + 1, total - 1))
      } else if (e.key === 'ArrowLeft' && !storyOpen) {
        e.preventDefault()
        onNavigate(Math.max(current - 1, 0))
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onToggleStory()
      } else if (e.key === 'Escape' && storyOpen) {
        onToggleStory()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [total, current, onNavigate, storyOpen, onToggleStory])
}
