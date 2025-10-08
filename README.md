
<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover"/>
<title>Лечо. Ахуевшая заруба в Техасе.</title>

<!-- Fonts: iOS-style system fonts with fallback -->
<link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap" rel="stylesheet">

<style>
:root{
  --bg-top:#f2f2f7; --bg-bottom:#ffffff; /* Light iOS-like background */
  --accent:#007aff; --accent-2:#34c759; /* iOS blue and green accents */
  --glass: rgba(255,255,255,0.8); /* iOS blur glass */
  --card-w:68px; --card-h:96px; --btn-radius:12px; /* Slightly smaller cards for fit */
  --shadow-strong: 0 8px 32px rgba(0,0,0,0.1); /* Softer iOS shadows */
  --muted: rgba(0,0,0,0.6); /* Darker text for light bg */
}
*{box-sizing:border-box}
html,body{height:100%; overflow:hidden;} /* Prevent scroll entirely */
body{
  margin:0; font-family:"SF Pro Display", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  background:
    radial-gradient(800px 360px at 85% 10%, rgba(0,122,255,0.05), transparent),
    linear-gradient(180deg,var(--bg-top),var(--bg-bottom));
  color:#000; min-height:100vh; display:flex; flex-direction:column; align-items:center; padding:0;
  -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
}

/* APP - full height, no gaps for fit */
.app{width:100%; height:100vh; display:flex; flex-direction:column; overflow:hidden;}

/* header - compact, iOS-like */
.header{
  display:flex; justify-content:space-between; align-items:center; gap:12px;
  position: sticky; top: 0; z-index: 100;
  background: var(--glass); backdrop-filter: blur(20px); /* iOS blur */
  padding: 8px 12px; border-bottom: 1px solid rgba(0,0,0,0.05);
  flex-shrink:0;
}
.title-wrap{display:flex; align-items:center; gap:12px; flex:1;}
.logo-card{
  width:64px; height:64px; border-radius:12px; background:linear-gradient(135deg,var(--accent),var(--accent-2));
  color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:40px;
  box-shadow:var(--shadow-strong); flex-shrink:0;
}
.title{
  font-family:'SF Pro Display', serif;
  font-weight:600; font-size:16px; letter-spacing:0.01em; color:var(--accent); margin:0;
  line-height:1.1;
}
.subtitle{font-size:10px; color:var(--muted); margin-top:2px; font-weight:500; display:none;} /* Hide on mobile for space */

/* nav - compact wrap */
.nav-buttons{display:flex; gap:6px; flex-wrap:wrap}
.big-btn{background:var(--accent); color:#fff; padding:6px 10px; border-radius:var(--btn-radius); font-weight:600; min-width:80px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.1); cursor:pointer; border:none; font-size:13px; transition: all 0.2s;}
.balance{background:var(--glass); padding:6px 10px; border-radius:12px; font-weight:600; color:var(--accent); display:flex; align-items:center; gap:6px; border:1px solid rgba(0,0,0,0.05); transition: all 0.2s ease; font-size:13px;}

/* shelves - tighter for fit */
.shelves{display:grid; grid-template-columns:1fr; gap:12px; padding:0 12px; overflow-y:auto;}
.shelf{
  background:var(--glass); border-radius:12px; padding:16px; border:1px solid rgba(0,0,0,0.05);
  box-shadow:0 4px 16px rgba(0,0,0,0.08);
}
.shelf h3{margin:0 0 6px 0; font-size:15px; color:var(--accent)}
.shelf p{margin:0; color:var(--muted); font-size:12px}

/* responsive - tighter on small */
@media(max-width:600px){ 
  .header{padding:6px 8px; gap:4px;}
  .nav-buttons{flex-wrap:wrap; gap:4px; justify-content:center;}
  .big-btn{padding:5px 8px; font-size:12px; min-width:65px;}
  .logo-card{width:52px; height:52px; font-size:32px;}
  .title{font-size:14px;}
  .shelves{gap:8px; padding:0 8px;}
  .subtitle{display:none;}
}

/* global panels - compact */
.card-panel{background:var(--glass); border-radius:12px; padding:16px; border:1px solid rgba(0,0,0,0.05); box-shadow:0 4px 16px rgba(0,0,0,0.08); overflow:auto;}
.small-muted{font-size:12px; color:var(--muted)}

/* players row - tighter */
.players-row{display:flex; gap:8px; flex-wrap:wrap; align-items:flex-start; justify-content:center;}
.player-chip{display:flex; flex-direction:column; align-items:center; gap:3px; padding:6px; background:var(--glass); border-radius:12px; min-width:90px; border:1px solid rgba(0,0,0,0.05); transition:transform .15s,box-shadow .15s;}
.player-chip:hover{transform:translateY(-2px);}
.player-name{font-size:12px; font-weight:600; color:#000;}
.player-status{font-size:10px; color:var(--accent-2); font-style:italic;}
.player-count{font-size:11px; color:var(--muted);}

/* avatar sizes - smaller */
.avatar{border-radius:12px; overflow:hidden; border:1px solid rgba(0,0,0,0.05); display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.05); color:#000;}
.avatar.small{width:40px; height:40px; font-size:18px;}
.avatar.medium{width:52px; height:52px; font-size:24px;}
.avatar.large{width:72px; height:72px; font-size:30px;}

/* Card visuals - adjusted size */
.card{width:var(--card-w); height:var(--card-h); background:#fff; color:#000; border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.1); display:flex; flex-direction:column; justify-content:space-between; padding:8px; font-weight:600; user-select:none; transition:transform .18s;}
.card.back{background:linear-gradient(180deg,#e5e5e5,#d1d1d1); color:#666; justify-content:center; align-items:center; font-size:18px; position:relative;}
.card .suit{font-size:12px;}
.card .rank{font-size:16px; text-align:center;}
.hand{display:flex; gap:6px;}

/* table - fit to remaining space */
.table{background:var(--glass); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:8px; flex:1; border:1px solid rgba(0,0,0,0.05); overflow:auto;}
.table-center{display:flex; gap:12px; align-items:center; justify-content:center; flex:1;}
.table-slot{min-width:140px; min-height:100px; background:var(--glass); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:6px; align-items:center; border:1px solid rgba(0,0,0,0.05);}

/* controls & log - compact bottom */
.controls{display:flex; gap:8px; position:sticky; bottom:0; background:var(--glass); padding:8px; border-radius:12px; border:1px solid rgba(0,0,0,0.05); flex-shrink:0;}
#log{background:rgba(0,0,0,0.05); padding:6px; border-radius:12px; font-size:11px; max-height:60px; overflow:auto; border:1px solid rgba(0,0,0,0.02); width:100%}

/* shop - tighter grid */
.shop-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px; margin-top:12px; padding:0 12px;}
.shop-item{background:var(--glass); padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.05);}
.item-title{font-weight:600; color:var(--accent); margin-bottom:4px;}
.item-desc{font-size:12px; color:var(--muted); margin-bottom:6px;}
.price{font-weight:700; color:var(--accent); font-size:13px;}

/* inventory - wrap tight */
.inv{display:flex; gap:6px; flex-wrap:wrap; margin-top:6px;}
.inv .chip{background:rgba(0,0,0,0.05); padding:4px 6px; border-radius:8px; font-size:12px;}

/* personalization - tight */
.personalization-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:10px; margin-top:12px;}
.personalization-item{background:var(--glass); padding:10px; border-radius:10px; border:1px solid rgba(0,0,0,0.05);}
.apply-btn{background:var(--accent-2); color:#000; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:600; cursor:pointer; border:none; width:100%;}

/* game inventory - compact */
.game-inv-panel {
  background: var(--glass);
  border-radius: 12px;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.05);
  min-width: 180px; flex-shrink:0;
}
.game-inv-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 3px;
  background: rgba(0,0,0,0.03);
  border-radius: 6px;
}
.use-btn {
  background: var(--accent-2);
  color: #000;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

/* casino - tighter */
.casino-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 12px; padding:0 12px; }
.casino-item { background: var(--glass); padding: 12px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.05); text-align: center; }
.color-choice { display: flex; gap: 8px; justify-content: center; margin: 8px 0; }
.color-btn { width: 44px; height: 44px; border-radius: 50%; border: 2px solid rgba(0,0,0,0.1); cursor: pointer; font-size: 22px; }
.color-btn.selected { border-color: var(--accent); box-shadow: 0 0 8px var(--accent-2); }
#rouletteSpinner { font-size: 42px; text-align: center; margin: 16px 0; }
#countdown { font-size: 32px; font-weight: 700; text-align: center; margin: 16px 0; color: var(--accent-2); }

