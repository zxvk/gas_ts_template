const main = () => {
  type Log = string;
  const log: Log = 'hoge"';
  Logger.log(log);
};
