import { Dialog } from '@base-ui/react';
import { ContentProps, DialogProps, HandleProps } from 'base-vaul';

type OmitBaseHtmlProps<TProps, TElement extends keyof React.JSX.IntrinsicElements> = Omit<
  TProps,
  keyof React.ComponentProps<TElement>
>;

export type DialogRootProps = DialogProps;
export type DialogContentProps = OmitBaseHtmlProps<ContentProps, 'div'>;
export type DialogTriggerProps = OmitBaseHtmlProps<Dialog.Trigger.Props, 'button'>;
export type DialogPortalProps = OmitBaseHtmlProps<Dialog.Portal.Props, 'div'>;
export type DialogOverlayProps = OmitBaseHtmlProps<Dialog.Backdrop.Props, 'div'>;
export type DialogCloseProps = OmitBaseHtmlProps<Dialog.Close.Props, 'button'>;
export type DialogTitleProps = OmitBaseHtmlProps<Dialog.Title.Props, 'div'>;
export type DialogDescriptionProps = OmitBaseHtmlProps<Dialog.Description.Props, 'div'>;
export type DialogHandleProps = OmitBaseHtmlProps<HandleProps, 'div'>;
