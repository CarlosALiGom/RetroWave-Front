import { rest } from "msw";
import { tokenMock } from "./userMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ tokenMock }));
  }),
];
