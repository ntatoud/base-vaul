import { DrawerDemo } from '@/app/(home)/_partials/demo';
import { CodeSource } from '@/components/code-source';
import { CopyButton } from '@/components/copy-button';

export function Install() {
  return (
    <section className="flex flex-row gap-4 px-4 py-10 max-w-3xl mx-auto items-center">
      <div className="space-y-2">
        <h2 className="text-lg md:text-xl font-bold tracking-tight bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Get started
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-base text-muted-foreground">
            Install the styled, fully functional version from the registry.
          </p>
          <CopyButton variant="default" value="npx shadcn@latest add https://base-vaul.netlify.app/r/drawer.json">
            npx shadcn add drawer
          </CopyButton>
        </div>

        <div className="relative w-3xl py-2">
          <div className="flex flex-1 justify-center items-center h-20">
            <DrawerDemo />
          </div>

          <CodeSource filePath="/app/(home)/_partials/demo.tsx" />
        </div>
      </div>
    </section>
  );
}
