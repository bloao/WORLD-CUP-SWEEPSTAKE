const sweepstakeData = {
  updatedAt: "2026-06-11",
  scoring: {
    "Pot A": { first: 2, second: 1, ro32: 1, ro16: 1, qf: 1, sf: 2, third: 3, runnerUp: 5, winner: 10 },
    "Pot B": { first: 3, second: 1, ro32: 2, ro16: 2, qf: 2, sf: 3, third: 4, runnerUp: 7, winner: 14 },
    "Pot C": { first: 4, second: 2, ro32: 3, ro16: 3, qf: 5, sf: 5, third: 7, runnerUp: 8, winner: 18 },
    "Pot D": { first: 5, second: 3, ro32: 5, ro16: 5, qf: 5, sf: 7, third: 9, runnerUp: 10, winner: 25 },
    "Pot E": { first: 6, second: 3, ro32: 6, ro16: 6, qf: 5, sf: 8, third: 9, runnerUp: 10, winner: 30 },
  },
  entrants: [
    { name: "bloao", photoUrl: "./bloaopfp.JPG", photoPosition: "50% 80%", picks: { "Pot A": "Spain", "Pot B": "Germany", "Pot C": "Norway", "Pot D": "Panama", "Pot E": "South Africa" } },
    { name: "breamy", photoUrl: "./breamypfp.jpg", photoPosition: "50% 64%", picks: { "Pot A": "Netherlands", "Pot B": "United States", "Pot C": "Egypt", "Pot D": "Côte d’Ivoire", "Pot E": "Bosnia and Herzegovina" } },
    { name: "mitch", photoUrl: "./mitchpfp.jpg", photoPosition: "50% 50%", picks: { "Pot A": "Portugal", "Pot B": "Mexico", "Pot C": "Canada", "Pot D": "Paraguay", "Pot E": "Uzbekistan" } },
    { name: "silk", photoUrl: "./silkpfp.jpg", photoPosition: "50% 50%", picks: { "Pot A": "Belgium", "Pot B": "Switzerland", "Pot C": "Austria", "Pot D": "Tunisia", "Pot E": "Cabo Verde" } },
    { name: "lick", photoUrl: "./lickpfp.jpg", photoPosition: "74% 74%", picks: { "Pot A": "Argentina", "Pot B": "Senegal", "Pot C": "Iran", "Pot D": "DR Congo", "Pot E": "Haiti" } },
    { name: "rat", photoUrl: "./ratpfp.JPG", photoPosition: "50% 50%", picks: { "Pot A": "Brazil", "Pot B": "Croatia", "Pot C": "Ecuador", "Pot D": "Türkiye", "Pot E": "Curaçao" } },
    { name: "oja", photoUrl: "./ojapfp.jpg", photoPosition: "50% 60%", picks: { "Pot A": "England", "Pot B": "Japan", "Pot C": "South Korea", "Pot D": "Czech Republic", "Pot E": "New Zealand" } },
    { name: "bill", photoUrl: "./billpfp.jpg", photoPosition: "50% 50%", picks: { "Pot A": "Morocco", "Pot B": "Uruguay", "Pot C": "Algeria", "Pot D": "Scotland", "Pot E": "Ghana" } },
    { name: "gash", photoUrl: "./gashpfp.JPG", photoPosition: "50% 82%", picks: { "Pot A": "France", "Pot B": "Colombia", "Pot C": "Australia", "Pot D": "Qatar", "Pot E": "Saudi Arabia" } },
  ],
  teamResults: {
    Spain: {},
    Germany: {},
    Norway: {},
    Panama: {},
    "South Africa": {},
    Netherlands: {},
    "United States": {},
    Egypt: {},
    "Côte d’Ivoire": {},
    "Bosnia and Herzegovina": {},
    Portugal: {},
    Mexico: {},
    Canada: {},
    Paraguay: {},
    Uzbekistan: {},
    Belgium: {},
    Switzerland: {},
    Austria: {},
    Tunisia: {},
    "Cabo Verde": {},
    Argentina: {},
    Senegal: {},
    Iran: {},
    "DR Congo": {},
    Haiti: {},
    Brazil: {},
    Croatia: {},
    Ecuador: {},
    "Türkiye": {},
    "Curaçao": {},
    England: {},
    Japan: {},
    "South Korea": {},
    "Czech Republic": {},
    "New Zealand": {},
    Morocco: {},
    Uruguay: {},
    Algeria: {},
    Scotland: {},
    Ghana: {},
    France: {},
    Colombia: {},
    Australia: {},
    Qatar: {},
    "Saudi Arabia": {},
  },
  fixtures: [
    { date: "2026-06-14", time: "17:00", match: "Spain vs Germany", team1: "Spain", team2: "Germany" },
    { date: "2026-06-14", time: "17:00", match: "Argentina vs Brazil", team1: "Argentina", team2: "Brazil" },
    { date: "2026-06-15", time: "20:00", match: "England vs Japan", team1: "England", team2: "Japan" },
    { date: "2026-06-16", time: "20:00", match: "France vs Colombia", team1: "France", team2: "Colombia" },
    { date: "2026-06-16", time: "20:00", match: "Portugal vs Mexico", team1: "Portugal", team2: "Mexico" },
    { date: "2026-06-18", time: "14:00", match: "Morocco vs Uruguay", team1: "Morocco", team2: "Uruguay" },
  ],
};

const scoringOrder = [
  ["first", "Finish 1st"],
  ["second", "Finish 2nd"],
  ["ro32", "Win RO32"],
  ["ro16", "Win RO16"],
  ["qf", "Win QF"],
  ["sf", "Win SF"],
  ["third", "3rd Place"],
  ["runnerUp", "Runner-up"],
  ["winner", "Winner"],
];

function titleCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDate(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function initialsFor(name) {
  return name.slice(0, 2).toUpperCase();
}

function avatarImageMarkup(entrant) {
  if (!entrant.photoUrl) {
    return `<span>${initialsFor(entrant.name)}</span>`;
  }

  const style = entrant.photoPosition
    ? ` style="object-position: ${entrant.photoPosition};"`
    : "";

  return `<img src="${entrant.photoUrl}" alt="${entrant.name}"${style} />`;
}

function buildTeamPotLookup() {
  const teamPot = new Map();
  sweepstakeData.entrants.forEach((entrant) => {
    Object.entries(entrant.picks).forEach(([pot, team]) => {
      teamPot.set(team, pot);
    });
  });
  return teamPot;
}

function scoreTeam(team, pot) {
  const result = sweepstakeData.teamResults[team] || {};
  const potScore = sweepstakeData.scoring[pot];
  return scoringOrder.reduce((sum, [key]) => {
    return sum + ((result[key] ? 1 : 0) * potScore[key]);
  }, 0);
}

function computeLeaderboard() {
  return sweepstakeData.entrants
    .map((entrant) => {
      const breakdown = Object.entries(entrant.picks).map(([pot, team]) => ({
        pot,
        team,
        points: scoreTeam(team, pot),
      }));
      const total = breakdown.reduce((sum, item) => sum + item.points, 0);
      return { ...entrant, total, breakdown };
    })
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

function renderHeroSummary(leaderboard) {
  const winner = leaderboard[0];
  const summary = document.getElementById("hero-summary");
  summary.innerHTML = `
    <div class="summary-card accent">
      <span>Current leader</span>
      <strong>${winner.name}</strong>
      <small>${winner.total} pts</small>
    </div>
    <div class="summary-card">
      <span>Players</span>
      <strong>${leaderboard.length}</strong>
      <small>fully unqualified opinions included</small>
    </div>
    <div class="summary-card">
      <span>Fixture clashes</span>
      <strong>${countConflicts()}</strong>
      <small>kickoff overlaps flagged below</small>
    </div>
  `;
}

function renderLeaderboard(leaderboard) {
  const container = document.getElementById("leaderboard-list");
  container.innerHTML = leaderboard
    .map((entrant, index) => {
      const picksMarkup = entrant.breakdown
        .map(
          (item) => `
            <li>
              <span>${item.pot}</span>
              <span>${item.team}</span>
              <strong>${item.points}</strong>
            </li>
          `
        )
        .join("");

      return `
        <article class="leader-row ${index === 0 ? "top" : ""}">
          <div class="rank-chip">${index + 1}</div>
          <div class="avatar ${entrant.photoUrl ? "has-photo" : ""}">
            ${
              avatarImageMarkup(entrant)
            }
          </div>
          <div class="leader-main">
            <div class="leader-head">
              <h3>${entrant.name}</h3>
              <p>${entrant.total} points</p>
            </div>
            <ul class="pick-breakdown">${picksMarkup}</ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPotLeaders(leaderboard) {
  const container = document.getElementById("pot-leaders");
  const winnersByPot = ["Pot A", "Pot B", "Pot C", "Pot D", "Pot E"].map((pot) => {
    const best = [...leaderboard].sort((a, b) => {
      const aPoints = a.breakdown.find((entry) => entry.pot === pot).points;
      const bPoints = b.breakdown.find((entry) => entry.pot === pot).points;
      return bPoints - aPoints || a.name.localeCompare(b.name);
    })[0];
    const pick = best.breakdown.find((entry) => entry.pot === pot);
    return { pot, name: best.name, team: pick.team, points: pick.points };
  });

  container.innerHTML = winnersByPot
    .map(
      (row) => `
        <div class="mini-card">
          <span>${row.pot}</span>
          <strong>${row.name}</strong>
          <small>${row.team}</small>
          <em>${row.points} pts</em>
        </div>
      `
    )
    .join("");
}

function renderEntrants(leaderboard) {
  const container = document.getElementById("entrant-cards");
  container.innerHTML = leaderboard
    .map((entrant) => {
      const picks = Object.entries(entrant.picks)
        .map(
          ([pot, team]) => `
            <div class="tag-row">
              <span>${pot}</span>
              <strong>${team}</strong>
            </div>
          `
        )
        .join("");

      return `
        <article class="entrant-card">
          <div class="entrant-head">
            <div class="avatar ${entrant.photoUrl ? "has-photo" : ""}">
              ${
                avatarImageMarkup(entrant)
              }
            </div>
            <div>
              <h3>${entrant.name}</h3>
              <p>${entrant.total} pts total</p>
            </div>
          </div>
          <div class="entrant-picks">${picks}</div>
        </article>
      `;
    })
    .join("");
}

function countConflicts() {
  const map = new Map();
  sweepstakeData.fixtures.forEach((fixture) => {
    const key = `${fixture.date}_${fixture.time}`;
    map.set(key, (map.get(key) || 0) + 1);
  });
  return [...map.values()].filter((count) => count > 1).reduce((sum, value) => sum + value, 0);
}

function renderFixtures() {
  const counts = new Map();
  sweepstakeData.fixtures.forEach((fixture) => {
    const key = `${fixture.date}_${fixture.time}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  });

  const container = document.getElementById("fixture-list");
  container.innerHTML = sweepstakeData.fixtures
    .map((fixture) => {
      const key = `${fixture.date}_${fixture.time}`;
      const hasConflict = counts.get(key) > 1;
      return `
        <article class="fixture-row ${hasConflict ? "conflict" : ""}">
          <div>
            <p>${formatDate(fixture.date)}</p>
            <strong>${fixture.time}</strong>
          </div>
          <div class="fixture-main">
            <h3>${fixture.match}</h3>
            <p>${fixture.team1} vs ${fixture.team2}</p>
          </div>
          <div class="fixture-flag">
            ${hasConflict ? "Conflict" : "Clear"}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderScoringTable() {
  const table = document.getElementById("scoring-table");
  const headers = ["Pot", ...scoringOrder.map(([, label]) => label)];
  const rows = Object.entries(sweepstakeData.scoring)
    .map(([pot, values]) => {
      const cols = scoringOrder.map(([key]) => `<td>${values[key]}</td>`).join("");
      return `<tr><th>${pot}</th>${cols}</tr>`;
    })
    .join("");

  table.innerHTML = `
    <thead>
      <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
    </thead>
    <tbody>${rows}</tbody>
  `;
}

function renderMeta() {
  document.getElementById("last-updated").textContent = `Updated ${formatDate(sweepstakeData.updatedAt)}`;
}

function init() {
  const leaderboard = computeLeaderboard();
  renderMeta();
  renderHeroSummary(leaderboard);
  renderLeaderboard(leaderboard);
  renderPotLeaders(leaderboard);
  renderEntrants(leaderboard);
  renderFixtures();
  renderScoringTable();
}

init();
