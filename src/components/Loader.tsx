import { cx } from "class-variance-authority";
import { useEffect, useState, type ComponentProps } from "react";

interface LoaderProps {
  text: string;
  time: number;
}

export function Loader({
  time,
  text,
  ...props
}: LoaderProps & ComponentProps<"span">) {
  const [slice, setSlice] = useState(text.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSlice = slice === text.length ? 0 : slice + 1;

      setSlice(newSlice);
    }, time);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <span className={cx("font-hero", props.className)}>
      {text.slice(0, slice)}
    </span>
  );
}