/* exchange - centered tight */
.exchange-panel { display: flex; flex-direction: column; gap: 12px; max-width: 360px; margin: 0 auto; padding:0 12px; }
.exchange-form { background: rgba(0,0,0,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); }
.exchange-input { padding: 6px; border-radius: 6px; background: transparent; border: 1px solid rgba(0,0,0,0.1); color: #000; width: 100%; margin-bottom: 6px; }
.exchange-result { font-weight: 600; color: var(--accent-2); text-align: center; padding: 6px; background: rgba(0,0,0,0.02); border-radius: 6px; }
.exchange-error { color: #ff3b30; font-size: 11px; text-align: center; margin-top: 3px; }

/* slot - full fit */
#screenSlots { background: var(--bg-bottom); flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 16px; }
#slotContent { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; width: 100%; gap:20px; }
.slot-reel { font-size: 72px; width: 90px; height: 90px; border: 2px solid var(--accent); border-radius: 12px; display: flex; align-items: center; justify-content: center; background: var(--glass); margin: 0 8px; }
.lever-btn { background: var(--accent); color: white; padding: 16px 32px; border-radius: 50px; font-size: 20px; font-weight: 600; cursor: pointer; border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.2s; }
.lever-btn:active { transform: scale(0.98); }
#slotResult { margin-top: 20px; font-size: 20px; color: var(--accent-2); text-align: center; }

/* horse race - closed message */
#screenHorseRace { background: var(--bg-bottom); flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align:center; }
#horseContent { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; width: 100%; }
#horseClosed { font-size:24px; color:var(--muted); margin-bottom:20px; }

/* trump card - iOS rounded */
.trump { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: white; border-radius: 8px; border: 2px solid #ffd700; color: black; font-size: 24px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

/* animations - softer */
@keyframes flash { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.2); } }
@keyframes fall { to { top: 0vh; opacity: 0; transform: rotate(360deg); } }

/* modal - iOS sheet-like */
#modal {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); 
  display: none; z-index: 1000; justify-content: center; align-items: flex-end; padding:20px;
}
#modalContent {
  background: #fff; color: #000; padding: 20px; border-radius: 20px 20px 0 0; 
  max-width: 100%; text-align: center; box-shadow: 0 -4px 16px rgba(0,0,0,0.1); width:100%;
}
#modalClose { background: var(--accent); color: #fff; padding: 12px 24px; border-radius: 12px; cursor: pointer; margin-top: 10px; font-weight:600; border:none; }

/* screens - full fit, no scroll */
.screen { display: none; flex:1; overflow:auto; padding:8px; } /* Reduced padding */
.screen.active { display: flex; flex-direction: column; }

@media(max-width:640px){
  .shelves{grid-template-columns:1fr;}
  .header{flex-direction:column; align-items:flex-start; gap:8px;}
  .logo-card{width:48px; height:48px; font-size:28px;}
  .table { flex-direction: column; gap:6px; }
  .game-inv-panel { order: -1; min-width:auto; }
  #log { max-height: 50px; font-size: 10px; padding: 4px; }
  .app { padding: 0; }
  .casino-grid { grid-template-columns:1fr; }
}

.version { position: fixed; bottom: 4px; right: 8px; font-size: 10px; color: var(--muted); font-family: monospace; }

