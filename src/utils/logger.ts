import logger from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";
const stream = pretty({
  colorize: true,
});
const log = logger(
  {
    prettifier: pretty(),
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
  stream
);

export default log;
