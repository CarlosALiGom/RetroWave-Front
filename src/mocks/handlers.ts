import { rest } from "msw";
import { realTokenMock } from "./userMocks";
import { addSynthMock, addSynthStoreMock, synthDbMocks } from "./synthsDbmocks";
import paths from "../router/paths/paths";
import { feedbackMessage } from "../utils/feedbackMessages";
import { errorMessages } from "../utils/errorMessages";

export const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: realTokenMock }));
  }),

  rest.get(`${apiUrl}${paths.synths}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(synthDbMocks));
  }),

  rest.post(`${apiUrl}${paths.synths}`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(addSynthStoreMock));
  }),

  rest.delete(`${apiUrl}${paths.synths}/:synthId`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: feedbackMessage.synthDeleted })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${paths.synths}`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Error handler" }));
  }),

  rest.post(`${apiUrl}${paths.synths}`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json(addSynthMock));
  }),

  rest.delete(`${apiUrl}${paths.synths}/:synthId`, (_req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({ message: errorMessages.synthsNotFound })
    );
  }),
];
