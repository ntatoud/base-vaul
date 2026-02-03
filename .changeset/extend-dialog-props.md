---
"base-vaul": minor
---

Extend DialogProps from DialogPrimitive.Root.Props to inherit base-ui's dialog properties. This removes duplicate props (children, open, modal, defaultOpen, onAnimationEnd) that are now inherited from the base component. Also normalizes modal prop handling to support base-ui's "trap-focus" value alongside boolean values.
