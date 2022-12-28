import { rest } from 'msw'
import { login, logout } from './auth'
import { MOCK_API_BASE_URL } from '../../config'
import { AUTH_URLS } from '../../services/api-urls'

export const handlers = [
    //auth handlers
    //rest.post(`${MOCK_API_BASE_URL}/${AUTH_URLS.LOGIN}`, login),
    rest.post(`https://api.digodev.com/api/cpaas/gb01/v1/sm/cpaas/token`, login),
    rest.post('http://api.sspdev.digodev.com/orchestration/user/onboarding/logout', logout),
];