/* Fallback banner - iOS alert style */
#fallbackBanner {
  background: #ff3b30; color: #fff; padding: 8px; text-align: center; font-size: 12px; font-weight: 500;
  border-radius: 12px; margin: 8px; display: none;
}
</style>
</head>
<body>
<div class="app">

  <!-- Fallback Banner -->
  <div id="fallbackBanner"></div>

  <!-- HEADER -->
  <div class="header">
    <div class="title-wrap">
      <div class="logo-card" id="logoCard">🃏</div>
      <div>
        <div class="title">Лечо. Ахуевшая заруба в Техасе.</div>
        <div class="subtitle">Грубая карточная нервотрёпка, сервированная по-старинке</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <div class="nav-buttons">
        <div class="big-btn" id="btnIntro">Главная</div>
        <div class="big-btn" id="btnProfile">Профиль</div>
        <div class="big-btn" id="btnShop">Магазин</div>
        <div class="big-btn" id="btnNew">Новая игра</div>
      </div>
      <div class="balance" id="balanceDisplay">🪙 0 💎 0</div>
    </div>
  </div>

  <!-- INTRO (полочки) -->
  <div id="screenIntro" class="screen active">
    <div class="shelves">
      <div class="shelf card-panel" id="shelfMenu">
        <h3>Меню</h3>
        <p>Запуск игры, выбор размера комнаты и быстрый доступ к настройкам.</p>
        <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
          <select id="lobbySize"><option>3</option><option>4</option><option>5</option></select>
          <div class="big-btn" id="startFromIntro">Начать игру</div>
          <div class="big-btn" id="btnExchange">Обмен валюты</div>
          <div class="big-btn" id="btnCasino">Азартные игры</div>
          <div class="big-btn" id="btnRules">Правила</div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXCHANGE -->
  <div id="screenExchange" class="screen">
    <div class="card-panel">
      <h3>Обмен валюты</h3>
      <p class="small-muted">Разменяйте 💎 на 🪙 и обратно по текущему курсу.</p>
      <div class="exchange-panel">
        <div class="exchange-form">
          <h4>💎 → 🪙 (3💎 = 1🪙, кратно 3)</h4>
          <input id="diamondsToCoinsInput" type="number" min="3" step="3" class="exchange-input" placeholder="Количество 💎 (кратно 3)">
          <div id="diamondsToCoinsResult" class="exchange-result">🪙 0</div>
          <div id="diamondsToCoinsError" class="exchange-error" style="display:none;"></div>
          <div class="big-btn" id="confirmDiamondsToCoins">Подтвердить сделку</div>
        </div>
        <div class="exchange-form">
          <h4>🪙 → 💎 (1🪙 = 2💎, любое количество)</h4>
          <input id="coinsToDiamondsInput" type="number" min="1" class="exchange-input" placeholder="Количество 🪙">
          <div id="coinsToDiamondsResult" class="exchange-result">💎 0</div>
          <div class="big-btn" id="confirmCoinsToDiamonds">Подтвердить сделку</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="backFromExchange">Назад</div>
      </div>
    </div>
  </div>

  <!-- CASINO -->
  <div id="screenCasino" class="screen">
    <div class="card-panel">
      <h3>Азартные игры</h3>
      <p class="small-muted">Рискуйте валютой в мини-играх казино.</p>
      <div class="casino-grid">
        <div class="casino-item">
          <h4>Русская рулетка (3💎)</h4>
          <p>Выберите уровень: Легко (+5💎, 5 пустых/1 заряженный) или Сложно (+15💎, 1 пустой/5 заряженных).</p>
          <select id="rouletteDifficulty"><option value="easy">Легко (+5💎)</option><option value="hard">Сложно (+15💎)</option></select>
          <div class="big-btn" id="startRoulette">Играть</div>
          <div id="rouletteResult"></div>
          <div id="countdown"></div>
        </div>
        <div class="casino-item">
          <h4>Разноцветная рулетка (2💎)</h4>
          <p>Выберите цвет: 🔴 (45%, +4💎), ⚫️ (45%, +4💎), 🟢 (10%, +100💎).</p>
          <div class="color-choice">
            <button class="color-btn" data-color="🔴" id="colorRed">🔴</button>
            <button class="color-btn" data-color="⚫️" id="colorBlack">⚫️</button>
            <button class="color-btn" data-color="🟢" id="colorGreen">🟢</button>
          </div>
          <div class="big-btn" id="confirmColorChoice" style="display:none;">Подтвердить выбор</div>
          <div id="rouletteSpinner"></div>
          <div id="colorResult"></div>
        </div>
        <div class="casino-item">
          <h4>Золотая лихорадка (5🪙)</h4>
          <p>Нажмите "Повезет" для активации (7% шанс на джекпот 🪙777).</p>
          <div class="big-btn" id="luckyBtn">Повезет</div>
          <div class="big-btn" id="confirmGoldRush" style="display:none;">Подтвердить игру</div>
          <div id="goldRushResult"></div>
        </div>
        <div class="casino-item">
          <h4>Слот-машинка (10💎)</h4>
          <p>Высокий риск, щедрые выплаты. Тяните рычаг!</p>
          <div class="big-btn" id="btnSlots">🎰 Играть в слоты</div>
        </div>
        <div class="casino-item">
          <h4>Ставка на лошадку</h4>
          <p>Закрыто на ремонт</p>
          <div class="big-btn" id="btnHorseRace" style="background:gray; cursor:not-allowed;">🐎 Закрыто на ремонт</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="backFromCasino">Назад</div>
      </div>
    </div>
  </div>

  <!-- HORSE RACE - Closed -->
  <div id="screenHorseRace" class="screen">
    <div id="horseContent">
      <h3>Ставка на лошадку</h3>
      <div id="horseClosed">🔧 Закрыто на ремонт. Скоро откроем!</div>
    </div>
    <div class="big-btn" id="backFromHorseRace">Назад</div>
  </div>

  <!-- SLOTS -->
  <div id="screenSlots" class="screen">
    <div id="slotContent">
      <div id="slotReels" style="display: flex; gap: 16px; margin-bottom: 20px;">
        <div id="reel1" class="slot-reel"></div>
        <div id="reel2" class="slot-reel"></div>
        <div id="reel3" class="slot-reel"></div>
      </div>
      <div style="margin-bottom: 20px;">
        <div class="balance" style="font-size: 18px;">💎 <span id="slotBalance">0</span></div>
      </div>
      <button id="leverBtn" class="lever-btn">🚀 Тянуть</button>
      <div id="slotResult"></div>
    </div>
    <div class="big-btn" id="backFromSlots">Назад</div>
  </div>

  <!-- PROFILE -->
  <div id="screenProfile" class="screen">
    <div class="card-panel">
      <h3>Профиль</h3>
      <div style="display:flex;gap:10px;align-items:center">
        <div id="profileAvatar" class="avatar large">👤</div>
        <div style="flex:1">
          <div style="display:flex;gap:6px;align-items:center">
            <input id="nickProfile" type="text" placeholder="ЗлойКозёл_42" style="padding:6px;border-radius:8px;background:var(--glass);border:1px solid rgba(0,0,0,0.05);color:#000;width:220px">
            <div class="big-btn" id="saveNick">Сохранить</div>
            <div class="big-btn" id="backFromProfile">Назад</div>
            <div id="goldRushBadge" style="display:none;background:linear-gradient(to right, gold, yellow);color:black;padding:3px 6px;border-radius:6px;font-size:11px;font-weight:600;">🏆 Покоритель лихорадки</div>
          </div>
          <div style="margin-top:8px;display:flex;gap:6px;align-items:center">
            <input id="avatarInput" type="file" accept="image/*" style="color:#000">
          </div>
          <div style="margin-top:8px">
            <div class="small-muted">Выбрать эмодзи-аватар:</div>
            <select id="avatarSelect" style="padding:6px;border-radius:8px;background:var(--glass);border:1px solid rgba(0,0,0,0.05);color:#000;width:100%;margin-bottom:6px;"></select>
            <div class="big-btn" id="applyAvatar" style="width:100%;margin-bottom:6px">Применить аватар</div>
          </div>
          <div style="margin-top:8px">
            <div style="display:flex;gap:6px;align-items:center">
              <label class="small-muted">Статус:</label>
              <select id="statusSelect">
                <option value="none">Без статуса</option>
              </select>
              <div class="big-btn" id="saveStatus">Сохранить статус</div>
            </div>
          </div>
          <div style="margin-top:8px">
            <div class="small-muted">Баланс: <span id="balText">🪙0 💎0</span></div>
            <div class="small-muted">Инвентарь:</div>
            <div id="inventory" class="inv"></div>
          </div>
          <div style="margin-top:12px">
            <h4 class="small-muted">Персонализация</h4>
            <div class="personalization-grid" id="personalizationGrid"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SHOP -->
  <div id="screenShop" class="screen">
    <div class="card-panel">
      <h3>Магазин</h3>
      <p class="small-muted">Ниже — витрина товаров и услуг. Я придумывал их так, чтобы монетка давала ощутимую мелкую выгоду.</p>
      <div class="shop-grid" id="shopGrid">
        <!-- items rendered by JS -->
      </div>
      <div style="margin-top:8px;display:flex;gap:6px">
        <div class="big-btn" id="backFromShop">Назад</div>
      </div>
    </div>
  </div>

  <!-- RULES -->
  <div id="screenRules" class="screen">
    <div class="card-panel">
      <h3>Правила</h3>
      <div style="max-height:300px;overflow:auto;padding-right:4px">
        <p class="small-muted">Игра называется «Лечо».</p>
        <p class="small-muted">В игре используются 4 масти, как в стандартных карточных играх: ♣️♠️♥️♦️. Колода состоит из 36 карт.</p>
        <p class="small-muted">Каждому игроку раздается по 3 случайные карты из колоды. Самая нижняя карта в колоде определяет козырь на партию.</p>
        <p class="small-muted">Игра начинается после раздачи. Игроки могут ходить (атаковать) или отбиваться картами. Показывать карты до конца игры запрещено. Нет других вариантов хода. Первый ход делает игрок с наименьшим козырем, далее по часовой стрелке.</p>
        <p class="small-muted">Атакующий игрок может свайпом выкинуть ненужную карту, чтобы попытаться собрать комбинацию, взяв новую из колоды. Если обороняющийся не может отбить атакующую карту, он забирает её себе. Если атака отбита, обе карты (атака и отбой) перемешиваются и кладутся в колоду для дальнейшего вытягивания.</p>
        <p class="small-muted">Комбинации собираются строго из 3 карт. Всего 3 типа комбинаций:</p>
        <ol class="small-muted">
          <li>Повтор: 3 карты одного достоинства (например, 6♣️, 6♠️, 6♥️).</li>
          <li>Последовательность: 3 карты подряд по достоинству, от меньшего к большему (например, J♥️, Q♠️, K♣️ или 6♠️, 7♣️, 8♥️).</li>
          <li>Масть: 3 карты одной масти (например, 7♥️, Q♥️, A♥️ или 6♣️, 7♣️, 9♣️).</li>
        </ol>
        <p class="small-muted">Если комбинация собрана, но игрок не нажал «Лечо», игра продолжается — это проблема игрока. Если нажать «Лечо» без комбинации, появится предупреждение: «Вы не собрали комбинацию!». После успешного «Лечо» игрок получает 1 🪙 и не может повторно нажать кнопку — ожидать конца игры.</p>
        <p class="small-muted">Игра длится, пока не останется один игрок без комбинации или не объявивший «Лечо» timely.</p>
        <p class="small-muted">В конце игры проигравший угадывает комбинации победителей по подсказке (тип комбинации: повтор, последовательность или масть). Обман запрещен. За каждую угаданную комбинацию дается 1 💎.</p>
        <p class="small-muted">За каждую неугаданную комбинацию из новой колоды вытягивается 3 карты. Если в них есть комбинация, добавляется еще 3. Если вытянуто больше 15 карт, это «колода» — игрок проиграл дважды.</p>
        <h4 class="small-muted">Обмен валюты</h4>
        <p class="small-muted">💎 → 🪙: 3💎 = 1🪙 (кратно 3). 🪙 → 💎: 1🪙 = 2💎 (любое количество). Автоподсчет и подтверждение сделки.</p>
        <h4 class="small-muted">Азартные игры</h4>
        <p class="small-muted">1. Русская рулетка (3💎): Выбор сложности (легко: +5💎; сложно: +15💎). Обратный отсчет и выстрел (💥/💨).</p>
        <p class="small-muted">2. Разноцветная рулетка (2💎): Выбор 🔴/⚫️/🟢. Шансы: 45%/45%/10%. Выигрыши: +4💎/+4💎/+100💎. Анимация смены шариков 3-6 сек.</p>
        <p class="small-muted">3. Золотая лихорадка (5🪙): Кнопки «Повезет» и «Подтвердить». 7% шанс на 🪙777.</p>
        <p class="small-muted">4. Слот-машинка (10💎): 3 барабана, символы: фрукты, 🔔, 💀. Выплаты: 3🔔 +100💎, 3 фрукта +30💎, 2🔔 +15💎, 💀 проигрыш, иначе возврат.</p>
        <p class="small-muted">5. Ставка на лошадку (от 2🪙): Выбор лошади 1-5, коэффициенты x1.5-x8. Забег 25-45 сек с анимацией.</p>
        <p class="small-muted">Предметы из магазина (хинт, подгляд, пропуск и т.д.) используются из инвентаря во время игры через панель в игре.</p>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="backFromRules">Назад</div>
      </div>
    </div>
  </div>

  <!-- GAME -->
  <div id="screenGame" class="screen">
    <div class="table" style="display: grid; grid-template-columns: 1fr auto; gap: 8px;">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center; margin-bottom:8px;">
          <div class="players-row" id="playersRow"></div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <div class="small-muted">Козырь</div>
            <span class="trump" id="trumpCard">—</span>
            <div class="small-muted">Колода: <span id="deckCount">0</span></div>
          </div>
        </div>

        <div class="table-center">
          <div class="table-slot">
            <div class="small-muted">Атакующий</div>
            <div id="attackerSlot" class="hand"></div>
          </div>
          <div class="table-slot">
            <div class="small-muted">Защитник</div>
            <div id="defenderSlot" class="hand"></div>
          </div>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:flex-end; margin-top:8px;">
          <div style="display:flex;flex-direction:column;gap:6px">
            <div class="status" id="turnInfo">Ход: —</div>
            <div id="actionHint" class="small-muted">Тапните карту для атаки/защиты.</div>
          </div>

          <div style="display:flex;flex-direction:column;gap:6px;min-width:220px">
            <div id="log" role="log"></div>
            <div style="display:flex;gap:6px" class="controls">
              <div class="big-btn" id="drawBtn">Беру</div>
              <div class="big-btn" id="returnBtn">Вернуть отправителю — 🪙5</div>
              <div class="big-btn" id="lechoBtn">Лечо</div>
            </div>
          </div>
        </div>

        <div style="margin-top:4px">
          <div class="small-muted">Ваши карты:</div>
          <div class="hand" id="playerHand" style="margin-top:6px"></div>
        </div>
      </div>
      <div class="game-inv-panel">
        <h4 class="small-muted">Инвентарь</h4>
        <div id="gameInventory"></div>
      </div>
    </div>
  </div>

  <!-- OUTRO -->
  <div id="screenOutro" class="screen">
    <div class="card-panel">
      <h3 id="outroTitle">Игра окончена</h3>
      <div id="outroText"></div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="playAgain">Играть заново</div>
        <div class="big-btn" id="backFromOutro">В меню</div>
      </div>
    </div>
  </div>

  <!-- GUESS -->
  <div id="screenGuess" class="screen">
    <div class="card-panel">
      <h3>Угадайте комбинации победителей</h3>
      <div id="guessForms"></div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="submitGuess">Угадать</div>
        <div class="big-btn" id="backFromGuess">В меню</div>
      </div>
    </div>
  </div>

