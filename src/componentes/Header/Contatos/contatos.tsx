import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    Instagram ,
    Phone,
    UserPlus,
    Users,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
export default function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <p>Contatos</p>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Phone className="mr-2 h-4 w-4" />
              <a href="https://wa.me/559992332339">Whatsapp</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Instagram  className="mr-2 h-4 w-4" />
              <a href="https://www.instagram.com/j.s_suplementos?igsh=dmZ4d2w4aGcydGo1">Instagram</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }