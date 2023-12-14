export const successResponse = <T>(data: T, message = 'Success') => ({
    statusCode: 200,
    message,
    body: data,
});

export const errorResponse = (error: Error, statusCode = 500) => ({
    statusCode,
    message: error.message,
    body: null,
});

export const handleSupabaseRequest = async (request: any) => {
    try {
        const { data, error } = await request;
        if (error) return errorResponse(error);
        return successResponse(data);
    } catch (error) {
        console.error('Error during Supabase request:', error);
        return errorResponse(new Error('Internal Server Error'));
    }
};