</div>

<!-- Modal -->
<div id="modal">
  <div id="modalContent">
    <div id="modalText"></div>
    <button id="modalClose">OK</button>
  </div>
</div>

<div class="version">MegaSlots update. v2.2</div>

<script>
/* ================= README: Progress Saving =================
 * feat: save progress by telegram userId via localStorage
 * - Gets userId from Telegram.WebApp.initDataUnsafe.user.id
 * - State: {coins, diamonds, nick, avatar, status, inventory, avatars, goldRushWon, wins, level}
 * - Auto-load on init, auto-save on changes via onStateChange()
 * - If no userId: shows banner warning (local only)
 * - For server migration: replace saveData/loadData with uploadToServer/downloadFromServer
 * - Security: No sensitive data stored; validate initData on server later
 * ======================================================== */

/* ================= CONFIG / STATE ================= */
const RETURN_COST = 5;
let state = { coins: 0, diamonds: 0, level: 1, wins: 0, nick: '', avatar: '', status: 'none', inventory: {}, avatars: [], goldRushWon: false };
let betDoublerActive = false;
let insuranceActive = false;
const DEFAULT_AVATAR = '';
const AVATARS_KEY = 'lecho_avatars'; // Legacy, but now in state
const $ = id => document.getElementById(id);

/* Telegram WebApp Init */
const tg = window.Telegram?.WebApp || null;
const initUser = tg?.initDataUnsafe?.user || null;
const userId = initUser?.id ?? null;
const username = initUser?.username ?? null;
if (tg) {
  tg.expand();
  tg.ready();
}

