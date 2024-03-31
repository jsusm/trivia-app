import { cx } from "class-variance-authority";
import "./button.css";
import { forwardRef, type ComponentProps } from "react";

export const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  (props, ref) => (
    <button
      ref={ref}
      className={cx(
        "brutal-shadow flex items-center rounded-xl border-2 border-stone-900 bg-lime-200 px-8 py-2 font-mono disabled:cursor-not-allowed disabled:bg-lime-50 disabled:text-stone-400",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  ),
);
