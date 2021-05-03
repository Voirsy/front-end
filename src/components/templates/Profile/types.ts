import React from 'react';

export interface NavData {
  to: string;
  icon: JSX.Element;
  label: string;
  viewTitle: string;
}

export interface ProfileTemplateProps {
  children: React.ReactNode;
}