/* Storage Functions */
function saveData(userId, data) {
  if (!userId) return; // Skip if no ID
  localStorage.setItem(`gameData_${userId}`, JSON.stringify(data));
  // Optional: uploadToServer(data);
}

function loadData(userId) {
  if (!userId) return null;
  const raw = localStorage.getItem(`gameData_${userId}`);
  return raw ? JSON.parse(raw) : null;
}

// Stubs for future backend
async function uploadToServer(state) {
  // Later: fetch('/save', {method:'POST', body: JSON.stringify({userId, state}), headers:{'Content-Type':'application/json'}})
  return Promise.resolve(true);
}

async function downloadFromServer() {
  // Later: fetch('/load', {method:'GET'})
  return Promise.resolve(null);
}

/* Auto-load State */
const loadedState = loadData(userId) || state;
Object.assign(state, loadedState);
let balance = state.coins;
let diamonds = state.diamonds;

/* Auto-save on Change */
function onStateChange() {
  state.coins = balance;
  state.diamonds = diamonds;
  state.wins = state.wins || 0; // Increment on wins if needed
  state.level = Math.floor(state.wins / 10) + 1; // Example leveling
  state.nick = state.nick || genBotName();
  state.inventory = state.inventory || {};
  state.avatars = state.avatars || [];
  state.goldRushWon = state.goldRushWon || false;
  state.status = state.status || 'none';
  state.avatar = state.avatar || '';
  saveData(userId, state);
}

