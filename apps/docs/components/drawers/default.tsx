'use client';

import { Button } from '@/components/ui/button';
import { Drawer } from 'base-vaul';

export function DrawerDefault() {
  return (
    <Drawer.Root>
      <Drawer.Trigger render={<Button size="lg" />}>Open Drawer</Drawer.Trigger>
      <Drawer.Portal className="z-50">
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 h-[80vh] flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div aria-hidden className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-gray-900">Drawer for React.</Drawer.Title>
              <p className="text-gray-600 mb-2">
                This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why
                and how it was built{' '}
                <a target="_blank" className="underline" href="https://emilkowal.ski/ui/building-a-drawer-component">
                  here
                </a>
                .
              </p>
              <p className="text-gray-600 mb-2">
                This one specifically is the most simplest setup you can have, just a simple drawer with a trigger.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
