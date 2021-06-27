import React from 'react';
import { RootStore } from './root-store';

export const StoresContext = React.createContext<RootStore>(undefined as any);