/* Fallback UI */
if (!userId) {
  const banner = $('fallbackBanner');
  banner.textContent = 'ID Telegram не получен — прогресс сохраняется локально на этом устройстве. Рекомендуется открыть через Telegram WebApp.';
  banner.style.display = 'block';
}

/* UI refs */
const ui = {
  playersRow: $('playersRow'), attackerSlot:$('attackerSlot'), defenderSlot:$('defenderSlot'),
  playerHand:$('playerHand'), deckCount:$('deckCount'), trumpCard:$('trumpCard'),
  log:$('log'), turnInfo:$('turnInfo'), actionHint:$('actionHint'),
  drawBtn:$('drawBtn'), lechoBtn:$('lechoBtn'), returnBtn:$('returnBtn'),
  balanceDisplay:$('balanceDisplay'), invPreview:$('invPreview'), inventory:$('inventory'),
  gameInventory: $('gameInventory')
};

/* Game consts */
const RANKS=['6','7','8','9','10','J','Q','K','A'];
const SUITS=['♣️','♠️','♥️','♦️'];
const RANK_VALUE = r => RANKS.indexOf(r);
const BOT_EMOJIS = ['😼','🦾','🍔','🔥','🧊','🥟','🧆','🎯','🛠️','🍕'];
const PREFIXES = ['Ебаный','Хуевый','Пиздатый','Сука','Блядский','Пидорский','Говно','Залупный','Мудак','Долбоёб'];
const FUN = ['Хуй','Пиздец','Жопа','Сиськи','Блядина','Пиздюк','Мандавошка','Еблан','Дрочер','Конча'];

/* Shop consts */
const SHOP_ITEMS = [
  { id:'theme_dark', title:'Тема «Ночной Техас»', desc:'Тёмная тема интерфейса — немного стильно.', price:8, type:'theme' },
  { id:'avatar_pack', title:'Пак аватаров', desc:'5 уникальных эмодзи-аватаров для ботов/вас.', price:5, type:'avatar' },
  { id:'voucher_pack', title:'Пак возвратов (×3)', desc:'Три бесплатных возврата атаки (конвертируется в витрине).', price:12, type:'voucher', qty:3 },
  { id:'hint', title:'Разовый хинт', desc:'Показывает возможно собираемую комбинацию у вас (однократно).', price:4, type:'hint' },
  { id:'extra_draw', title:'Доп. вытяжка', desc:'Позволяет выкинуть карту без взятия новой (один раз, для снижения руки).', price:6, type:'extra_draw' },
  { id:'peek_deck', title:'Подгляд в колоду', desc:'Показывает верхнюю карту колоды (один раз).', price:8, type:'peek' },
  { id:'skip_turn', title:'Пропуск хода', desc:'Пропустить свой ход атаки (один раз).', price:12, type:'skip' },
  { id:'reveal_combo', title:'Разоблачение комбо', desc:'Узнайте тип комбо у случайного соперника (один раз).', price:12, type:'reveal' },
  { id:'extra_life', title:'Доп. жизнь', desc:'Избегните поражения один раз, если проиграете.', price:15, type:'extra_life' },
  { id:'telepathy', title:'Телепатия', desc:'видит случайную карту из руки противника', price:25, type:'telepathy' },
  { id:'trump_swap', title:'Подмена Козыря', desc:'один раз за игру сменить козырь', price:30, type:'trump_swap' },
  { id:'game_roulette', title:'Русская Рулетка в Игре', desc:'заставляет противника пропустить ход (50% шанс)', price:20, type:'game_roulette' },
  { id:'anti_lecho', title:'Анти-Лечо', desc:'блокирует возможность объявления Лечо одним игроком', price:40, type:'anti_lecho' },
  { id:'bet_doubler', title:'Удвоитель Ставки', desc:'следующая победа в казино ×2', price:8, type:'bet_doubler' },
  { id:'insurance', title:'Страховка', desc:'возвращает 50% при проигрыше в казино', price:6, type:'insurance' },
  { id:'free_sample', title:'Бесплатный Образец', desc:'тестовое использование любого предмета', price:3, type:'free_sample' }
];
const AVATAR_PACKS = {
  'avatar_pack': ['🤠', '🧔', '👹', '🤖', '👻']
};
const STATUSES = {
  none: 'Без статуса',
  conqueror: 'Покоритель лихорадки'
};
const HORSE_ODDS = {1: 1.5, 2: 2.0, 3: 3.0, 4: 5.0, 5: 8.0};

