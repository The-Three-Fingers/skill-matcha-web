'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { LogInButton } from '@/components/login-button';
import { LogOutButton } from '@/components/logout-button';
import { SignUpButton } from '@/components/sign-up-button';
import { useAuth } from '@/auth/AuthContext';
import { usePathname } from 'next/navigation';

type NavItem = {
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  onClick: () => void;
};

const NavbarButtons: React.FC = () => {
  const { user } = useAuth();
  const isAuthPage = ['/login', '/sign-up'].includes(usePathname());

  const navItems: NavItem[] = [
    { icon: Icons.Home, href: '/', onClick: () => console.log('home clicked') },
    { icon: Icons.Mail, onClick: () => console.log('mail clicked') },
  ];

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
        <DropdownMenuTrigger className="flex size-10 justify-center items-center">
          <Icons.AccountSettings className="size-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-purple-100 p-4">
          <DropdownMenuItem>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => console.log('profile settings clicked')}
            >
              Profile settings
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {user ? (
              <LogOutButton />
            ) : (
              !isAuthPage && (
                <>
                  <LogInButton />
                  <SignUpButton />
                </>
              )
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarButtons;
