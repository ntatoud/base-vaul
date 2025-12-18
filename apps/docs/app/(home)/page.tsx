import { Hero } from '@/app/(home)/_partials/hero';
import { Install } from '@/app/(home)/_partials/install';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Install />
      <footer className=" py-4 3xl:fixed:bg-transparent dark:bg-transparent">
        <div className="container-wrapper px-4 xl:px-6">
          <div className="flex h-(--footer-height) items-center justify-between">
            <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
              Built by{' '}
              <a
                href="https://github.com/ntatoud"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Noé Tatoud
              </a>
              . The source code is available on{' '}
              <a
                href="https://github.com/ntatoud/base-vaul"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              . Inspired by{' '}
              <a
                href="https://vaul.emilkowal.ski/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                vaul
              </a>{' '}
              and{' '}
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                shadcn
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
