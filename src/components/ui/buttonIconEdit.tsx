import { Pen } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonIconEdit({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  return (
    <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
      <Pen />
    </Button>
  );
}
