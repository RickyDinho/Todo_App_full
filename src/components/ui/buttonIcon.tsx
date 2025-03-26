import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonIcon({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  return (
    <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
      {open ? <ChevronUp /> : <ChevronDown />}
    </Button>
  );
}