/* runtime state */
let deck=[], discard=[], trump=null, originalTrump=null, trumpSwapped = false;
let players=[], turnIndex=0, tableAttack=null, tableDefend=null;
let processing=false, selectedCardUid=null;
let lobbySize = Number($('lobbySize').value || 3);
let exchangeProcessing = false;

/* ================= Helpers ================= */
function shuffle(a){ for(let i=a.length-1;i>0;i--){ let j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } }
function makeDeck(){ const d=[]; for(const s of SUITS) for(const r of RANKS) d.push({rank:r,suit:s,uid:Math.random().toString(36).slice(2)}); return d; }
function log(msg){ const el = document.createElement('div'); el.textContent = msg; ui.log.prepend(el); }
function saveBalance(){ onStateChange(); ui.balanceDisplay.textContent = `🪙 ${balance} 💎 ${diamonds}`; $('slotBalance').textContent = diamonds; }
function pickBotEmoji(){ return BOT_EMOJIS[Math.floor(Math.random()*BOT_EMOJIS.length)]; }
function avatarHtml(a){ if(!a) return '<div class="avatar small">👤</div>'; if(a.type==='emoji') return `<div class="avatar small">${a.value}</div>`; return `<div class="avatar small"><img src="${a.value}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/></div>`; }
function getStatusText(statusKey) { return STATUSES[statusKey] || ''; }

/* Modal helper */
function showModal(msg, title = '') {
  const modal = $('modal');
  const content = $('modalContent');
  const text = $('modalText');
  text.innerHTML = title ? `<h4>${title}</h4><p>${msg}</p>` : `<p>${msg}</p>`;
  modal.style.display = 'flex';
}
$('modal').onclick = $('modalClose').onclick = () => { $('modal').style.display = 'none'; };

/* ============== Lobby / Start ============== */
$('startFromIntro').onclick = ()=>{ lobbySize = Number($('lobbySize').value||3); startNewGame(); };
$('btnNew').onclick = ()=>{ lobbySize = Number($('lobbySize').value||3); startNewGame(); };
$('btnIntro').onclick = ()=>showScreen('screenIntro');
$('btnRules').onclick = ()=>showScreen('screenRules');
$('backFromRules').onclick = ()=>showScreen('screenIntro');
$('btnHorseRace').onclick = () => showModal('Скачки закрыты на ремонт. Вернёмся скоро!');
$('backFromHorseRace').onclick = ()=>{ showScreen('screenCasino'); };
$('btnProfile').onclick = ()=>{ 
  showScreen('screenProfile'); 
  $('nickProfile').value = state.nick || genBotName(); 
  loadAvatars(); 
  const v = state.avatar || DEFAULT_AVATAR; 
  if(v) { 
    if(v.startsWith('data:')) { 
      document.getElementById('profileAvatar').innerHTML = `<img src="${v}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>`; 
    } else { 
      document.getElementById('profileAvatar').innerHTML = `<div class="avatar large">${v}</div>`; 
      $('avatarSelect').value = v; 
    } 
  } 
  loadStatusSelect(); 
  const won = state.goldRushWon; 
  $('goldRushBadge').style.display = won ? 'flex' : 'none'; 
  updateInventoryUI(); 
  renderPersonalization(); 
  updateBalText(); 
  onStateChange();
};
$('btnShop').onclick = ()=>showScreen('screenShop');
$('backFromShop').onclick = ()=>showScreen('screenIntro');
$('backFromProfile').onclick = ()=>showScreen('screenIntro');
$('backFromOutro').onclick = ()=>showScreen('screenIntro');
$('backFromGuess').onclick = ()=>showScreen('screenIntro');
$('backFromExchange').onclick = ()=>showScreen('screenIntro');
$('backFromCasino').onclick = ()=>showScreen('screenIntro');
$('backFromSlots').onclick = ()=>{ showScreen('screenCasino'); };

$('saveNick').onclick = ()=>{ 
  const n = $('nickProfile').value.trim() || genBotName(); 
  state.nick = n; 
  onStateChange();
  if (n.toUpperCase() === 'МАКАН') {
    balance += 9999;
    diamonds += 9999;
    saveBalance();
  }
  showScreen('screenIntro'); 
};

function loadStatusSelect() {
  const select = $('statusSelect');
  select.innerHTML = '<option value="none">Без статуса</option>';
  if (state.goldRushWon) {
    const opt = document.createElement('option');
    opt.value = 'conqueror';
    opt.textContent = 'Покоритель лихорадки';
    select.appendChild(opt);
  }
  select.value = state.status;
}

$('saveStatus').onclick = () => {
  const status = $('statusSelect').value;
  if (status === 'conqueror' && !state.goldRushWon) {
    showModal('Статус доступен только после покорения лихорадки!');
    return;
  }
  state.status = status;
  onStateChange();
  showModal('Статус сохранен!');
};

/* avatar upload preview */
$('avatarInput').addEventListener('change', e=>{ const f = e.target.files && e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload=()=>{ state.avatar = r.result; onStateChange(); document.getElementById('profileAvatar').innerHTML = `<img src="${r.result}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>`; $('avatarSelect').value = ''; }; r.readAsDataURL(f); });

/* avatar select */
function loadAvatars() {
  const avs = state.avatars || [];
  const sel = $('avatarSelect');
  sel.innerHTML = '<option value="">Стандартный 👤</option>';
  avs.forEach(a => { 
    const opt = document.createElement('option'); 
    opt.value = a; 
    opt.textContent = a; 
    sel.appendChild(opt); 
  });
  const current = state.avatar;
  if (current && !current.startsWith('data:') && avs.includes(current)) {
    sel.value = current;
  }
}
$('applyAvatar').onclick = () => {
  const val = $('avatarSelect').value;
  if (!val) {
    state.avatar = '';
  } else {
    state.avatar = val;
  }
  onStateChange();
  document.getElementById('profileAvatar').innerHTML = !val ? '<div class="avatar large">👤</div>' : `<div class="avatar large">${val}</div>`;
};

