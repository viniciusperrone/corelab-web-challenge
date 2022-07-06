import { ReactNode } from 'react';

type ChildrenComponentProps = {
  children: ReactNode;
};

export function Container({ children }: ChildrenComponentProps) {
  return (
    <div className="ml-[12.2vw] mr-[25.5vw] min-h-screen bg-white flex flex-col">
      {children}
    </div>
  );
}
