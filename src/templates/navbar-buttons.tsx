'use client';

import { MessagesSquare, SearchCheck, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { LogOutButton } from '@/components/logout-button';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useProfile } from '@/providers/ProfileContext';

type NavItem = {
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
};

const NavbarButtons: React.FC = () => {
  const { profile } = useProfile();

  const navItems: NavItem[] = [
    { icon: SearchCheck, href: '/matches' },
    { icon: MessagesSquare, href: '/messages' },
  ];

  const t = useTranslations('Navigation');

  return (
    <div className="flex gap-2">
      {navItems.map(({ icon: Icon, href }) => (
        <Button
          key={href}
          size="icon"
          className="flex size-10 justify-center"
          variant="ghost"
        >
          {href ? (
            <Link href={href}>
              <Icon className="size-5" />
            </Link>
          ) : (
            <Icon className="size-5" />
          )}
        </Button>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <UserRound className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {profile && (
            <DropdownMenuItem>
              <Link href="/settings" className="w-full">
                {t('settings')}
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <LogOutButton className="w-full text-left" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarButtons;