function updateBalText() {
  $('balText').textContent = `🪙${balance} 💎${diamonds}`;
}

/* Exchange logic - with strict check and anti-farming */
$('diamondsToCoinsInput').addEventListener('input', (e) => {
  const amt = Number(e.target.value);
  const errorEl = $('diamondsToCoinsError');
  if (amt < 3 || amt % 3 !== 0) {
    $('diamondsToCoinsResult').textContent = '';
    errorEl.textContent = 'Сумма размена не кратна 3!';
    errorEl.style.display = 'block';
  } else {
    const result = Math.floor(amt / 3);
    $('diamondsToCoinsResult').textContent = `🪙 ${result}`;
    errorEl.style.display = 'none';
  }
});
$('coinsToDiamondsInput').addEventListener('input', (e) => {
  const amt = Number(e.target.value);
  const result = amt * 2;
  $('coinsToDiamondsResult').textContent = `💎 ${result}`;
});
$('btnExchange').onclick = () => showScreen('screenExchange');
$('confirmDiamondsToCoins').onclick = async () => {
  if (exchangeProcessing) return;
  exchangeProcessing = true;
  $('confirmDiamondsToCoins').disabled = true;
  const amt = Number($('diamondsToCoinsInput').value);
  if (amt < 3 || amt % 3 !== 0) { showModal('Количество должно быть кратно 3 и >=3'); exchangeProcessing = false; $('confirmDiamondsToCoins').disabled = false; return; }
  const coins = Math.floor(amt / 3);
  if (diamonds < amt) { showModal('Недостаточно 💎'); exchangeProcessing = false; $('confirmDiamondsToCoins').disabled = false; return; }
  diamonds -= amt;
  balance += coins;
  saveBalance();
  showModal(`Получено 🪙${coins}`);
  $('diamondsToCoinsInput').value = '';
  $('diamondsToCoinsResult').textContent = '🪙 0';
  $('diamondsToCoinsError').style.display = 'none';
  await new Promise(resolve => setTimeout(resolve, 1000));
  exchangeProcessing = false;
  $('confirmDiamondsToCoins').disabled = false;
};
$('confirmCoinsToDiamonds').onclick = async () => {
  if (exchangeProcessing) return;
  exchangeProcessing = true;
  $('confirmCoinsToDiamonds').disabled = true;
  const amt = Number($('coinsToDiamondsInput').value);
  if (amt < 1) { showModal('Количество >=1'); exchangeProcessing = false; $('confirmCoinsToDiamonds').disabled = false; return; }
  const dias = amt * 2;
  if (balance < amt) { showModal('Недостаточно 🪙'); exchangeProcessing = false; $('confirmCoinsToDiamonds').disabled = false; return; }
  balance -= amt;
  diamonds += dias;
  saveBalance();
  showModal(`Получено 💎${dias}`);
  $('coinsToDiamondsInput').value = '';
  $('coinsToDiamondsResult').textContent = '💎 0';
  await new Promise(resolve => setTimeout(resolve, 1000));
  exchangeProcessing = false;
  $('confirmCoinsToDiamonds').disabled = false;
};

/* Casino logic */
let selectedColor = null;
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedColor = btn.dataset.color;
    $('confirmColorChoice').style.display = 'block';
  };
});
$('btnCasino').onclick = () => { showScreen('screenCasino'); resetCasino(); };
$('btnSlots').onclick = () => showScreen('screenSlots');

function resetCasino() {
  $('rouletteResult').innerHTML = '';
  $('colorResult').innerHTML = '';
  $('goldRushResult').innerHTML = '';
  $('confirmColorChoice').style.display = 'none';
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  selectedColor = null;
  $('confirmGoldRush').style.display = 'none';
  $('luckyBtn').style.display = 'block';
  const won = state.goldRushWon;
  if(won) {
    $('luckyBtn').style.background = 'gray';
    $('luckyBtn').textContent = 'Победа достигнута';
    $('luckyBtn').onclick = () => { showModal('Вы уже покорили лихорадку! Эта удача не повторяется'); };
  } else {
    $('luckyBtn').style.background = 'var(--accent)';
    $('luckyBtn').textContent = 'Повезет';
    $('luckyBtn').onclick = goldRushBet;
  }
  saveBalance();
}

// ... (rest of casino logic remains the same, but call saveBalance() and onStateChange() where needed)

// Gold Rush - set won flag
function goldRushBet() {
  if (balance < 5) { showModal('Недостаточно 🪙'); return; }
  balance -= 5;
  saveBalance();
  $('luckyBtn').style.display = 'none';
  $('confirmGoldRush').style.display = 'block';
  const isJackpot = Math.random() < 0.07;
  $('confirmGoldRush').onclick = () => {
    if (isJackpot) {
      state.goldRushWon = true;
      state.status = 'conqueror';
      // ... (rest of jackpot logic)
      onStateChange();
      // ...
    } else {
      // ... (loss logic)
    }
    resetCasino();
  };
}

// ... (other functions like slots, etc., unchanged except saveBalance calls)

// In buyItem, after purchase:
function buyItem(id){
  // ...
  inventorySave(inv); // Now sets state.inventory = inv; onStateChange();
  // ...
}

// inventorySave now:
function inventorySave(inv){ 
  state.inventory = inv; 
  onStateChange(); 
  updateInventoryUI(); 
}

// Similarly for other state changes

/* ============== GAME CORE ============== */
// ... (rest of the game code remains the same, with saveBalance() calls replaced by onStateChange where appropriate)

function startNewGame(){
  // ...
  const humanName = state.nick || genBotName();
  const humanStatus = state.status || 'none';
  // ...
  // After game end, increment wins if human wins:
  // state.wins++; onStateChange();
}

// Init
updateInventoryUI();
saveBalance();
showScreen('screenIntro');
renderShop();

/* keep global access for debugging */
window._lecho = { startNewGame, renderShop, inventoryLoad: () => state.inventory, inventorySave, onStateChange };
</script>
</body>
</html>
