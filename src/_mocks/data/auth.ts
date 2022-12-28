import { GetToken, SetPassword, Logout } from '../../types/auth'

export const getTokenResp: GetToken = {
    data: {
        access_token: 'abc',
        refresh_token: 'def',
        refresh_expires_in: 1800,
        token_type: 'Bearer',
        expires_in: 300
    },
    message: 'Token Generated Successsfully',
    status: 200

};

export const setPasswordResp: SetPassword = {
    data: {
        message: 'Password set successfully',
        status: 200
    }

}

export const logoutResp: Logout = {
    data: {
        message: 'Logged out successfully.',
        status: 200
    }
}
