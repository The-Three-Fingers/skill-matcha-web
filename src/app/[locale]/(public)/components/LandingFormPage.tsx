// Importing necessary modules and components
import { X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import LandingForm from './LandingForm';

export default function LandingFormPage({ onClose }: { onClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 p-10 text-slate-800 dark:text-neutral-800 lg:p-0">
      <div className="relative w-full max-w-xl rounded-lg bg-white p-8 shadow-lg lg:w-1/2">
        <Button
          size="icon"
          onClick={closeModal}
          className="absolute right-2 top-2 p-2 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </Button>
        <LandingForm />
      </div>
    </div>
  );
}
