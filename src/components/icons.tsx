import type { SVGProps } from "react";

export const Icons = {
  shoppingBag: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  twitter: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-6.1 1.2-12.1 6.4-12.1 6.4-3.2-1.9-4.4-4.2-4.4-4.2s.9-.2 2.6-.9c-3.1-.9-5.3-4.1-5.3-4.1s.6.3 1.9.3c-2.4-1.1-4.1-3.1-4.1-3.1s1.3.8 2.9.8c-2.4-1.9-2.9-4.2-2.9-4.2s2.4 3.3 6.6 5.3c-.3-2.1.2-4 .5-4.5 1.5-1.7 4.5-.6 6.1 1.4.8-.2 1.9-.6 2.8-.9-.3.9-.9 1.8-1.7 2.4.9-.1 1.7-.4 1.7-.4z" />
    </svg>
  ),
  instagram: (props: SVGProps<SVGSVGElement>) => (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  facebook: (props: SVGProps<SVGSVGElement>) => (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  )
};
