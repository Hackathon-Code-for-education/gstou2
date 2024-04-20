import { useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

type IUseSignOut = () => void;

export function useSignOut(): IUseSignOut {
  const queryClient = useQueryClient();

  const onSignOut = useCallback(() => {
    queryClient.setQueryData(['user'], null);
    localStorage.removeItem('token');
  }, [queryClient]);

  return onSignOut;
}
