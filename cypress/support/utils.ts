export function generateTestEmail(): string {
    const timestamp = Date.now();
    return `test.email+${timestamp}@example-test.co.uk`;
}