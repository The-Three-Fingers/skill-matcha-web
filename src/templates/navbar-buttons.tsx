'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { LogOutButton } from '@/components/logout-button';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

type NavItem = {
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  onClick: () => void;
};

const NavbarButtons: React.FC = () => {
  const navItems: NavItem[] = [
    { icon: Icons.Home, href: '/', onClick: () => console.log('home clicked') },
    { icon: Icons.Mail, onClick: () => console.log('mail clicked') },
  ];

  const t = useTranslations('Navigation');

  return (
    <div className="flex gap-2">
      {navItems.map(({ icon: Icon, href, onClick }) => (
        <Button
          key={href || 'mail'}
          size="icon"
          className="flex size-10 justify-center"
          variant="ghost"
          onClick={onClick}
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
        <DropdownMenuTrigger className="flex size-10 items-center justify-center">
          <Icons.AccountSettings className="size-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-50 w-56 bg-purple-100 p-4">
          <DropdownMenuItem>
            <Link href="/settings">{t('settings')}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarButtons;