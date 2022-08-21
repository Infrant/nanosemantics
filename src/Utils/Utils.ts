export const showNetworkErrorMessage = (e: unknown) => {
    if (e instanceof Error) console.error(e.message)
}

export const showResponseErrorMessage = (code: string, message: string) => {
    console.error('code:', code, 'error text:', message)
}