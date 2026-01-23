'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Determine current theme reliably (resolvedTheme is best when theme === "system")
  const current = (theme === 'system' ? resolvedTheme : theme) ?? 'light';
  const isDark = current === 'dark';

  const toggleTheme = React.useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn('relative')}
    >
      {/* Sun (visible in light) */}
      <Sun
        className={cn(
          'h-[1.2rem] w-[1.2rem] transition-all',
          isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
        )}
      />
      {/* Moon (visible in dark) */}
      <Moon
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] transition-all',
          isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0',
        )}
      />
      <span className="sr-only">{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </Button>
  );
}
