const { Telegraf, Markup } = require('telegraf');
const { BOT_TOKEN, COUNTRIES } = require('./config');
const queue = require('./queue');
const renderNumbers = require('./render');

const {
  buyNumber,
  requestNextSms,
  finishNumber,
  cancelNumber
} = require('./api');

const bot = new Telegraf(BOT_TOKEN);

bot.start(ctx => {
  ctx.reply(
    'Покупка номера:',
    Markup.inlineKeyboard([
      [Markup.button.callback('🇦🇹 Austria', 'BUY_AT')],
      [Markup.button.callback('🇩🇪 Germany', 'BUY_DE')]
    ])
  );
});

bot.action(/BUY_(AT|DE)/, async ctx => {
  const country = COUNTRIES[ctx.match[1]];

  await ctx.reply('⏳ Покупка номера...');
  await queue.add(() => buyNumber(country));
  await renderNumbers(ctx);
});

bot.action(/^SMS_(\d+)/, async ctx => {
  await requestNextSms(ctx.match[1]);
  await ctx.answerCbQuery('SMS запрошен');
  await renderNumbers(ctx);
});

bot.action(/^FINISH_(\d+)/, async ctx => {
  await finishNumber(ctx.match[1]);
  await ctx.answerCbQuery('Номер завершён');
  await renderNumbers(ctx);
});

bot.action(/^CANCEL_(\d+)/, async ctx => {
  await cancelNumber(ctx.match[1]);
  await ctx.answerCbQuery('Манибек выполнен');
  await renderNumbers(ctx);
});

module.exports = bot;
