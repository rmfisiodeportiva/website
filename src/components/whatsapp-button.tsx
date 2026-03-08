import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
};

type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className ?? "h-4 w-4 shrink-0"}
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.62 2 2.2 6.41 2.2 11.84c0 1.74.45 3.44 1.31 4.95L2 22l5.36-1.4a9.86 9.86 0 0 0 4.68 1.19h.01c5.42 0 9.84-4.41 9.84-9.84 0-2.63-1.02-5.11-2.84-7.04Zm-7.01 15.2h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.51 3.67-8.18 8.19-8.18 2.18 0 4.24.84 5.78 2.4a8.11 8.11 0 0 1 2.39 5.79c0 4.51-3.68 8.19-8.1 8.19Zm4.49-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.25 1.02.4 1.37.52.57.18 1.09.16 1.5.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function WhatsAppButton({
  href,
  children,
  className,
  iconClassName,
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
      <WhatsAppIcon className={iconClassName} />
    </a>
  );
}
