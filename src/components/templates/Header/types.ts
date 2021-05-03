import React from 'react';
import { ToggleModalFunc } from '../../../types/global';

export interface UserInfoProps {
  modalToggle: ToggleModalFunc;
  isModalOpen: boolean;
}

export interface HeaderTemplateTypes {
  children: React.ReactNode;
}
