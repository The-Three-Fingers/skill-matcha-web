'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

const NavbarButtons = () => {
  const onClickHome = () => {
    console.log('home clicked');
    <Link href="/" />;
  };

  const onClickMail = () => {
    console.log('mail clicked');
    <Link href="/mail" />;
  };

  const onClickSettings = () => {
    console.log('settings clicked');
    <Link href="/settings" />;
  };

  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        className="flex size-10 justify-center"
        variant="ghost"
        onClick={onClickHome}
      >
        <Icons.Home className="size-5" />
      </Button>

      <Button
        size="icon"
        className="flex justify-center"
        variant="ghost"
        onClick={onClickMail}
      >
        <Icons.Mail className="size-5" />
      </Button>

      <Button
        size="icon"
        className="flex justify-center"
        variant="ghost"
        onClick={onClickSettings}
      >
        <Icons.AccountSettings className="size-5" />
      </Button>
    </div>
  );
};

export default NavbarButtons;
