export type SecurityRuleContext = {
    path: string;
    operation: 'get' | 'list' | 'create' | 'update' | 'delete';
    requestResourceData?: any;
};

export class FirestorePermissionError extends Error {
    constructor(public context: SecurityRuleContext) {
        const { path, operation } = context;
        super(
            `FirestoreError: Missing or insufficient permissions: The following request was denied by Firestore Security Rules:
{
  "auth": "See the request context in your browser's developer console for authentication details.",
  "operation": "${operation}",
  "path": "${path}"
}`
        );
        this.name = 'FirestorePermissionError';
        console.error("Firestore Permission Error Context:", this.context);
    }
}

export class AuthError extends Error {
    constructor(public code: string, message: string) {
        super(message);
        this.name = 'AuthError';
    }
}
