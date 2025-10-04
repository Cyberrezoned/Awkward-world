'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';

export function FirebaseErrorListener() {
    const { toast } = useToast();

    useEffect(() => {
        const handlePermissionError = (error: Error) => {
            console.error(error); // Log the full error for debugging
            toast({
                variant: 'destructive',
                title: 'Permission Denied',
                description: "You don't have permission to perform this action. Check the console for details.",
                duration: 10000,
            });
            // In a real app, you might want to throw the error to an error boundary
            // For this dev environment, we'll just show a toast and log it.
        };

        const handleAuthError = (error: Error) => {
            toast({
                variant: 'destructive',
                title: 'Authentication Error',
                description: error.message,
            });
        };

        errorEmitter.on('permission-error', handlePermissionError);
        errorEmitter.on('auth-error', handleAuthError);

        return () => {
            errorEmitter.off('permission-error', handlePermissionError);
            errorEmitter.off('auth-error', handleAuthError);
        };
    }, [toast]);

    return null; // This component does not render anything
}
