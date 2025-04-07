import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  " leading-[1.5rem] shadow-sm w-fit transition-all duration-200 cursor-pointer disabled:cursor-context-menu flex items-center gap-[0.5rem]",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-white hover:bg-shade2 font-semibold rounded-full",
        secondary:
          "bg-silver text-black hover:bg-shade6 hover:text-white font-medium rounded-full",
        tertiary: "bg-white/10 text-primary hover:text-shade2 font-semibold",
        square: "bg-shade2 text-white hover:bg-shade7 font-semibold",
      },
      size: {
        big: "py-2 px-6 md:px8 md:py-2.5 text-[1rem]",
        normal: "py-[0.625rem] px-[2rem] text-[1rem]",
        medium: "py-[0.25rem] px-[1.25rem] text-[1rem]",
        small: "h-[1.5rem] text-[1rem]",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "normal",
    },
  }
);

type IconProps = {
  intent?: string | null;
  disabled?: boolean;
  type?: "sun" | "arrow" | "plus" | "search";
};

export function Icon({ type }: IconProps) {
  if (type === "sun") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L12 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L12 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12L19 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L2 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.071 4.92893L16.9497 7.05025"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.05003 16.95L4.92871 19.0713"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.92897 4.92893L7.05029 7.05025"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.9495 16.95L19.0708 19.0713"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.33331L8 12.6666"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6667 8L3.33341 8"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "search") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 16.958L21.5 21.958"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return null;
}
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icontype?: "plus" | "arrow" | "search" | "sun";
  };

export default function Button({
  intent,
  size,
  children,
  className,
  icontype,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        buttonVariants({
          intent,
          size,
        }),
        className,
        "flex items-center gap-[0.5rem]"
      )}
      {...props}
    >
      {icontype === "plus" && (
        <Icon type="plus" intent={intent} disabled={props.disabled} />
      )}
      {icontype === "search" && (
        <Icon type="search" intent={intent} disabled={props.disabled} />
      )}
      {children}
      {icontype === "sun" && (
        <Icon type="sun" intent={intent} disabled={props.disabled} />
      )}
      {icontype === "arrow" && (
        <Icon type="arrow" intent={intent} disabled={props.disabled} />
      )}
    </button>
  );
}
