import { ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SheetWrapperProps {
  children: ReactNode;
}

export function SheetWrapper({ children }: SheetWrapperProps) {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button className="cursor-pointer" variant="ghost" size="icon-sm">
          <ListFilter />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Charity Filters</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 p-4 overflow-auto">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}