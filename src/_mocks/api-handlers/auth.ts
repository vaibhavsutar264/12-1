import { MockedRequest, RestContext } from 'msw'
import { getTokenResp, logoutResp } from '../data/auth'

export const login = (req: MockedRequest<{ username: string, password: string }>, res: any, ctx: RestContext) => {

    return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(getTokenResp)
    );
};

export const logout = (req: any, res: any, ctx: RestContext) => {
    return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(logoutResp)
    );
};
