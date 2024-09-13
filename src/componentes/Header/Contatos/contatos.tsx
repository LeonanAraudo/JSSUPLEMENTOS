import {
    Keyboard,
    LogOut,
    Settings,
    Instagram ,
    Phone,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { openSans } from "@/app/fonts"
export default function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <p >Contatos</p>
        </DropdownMenuTrigger>

        <DropdownMenuContent  style={{ width: '150px'}} className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Phone className="mr-2 h-4 w-4" />
              <a href="https://wa.me/559992332339" className={openSans.className}>Whatsapp</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Instagram  className="mr-2 h-4 w-4" />
              <a className={openSans.className} href="https://www.instagram.com/j.s_suplementos?igsh=dmZ4d2w4aGcydGo1">Instagram</a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span className={openSans.className}>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }