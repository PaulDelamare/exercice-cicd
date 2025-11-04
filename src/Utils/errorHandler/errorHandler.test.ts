import { describe, it, expect, vi } from 'vitest';
import { handleError } from './errorHandler';
import { Request, Response } from 'express';

// ! Tests
describe('handleError middleware', () => {
    const mockReq = {} as Request; // Mock request
    const mockRes = {
        status: vi.fn().mockReturnThis(),
        json: vi.fn(),
    } as unknown as Response;

    // Reset the mocks before each test

    // Test the validation error
    it('should handle generic error', () => {

        // Create a generic error
        const error = new Error('Generic error');

        // Call the handleError function
        handleError(error, mockReq, mockRes);

        // Verify that the status is correct
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 500,
            error: 'Generic error',
        });
    });
});
