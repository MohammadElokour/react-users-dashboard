import { createContext } from "react";

interface LayoutContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextValue>({
  open: false,
  setOpen() {},
});
