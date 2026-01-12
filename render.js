const { Markup } = require('telegraf');
const {
  getActiveNumbers,
  getSms,
  getBalance
} = require('./api');

module.exports = async function renderNumbers(ctx) {
  const numbers = await getActiveNumbers();

  if (!numbers.length) {
    return ctx.reply('Активных номеров нет');
  }

  for (const n of numbers) {
    const code = await getSms(n.id);

    let text =
      `📞 <b>${n.phone}</b>\n` +
      `ID: <code>${n.id}</code>\n`;

    text += code
      ? `🔐 <b>${code}</b>\n`
      : `⌛ ожидание кода...\n`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('📩 Получить ещё SMS', `SMS_${n.id}`)],
      [
        Markup.button.callback('✅ Finish', `FINISH_${n.id}`),
        Markup.button.callback('❌ Cancel', `CANCEL_${n.id}`)
      ]
    ]);

    await ctx.replyWithHTML(text, keyboard);
  }

  const balance = await getBalance();
  await ctx.reply(`💰 Баланс: ${balance}`);
};
