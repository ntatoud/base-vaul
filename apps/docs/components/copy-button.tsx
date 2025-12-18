'use client';

import * as React from 'react';
import { CheckIcon, TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function CopyButton({
  value,
  variant = 'ghost',
  tooltip = 'Copy to Clipboard',
  children,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
  tooltip?: string;
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            data-slot="copy-button"
            data-copied={hasCopied}
            size="sm"
            variant={variant}
            onClick={() => {
              navigator.clipboard.writeText(value);
              setHasCopied(true);
            }}
            {...props}
          >
            <span className="sr-only">Copy</span>
            {hasCopied ? <CheckIcon /> : <TerminalIcon />}
            {children}
          </Button>
        }
      />

      <TooltipContent>{hasCopied ? 'Copied' : tooltip}</TooltipContent>
    </Tooltip>
  );
}
