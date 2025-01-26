import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center h-full min-h-[200px]">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary-purple/20 animate-ping" />
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-primary-purple animate-spin" />
      </div>
    </div>
  );
}; 