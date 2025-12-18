import { DrawerDemo } from '@/app/(home)/_partials/demo';
import { CodeSource } from '@/components/code-source';
import { CopyButton } from '@/components/copy-button';

export function Install() {
  return (
    <section id="demo-install" className="mx-auto w-full max-w-3xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-2">
          <h2 className="text-lg font-bold tracking-tight md:text-xl bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get started
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-muted-foreground">
              Install the styled, fully functional version from the registry.
            </p>

            <CopyButton
              variant="default"
              value="npx shadcn@latest add https://base-vaul.netlify.app/r/drawer.json"
              className="w-full sm:w-auto"
            >
              npx shadcn add drawer
            </CopyButton>
          </div>
        </div>

        {/* optional: keep right column empty on md if you want later actions */}
      </div>

      <div className="relative mt-6 w-full space-y-4">
        <div className="flex min-h-20 items-center justify-center">
          <DrawerDemo />
        </div>

        <CodeSource filePath="/app/(home)/_partials/demo.tsx" />
      </div>
    </section>
  );
}
