> **Note**
> This repository is a port of the original **[Vaul](https://github.com/emilkowalski/vaul)** library by [Emil Kowalski](https://emilkowal.ski), migrated from `radix-ui` to `base-ui`.

## Purpose

The primary goal of this repository is to provide a `base-ui` equivalent of Vaul while preserving the original API and behavior as closely as possible.

This port intentionally minimizes changes in order to:

- Reduce migration friction for existing Vaul users
- Keep parity with the upstream project
- Establish a stable baseline before introducing enhancements or divergence

## Quick start

### Installation

```bash
npm install base-vaul
# or
pnpm add base-vaul
# or
yarn add base-vaul
```

### Basic usage

```tsx
import { Drawer } from 'base-vaul';

export function Example() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open drawer</Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Title>Drawer title</Drawer.Title>
          <Drawer.Description>Drawer description</Drawer.Description>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```

The API mirrors the original Vaul implementation as closely as possible, with the main differences coming from the underlying `base-ui` primitives.

## Differences from the original Vaul

### `render` instead of `asChild`

Since `base-ui` does not support `asChild`, components that relied on this pattern in `radix-ui` now expose a `render` prop instead.

**Original (Radix / Vaul):**

```tsx
<Drawer.Trigger asChild>
  <button>Open drawer</button>
</Drawer.Trigger>
```

**This port (Base UI):**

```tsx
<Drawer.Trigger render={<button {...props}>Open drawer</button>} />
```

## Roadmap

Planned next steps include:

- Writing proper documentation (usage, API, and migration notes)
- Solidifying the project structure with a well-defined monorepo setup
- Upgrading development dependencies and expanding test coverage
- Ongoing maintenance, bug fixes, and alignment with upstream changes where relevant
