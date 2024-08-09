import React from 'react';

import { Button } from '../ui/button';
import { Icons } from '../ui/icons';
import CardDetails from './CardDetails';
import CardHeaderWrapper from './CardHeaderWrapper';

// TODO нужно положить переменные в en
const MatchCard = () => {
  return (
    <div className="relative w-full pb-16">
      <CardHeaderWrapper />
      <CardDetails />
      <div className="shadow-t fixed bottom-0 left-0 flex h-16 w-full items-center justify-center gap-10 bg-white shadow-soft-outline">
        <Button className="w-56 gap-2 rounded-3xl">
          <div className="flex size-4 items-center justify-center">
            <Icons.PaperPlaneIcon className="size-full" />
          </div>
          Contact
        </Button>

        <Button className="w-56 gap-2 rounded-3xl">
          <div className="flex size-4 items-center justify-center">
            <Icons.HeartIcon className="size-full" />
          </div>
          Save
        </Button>
      </div>
    </div>
  );
};

export default MatchCard;
