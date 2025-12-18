'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, PlayCircle, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-4">
        <Badge variant="secondary" size="lg">
          <Sparkles />
          Base-UI Powered
        </Badge>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            base-vaul
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A smooth, unstyled drawer component for React. Built on top of Base UI.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button render={<Link href="#demo-install" />}>
            <PlayCircle />
            Try it out
          </Button>

          <Button
            variant="secondary"
            nativeButton={false}
            render={
              <Link href="/docs">
                <BookOpen />
                Documentation
              </Link>
            }
          ></Button>
        </div>
      </div>
    </section>
  );
}
