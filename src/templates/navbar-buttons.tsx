'use client';

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
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icons.AccountSettings className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
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
