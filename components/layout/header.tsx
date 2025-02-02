import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { Breadcrumbs } from '../breadcrumbs';
import SearchInput from '../search-input';
import { UserNav } from './user-nav';
import ThemeToggle from './ThemeToggle/theme-toggle';
import { RefreshCcw, Bell } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">Negozio</label>
        <Select>
          <SelectTrigger className="w-[200px] border rounded-md px-2 py-1 text-sm">
            <SelectValue placeholder="Manue, Verona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manue-verona">
              <div className="flex items-center gap-2">
                <img
                  src="/path/to/image.jpg"
                  alt="Manue"
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Manue</p>
                  <p className="text-xs text-gray-500">Verona</p>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-1">
          Sincronizza <RefreshCcw className="size-4" />
        </button>
        <UserNav />
        <Bell className="size-5" />
      </div>
    </header>
  );
}
