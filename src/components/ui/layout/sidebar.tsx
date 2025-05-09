import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 border-r bg-background p-4">
      <h2 className="text-xl font-bold mb-6">PaidProjects</h2>

      <nav className="flex flex-col gap-2">
        <Link to="/">
          <Button
            variant={location.pathname === "/" ? "default" : "ghost"}
            className="w-full justify-start gap-2"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Button>
        </Link>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="account">
            <AccordionTrigger className="justify-start gap-2 [&>svg]:rotate-0 [&[data-state=open]>svg]:rotate-0">
              <User className="w-4 h-4" />
              Account
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1 pl-6">
              <Link to="/profile">
                <Button
                  variant={
                    location.pathname === "/profile" ? "default" : "ghost"
                  }
                  className="w-full justify-start text-sm"
                >
                  Profile
                </Button>
              </Link>
              <Link to="/settings">
                <Button
                  variant={
                    location.pathname === "/settings" ? "default" : "ghost"
                  }
                  className="w-full justify-start text-sm"
                >
                  Settings
                </Button>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
