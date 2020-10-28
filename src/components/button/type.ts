import * as React from 'react';

export type propButton = {
  type: 'button' | 'submit' | 'reset';
  variant: 'success' | 'warning';
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  children: React.ReactChild;
};
