import React, { createContext, ReactNode, useContext, useState } from 'react';

export type UserType = 'user' | 'driver' | null;

interface UserContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
  isDriver: boolean;
  isUser: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userType, setUserType] = useState<UserType>(null);

  const value: UserContextType = {
    userType,
    setUserType,
    isDriver: userType === 'driver',
    isUser: userType === 'user',
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}