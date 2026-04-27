import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto mb-5 flex origin-bottom h-full max-h-14">
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-white/[0.04] backdrop-blur-xl [border:1px_solid_rgba(255,255,255,.12)] [box-shadow:0_-20px_60px_-20px_rgba(255,255,255,.18)_inset,0_20px_60px_-20px_rgba(0,0,0,.6)] transform-gpu">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-6 my-auto bg-white/15" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                <Icons.email className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
