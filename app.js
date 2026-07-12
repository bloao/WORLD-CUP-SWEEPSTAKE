const worldCupFixtures = [
  { kickoffUtc: "2026-06-28T19:00:00Z", match: "South Africa vs Canada", team1: "South Africa", team2: "Canada" },
  { kickoffUtc: "2026-06-29T17:00:00Z", match: "Brazil vs Japan", team1: "Brazil", team2: "Japan" },
  { kickoffUtc: "2026-06-29T20:30:00Z", match: "Germany vs Paraguay", team1: "Germany", team2: "Paraguay" },
  { kickoffUtc: "2026-06-30T01:00:00Z", match: "Netherlands vs Morocco", team1: "Netherlands", team2: "Morocco" },
  { kickoffUtc: "2026-06-30T17:00:00Z", match: "Côte d’Ivoire vs Norway", team1: "Côte d’Ivoire", team2: "Norway" },
  { kickoffUtc: "2026-06-30T21:00:00Z", match: "France vs Sweden", team1: "France", team2: "Sweden" },
  { kickoffUtc: "2026-07-01T01:00:00Z", match: "Mexico vs Ecuador", team1: "Mexico", team2: "Ecuador" },
  { kickoffUtc: "2026-07-01T16:00:00Z", match: "England vs DR Congo", team1: "England", team2: "DR Congo" },
  { kickoffUtc: "2026-07-01T20:00:00Z", match: "Belgium vs Senegal", team1: "Belgium", team2: "Senegal" },
  { kickoffUtc: "2026-07-02T00:00:00Z", match: "United States vs Bosnia and Herzegovina", team1: "United States", team2: "Bosnia and Herzegovina" },
  { kickoffUtc: "2026-07-02T19:00:00Z", match: "Spain vs Austria", team1: "Spain", team2: "Austria" },
  { kickoffUtc: "2026-07-02T23:00:00Z", match: "Portugal vs Croatia", team1: "Portugal", team2: "Croatia" },
  { kickoffUtc: "2026-07-03T03:00:00Z", match: "Switzerland vs Algeria", team1: "Switzerland", team2: "Algeria" },
  { kickoffUtc: "2026-07-03T18:00:00Z", match: "Australia vs Egypt", team1: "Australia", team2: "Egypt" },
  { kickoffUtc: "2026-07-03T22:00:00Z", match: "Argentina vs Cabo Verde", team1: "Argentina", team2: "Cabo Verde" },
  { kickoffUtc: "2026-07-04T01:30:00Z", match: "Colombia vs Ghana", team1: "Colombia", team2: "Ghana" },
];

const sweepstakeData = {
  updatedAt: "2026-07-07",
  scoring: {
    "Pot A": { first: 2, second: 1, groupThird: 0, ro32: 1, ro16: 1, qf: 1, sf: 2, third: 3, runnerUp: 5, winner: 10 },
    "Pot B": { first: 3, second: 1, groupThird: 0, ro32: 2, ro16: 2, qf: 2, sf: 3, third: 4, runnerUp: 7, winner: 14 },
    "Pot C": { first: 4, second: 2, groupThird: 0.5, ro32: 3, ro16: 3, qf: 5, sf: 5, third: 7, runnerUp: 8, winner: 18 },
    "Pot D": { first: 5, second: 3, groupThird: 1, ro32: 5, ro16: 5, qf: 5, sf: 7, third: 9, runnerUp: 10, winner: 25 },
    "Pot E": { first: 6, second: 3, groupThird: 2, ro32: 6, ro16: 6, qf: 5, sf: 8, third: 9, runnerUp: 10, winner: 30 },
  },
  entrants: [
    { name: "bloao", photoUrl: "./bloaopfp.JPG", photoScale: 0.88, photoOffsetX: "2%", photoOffsetY: "-5%", photoRadius: "17px", picks: { "Pot A": "Spain", "Pot B": "Germany", "Pot C": "Norway", "Pot D": "Panama", "Pot E": "South Africa" } },
    { name: "breamy", photoUrl: "./breamypfp.jpg", photoScale: 0.8, photoOffsetX: "0%", photoOffsetY: "-10%", photoRadius: "20px", picks: { "Pot A": "Netherlands", "Pot B": "United States", "Pot C": "Egypt", "Pot D": "Côte d’Ivoire", "Pot E": "Bosnia and Herzegovina" } },
    { name: "mitch", photoUrl: "./mitchpfp.jpg", photoScale: 0.96, photoOffsetX: "2%", photoOffsetY: "0%", photoRadius: "20px", picks: { "Pot A": "Portugal", "Pot B": "Mexico", "Pot C": "Canada", "Pot D": "Paraguay", "Pot E": "Uzbekistan" } },
    { name: "silk", photoUrl: "./silkpfp.jpg", photoScale: 1.66, photoOffsetX: "-16%", photoOffsetY: "11%", photoRadius: "20px", picks: { "Pot A": "Belgium", "Pot B": "Switzerland", "Pot C": "Austria", "Pot D": "Tunisia", "Pot E": "Cabo Verde" } },
    { name: "lick", photoUrl: "./lickpfp.jpg", photoScale: 0.7, photoOffsetX: "7%", photoOffsetY: "-35%", photoRadius: "20px", picks: { "Pot A": "Argentina", "Pot B": "Senegal", "Pot C": "Iran", "Pot D": "DR Congo", "Pot E": "Haiti" } },
    { name: "rat", photoUrl: "./ratpfp.JPG", photoScale: 1, photoOffsetX: "4%", photoOffsetY: "0%", photoRadius: "20px", picks: { "Pot A": "Brazil", "Pot B": "Croatia", "Pot C": "Ecuador", "Pot D": "Türkiye", "Pot E": "Curaçao" } },
    { name: "oja", photoUrl: "./ojapfp.jpg", photoScale: 0.74, photoOffsetX: "0%", photoOffsetY: "-19%", photoRadius: "20px", picks: { "Pot A": "England", "Pot B": "Japan", "Pot C": "South Korea", "Pot D": "Czech Republic", "Pot E": "New Zealand" } },
    { name: "bill", photoUrl: "./billpfp.jpg", photoScale: 0.89, photoOffsetX: "0%", photoOffsetY: "-12%", photoRadius: "20px", picks: { "Pot A": "Morocco", "Pot B": "Uruguay", "Pot C": "Algeria", "Pot D": "Scotland", "Pot E": "Ghana" } },
    { name: "gash", photoUrl: "./gashpfp.JPG", photoScale: 0.7, photoOffsetX: "0%", photoOffsetY: "-33%", photoRadius: "20px", picks: { "Pot A": "France", "Pot B": "Colombia", "Pot C": "Australia", "Pot D": "Qatar", "Pot E": "Saudi Arabia" } },
  ],
  teamResults: {
    Spain: { first: true, ro32: true, ro16: true, qf: true },
    Germany: { first: true },
    Norway: { second: true, ro32: true, ro16: true },
    Panama: {},
    "South Africa": { second: true },
    Netherlands: { first: true },
    "United States": { first: true, ro32: true },
    Egypt: { second: true, ro32: true },
    "Côte d’Ivoire": { second: true },
    "Bosnia and Herzegovina": { groupThird: true },
    Portugal: { second: true, ro32: true },
    Mexico: { first: true, ro32: true },
    Canada: { second: true, ro32: true },
    Paraguay: { groupThird: true, ro32: true },
    Uzbekistan: {},
    Belgium: { first: true, ro32: true, ro16: true },
    Switzerland: { first: true, ro32: true, ro16: true },
    Austria: { second: true },
    Tunisia: {},
    "Cabo Verde": { second: true },
    Argentina: { first: true, ro32: true, ro16: true, qf: true },
    Senegal: { groupThird: true },
    Iran: {},
    "DR Congo": { groupThird: true },
    Haiti: {},
    Brazil: { first: true, ro32: true },
    Croatia: { second: true },
    Ecuador: { groupThird: true },
    "Türkiye": {},
    "Curaçao": {},
    England: { first: true, ro32: true, ro16: true, qf: true },
    Japan: { second: true },
    "South Korea": {},
    "Czech Republic": {},
    "New Zealand": {},
    Morocco: { second: true, ro32: true, ro16: true },
    Uruguay: {},
    Algeria: { groupThird: true },
    Scotland: {},
    Ghana: { groupThird: true },
    France: { first: true, ro32: true, ro16: true, qf: true },
    Colombia: { first: true, ro32: true },
    Australia: { second: true },
    Sweden: { groupThird: true },
    Qatar: {},
    "Saudi Arabia": {},
  },
  fixtures: worldCupFixtures,
};

const scoringOrder = [
  ["first", "Finish 1st"],
  ["second", "Finish 2nd"],
  ["groupThird", "Qualify 3rd"],
  ["ro32", "Win RO32"],
  ["ro16", "Win RO16"],
  ["qf", "Win QF"],
  ["sf", "Win SF"],
  ["third", "3rd Place"],
  ["runnerUp", "Runner-up"],
  ["winner", "Winner"],
];

const groupStandingsSnapshot = {
  updatedAt: "2026-06-28",
  sourceLabel: "SB Nation + Guardian standings snapshot",
  groups: [
    {
      name: "Group A",
      teams: [
        { team: "Mexico", played: 3, wins: 3, draws: 0, losses: 0, gf: 6, ga: 0, gd: 6, points: 9 },
        { team: "South Africa", played: 3, wins: 1, draws: 1, losses: 1, gf: 2, ga: 3, gd: -1, points: 4 },
        { team: "South Korea", played: 3, wins: 1, draws: 0, losses: 2, gf: 2, ga: 3, gd: -1, points: 3 },
        { team: "Czech Republic", played: 3, wins: 0, draws: 1, losses: 2, gf: 2, ga: 6, gd: -4, points: 1 },
      ],
    },
    {
      name: "Group B",
      teams: [
        { team: "Switzerland", played: 3, wins: 2, draws: 1, losses: 0, gf: 7, ga: 3, gd: 4, points: 7 },
        { team: "Canada", played: 3, wins: 1, draws: 1, losses: 1, gf: 8, ga: 3, gd: 5, points: 4 },
        { team: "Bosnia and Herzegovina", played: 3, wins: 1, draws: 1, losses: 1, gf: 5, ga: 6, gd: -1, points: 4 },
        { team: "Qatar", played: 3, wins: 0, draws: 1, losses: 2, gf: 2, ga: 10, gd: -8, points: 1 },
      ],
    },
    {
      name: "Group C",
      teams: [
        { team: "Brazil", played: 3, wins: 2, draws: 1, losses: 0, gf: 7, ga: 1, gd: 6, points: 7 },
        { team: "Morocco", played: 3, wins: 2, draws: 1, losses: 0, gf: 6, ga: 3, gd: 3, points: 7 },
        { team: "Scotland", played: 3, wins: 1, draws: 0, losses: 2, gf: 1, ga: 4, gd: -3, points: 3 },
        { team: "Haiti", played: 3, wins: 0, draws: 0, losses: 3, gf: 2, ga: 8, gd: -6, points: 0 },
      ],
    },
    {
      name: "Group D",
      teams: [
        { team: "United States", played: 3, wins: 2, draws: 0, losses: 1, gf: 8, ga: 4, gd: 4, points: 6 },
        { team: "Australia", played: 3, wins: 1, draws: 1, losses: 1, gf: 2, ga: 2, gd: 0, points: 4 },
        { team: "Paraguay", played: 3, wins: 1, draws: 1, losses: 1, gf: 2, ga: 4, gd: -2, points: 4 },
        { team: "Türkiye", played: 3, wins: 1, draws: 0, losses: 2, gf: 3, ga: 5, gd: -2, points: 3 },
      ],
    },
    {
      name: "Group E",
      teams: [
        { team: "Germany", played: 3, wins: 2, draws: 0, losses: 1, gf: 10, ga: 4, gd: 6, points: 6 },
        { team: "Côte d’Ivoire", played: 3, wins: 2, draws: 0, losses: 1, gf: 4, ga: 2, gd: 2, points: 6 },
        { team: "Ecuador", played: 3, wins: 1, draws: 1, losses: 1, gf: 2, ga: 2, gd: 0, points: 4 },
        { team: "Curaçao", played: 3, wins: 0, draws: 1, losses: 2, gf: 1, ga: 9, gd: -8, points: 1 },
      ],
    },
    {
      name: "Group F",
      teams: [
        { team: "Netherlands", played: 3, wins: 2, draws: 1, losses: 0, gf: 10, ga: 4, gd: 6, points: 7 },
        { team: "Japan", played: 3, wins: 1, draws: 2, losses: 0, gf: 7, ga: 3, gd: 4, points: 5 },
        { team: "Sweden", played: 3, wins: 1, draws: 1, losses: 1, gf: 7, ga: 7, gd: 0, points: 4 },
        { team: "Tunisia", played: 3, wins: 0, draws: 0, losses: 3, gf: 2, ga: 12, gd: -10, points: 0 },
      ],
    },
    {
      name: "Group G",
      teams: [
        { team: "Belgium", played: 3, wins: 1, draws: 2, losses: 0, gf: 6, ga: 2, gd: 4, points: 5 },
        { team: "Egypt", played: 3, wins: 1, draws: 2, losses: 0, gf: 5, ga: 3, gd: 2, points: 5 },
        { team: "Iran", played: 3, wins: 0, draws: 3, losses: 0, gf: 3, ga: 3, gd: 0, points: 3 },
        { team: "New Zealand", played: 3, wins: 0, draws: 1, losses: 2, gf: 4, ga: 10, gd: -6, points: 1 },
      ],
    },
    {
      name: "Group H",
      teams: [
        { team: "Spain", played: 3, wins: 2, draws: 1, losses: 0, gf: 5, ga: 0, gd: 5, points: 7 },
        { team: "Cabo Verde", played: 3, wins: 0, draws: 3, losses: 0, gf: 2, ga: 2, gd: 0, points: 3 },
        { team: "Uruguay", played: 3, wins: 0, draws: 2, losses: 1, gf: 3, ga: 4, gd: -1, points: 2 },
        { team: "Saudi Arabia", played: 3, wins: 0, draws: 2, losses: 1, gf: 1, ga: 5, gd: -4, points: 2 },
      ],
    },
    {
      name: "Group I",
      teams: [
        { team: "France", played: 3, wins: 3, draws: 0, losses: 0, gf: 10, ga: 2, gd: 8, points: 9 },
        { team: "Norway", played: 3, wins: 2, draws: 0, losses: 1, gf: 8, ga: 7, gd: 1, points: 6 },
        { team: "Senegal", played: 3, wins: 1, draws: 0, losses: 2, gf: 8, ga: 6, gd: 2, points: 3 },
        { team: "Iraq", played: 3, wins: 0, draws: 0, losses: 3, gf: 1, ga: 12, gd: -11, points: 0 },
      ],
    },
    {
      name: "Group J",
      teams: [
        { team: "Argentina", played: 3, wins: 3, draws: 0, losses: 0, gf: 8, ga: 1, gd: 7, points: 9 },
        { team: "Austria", played: 3, wins: 1, draws: 1, losses: 1, gf: 6, ga: 6, gd: 0, points: 4 },
        { team: "Algeria", played: 3, wins: 1, draws: 1, losses: 1, gf: 5, ga: 7, gd: -2, points: 4 },
        { team: "Jordan", played: 3, wins: 0, draws: 0, losses: 3, gf: 3, ga: 8, gd: -5, points: 0 },
      ],
    },
    {
      name: "Group K",
      teams: [
        { team: "Colombia", played: 3, wins: 2, draws: 1, losses: 0, gf: 4, ga: 1, gd: 3, points: 7 },
        { team: "Portugal", played: 3, wins: 1, draws: 2, losses: 0, gf: 6, ga: 1, gd: 5, points: 5 },
        { team: "DR Congo", played: 3, wins: 1, draws: 1, losses: 1, gf: 4, ga: 3, gd: 1, points: 4 },
        { team: "Uzbekistan", played: 3, wins: 0, draws: 0, losses: 3, gf: 2, ga: 11, gd: -9, points: 0 },
      ],
    },
    {
      name: "Group L",
      teams: [
        { team: "England", played: 3, wins: 2, draws: 1, losses: 0, gf: 6, ga: 2, gd: 4, points: 7 },
        { team: "Croatia", played: 3, wins: 2, draws: 0, losses: 1, gf: 5, ga: 5, gd: 0, points: 6 },
        { team: "Ghana", played: 3, wins: 1, draws: 1, losses: 1, gf: 2, ga: 2, gd: 0, points: 4 },
        { team: "Panama", played: 3, wins: 0, draws: 0, losses: 3, gf: 0, ga: 4, gd: -4, points: 0 },
      ],
    },
  ],
};

function titleCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function displayName(name) {
  return titleCase(name);
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

function formatKickoff(value) {
  const date = new Date(value);
  return {
    date: new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      timeZone: "Europe/London",
    }).format(date),
    time: new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/London",
    }).format(date),
  };
}

function initialsFor(name) {
  return name.slice(0, 2).toUpperCase();
}

function avatarImageMarkup(entrant) {
  if (!entrant.photoUrl) {
    return `<span>${initialsFor(entrant.name)}</span>`;
  }

  const style = ` style="--photo-scale: ${entrant.photoScale || 1}; --photo-offset-x: ${entrant.photoOffsetX || "0%"}; --photo-offset-y: ${entrant.photoOffsetY || "0%"}; --avatar-radius: ${entrant.photoRadius || "20px"};"`;

  return `<img src="${entrant.photoUrl}" alt="${entrant.name}"${style} />`;
}

function avatarShellMarkup(entrant, extraClass = "") {
  const classes = ["avatar", entrant.photoUrl ? "has-photo" : "", extraClass].filter(Boolean).join(" ");
  return `
    <div class="${classes}">
      ${avatarImageMarkup(entrant)}
    </div>
  `;
}

function scoreTeam(team, pot) {
  const result = sweepstakeData.teamResults[team] || {};
  const potScore = sweepstakeData.scoring[pot];
  return scoringOrder.reduce((sum, [key]) => {
    return sum + ((result[key] ? 1 : 0) * potScore[key]);
  }, 0);
}

function getLeadersForValue(items, valueGetter) {
  const topScore = Math.max(...items.map(valueGetter), 0);
  if (topScore <= 0) {
    return { topScore, leaders: [] };
  }

  return {
    topScore,
    leaders: items.filter((item) => valueGetter(item) === topScore),
  };
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
  const { topScore, leaders } = getLeadersForValue(leaderboard, (entrant) => entrant.total);
  const leaderNames = leaders.map((entrant) => entrant.name);
  const leaderLabel = leaderNames.length === 0 ? "N/A" : leaderNames.map(displayName).join(", ");
  const leaderPointsLabel = leaderNames.length === 0 ? "No points yet" : `${topScore} pts`;
  const contestantMarkup = sweepstakeData.entrants
    .map((entrant) => `
      <div class="contestant-avatar avatar ${entrant.photoUrl ? "has-photo" : ""}">
        ${avatarImageMarkup(entrant)}
      </div>
    `)
    .join("");
  const summary = document.getElementById("hero-summary");
  summary.innerHTML = `
    <div class="summary-card accent">
      <span>Current leader</span>
      <strong>${leaderLabel}</strong>
      <small>${leaderPointsLabel}</small>
    </div>
    <div class="summary-card">
      <span>Contestants</span>
      <strong>${sweepstakeData.entrants.length}</strong>
      <small>In the sweepstake</small>
      <div class="contestant-row">${contestantMarkup}</div>
    </div>
  `;
}

function renderLeaderboard(leaderboard) {
  const container = document.getElementById("leaderboard-list");
  const highestScore = leaderboard[0]?.total ?? 0;
  container.innerHTML = leaderboard
    .map((entrant, index) => {
      const isTopRow = highestScore > 0 && entrant.total === highestScore;
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
        <article class="leader-row ${isTopRow ? "top" : ""}">
          <div class="rank-chip">${index + 1}</div>
          <div class="avatar ${entrant.photoUrl ? "has-photo" : ""}">
            ${
              avatarImageMarkup(entrant)
            }
          </div>
          <div class="leader-main">
            <div class="leader-head">
              <h3>${displayName(entrant.name)}</h3>
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
  const winnersByPot = ["Pot A", "Pot B", "Pot C", "Pot D", "Pot E"].map((pot) => {
    const { topScore, leaders } = getLeadersForValue(leaderboard, (entrant) => {
      return entrant.breakdown.find((entry) => entry.pot === pot).points;
    });
    const teams = leaders.map((entrant) => entrant.breakdown.find((entry) => entry.pot === pot).team);
    return {
      pot,
      name: leaders.length === 0 ? "N/A" : leaders.map((entrant) => displayName(entrant.name)).join(", "),
      team: leaders.length === 0 ? "No points yet" : teams.join(", "),
      points: leaders.length === 0 ? "No points yet" : `${topScore} pts`,
    };
  });

  const markup = winnersByPot
    .map(
      (row) => `
        <div class="mini-card">
          <span>${row.pot}</span>
          <strong>${row.name}</strong>
          <small>${row.team}</small>
          <em>${row.points}</em>
        </div>
      `
    )
    .join("");

  ["pot-leaders", "pot-leaders-mobile"].forEach((id) => {
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = markup;
    }
  });
}

function buildConflictGroups() {
  const teamOwners = new Map();
  sweepstakeData.entrants.forEach((entrant) => {
    Object.values(entrant.picks).forEach((team) => {
      teamOwners.set(team, [...(teamOwners.get(team) || []), entrant.name]);
    });
  });

  const grouped = new Map();
  sweepstakeData.fixtures.forEach((fixture) => {
    const entrants = [...new Set([
      ...(teamOwners.get(fixture.team1) || []),
      ...(teamOwners.get(fixture.team2) || []),
    ])];
    const group = grouped.get(fixture.kickoffUtc) || [];
    group.push({ ...fixture, entrants });
    grouped.set(fixture.kickoffUtc, group);
  });

  return [...grouped.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([kickoffUtc, fixtures]) => {
      const entrants = [...new Set(fixtures.flatMap((fixture) => fixture.entrants))].sort();
      return { kickoffUtc, fixtures, entrants };
    })
    .filter((group) => group.fixtures.length > 1 && group.entrants.length > 1);
}

function countConflicts() {
  return buildConflictGroups().length;
}

function ownersForTeam(team) {
  return sweepstakeData.entrants
    .filter((entrant) => Object.values(entrant.picks).includes(team))
    .map((entrant) => displayName(entrant.name));
}

function renderFixtures() {
  const conflicts = buildConflictGroups();

  if (conflicts.length === 0) {
    const emptyMarkup = `
      <article class="fixture-row">
        <div class="fixture-main">
          <h3>No clashes yet</h3>
          <p>No overlapping kickoff slots involve different people.</p>
        </div>
      </article>
    `;
    ["fixture-list", "fixture-list-mobile"].forEach((id) => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = emptyMarkup;
      }
    });
    return;
  }

  const markup = conflicts
    .map((group) => {
      const kickoff = formatKickoff(group.kickoffUtc);
      const games = group.fixtures
        .map((fixture) => {
          const team1Owners = ownersForTeam(fixture.team1);
          const team2Owners = ownersForTeam(fixture.team2);

          return `
          <div class="fixture-game">
            <div class="fixture-matchup">
              <div class="fixture-team">
                <strong>${fixture.team1}</strong>
                <small>${team1Owners.join(", ") || "No one"}</small>
              </div>
              <div class="fixture-versus">vs</div>
              <div class="fixture-team">
                <strong>${fixture.team2}</strong>
                <small>${team2Owners.join(", ") || "No one"}</small>
              </div>
            </div>
          </div>
        `;
        })
        .join("");

      return `
        <article class="fixture-row conflict">
          <div class="fixture-slot">
            <div>
              <p>${kickoff.date}</p>
              <strong>${kickoff.time}</strong>
            </div>
            <div class="fixture-flag">Clash</div>
          </div>
          <div class="fixture-main">
            <h3>${group.entrants.map(displayName).join(", ")}</h3>
          </div>
          <div class="fixture-games">${games}</div>
        </article>
      `;
    })
    .join("");

  ["fixture-list", "fixture-list-mobile"].forEach((id) => {
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = markup;
    }
  });
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

function ownerForTeam(team) {
  return sweepstakeData.entrants.find((entrant) => Object.values(entrant.picks).includes(team)) || null;
}

function potForTeam(team) {
  for (const entrant of sweepstakeData.entrants) {
    for (const [pot, pickedTeam] of Object.entries(entrant.picks)) {
      if (pickedTeam === team) {
        return pot.replace("Pot ", "");
      }
    }
  }
  return "";
}

function ownerMarkup(team) {
  const entrant = ownerForTeam(team);
  if (!entrant) {
    return `
      <div class="table-row-owner">
        <div class="avatar"><span>--</span></div>
      </div>
    `;
  }

  return `
    <div class="table-row-owner">
      ${avatarShellMarkup(entrant)}
    </div>
  `;
}

function renderGroupStageTables() {
  const container = document.getElementById("group-stage-tables");
  const rowsByGroup = groupStandingsSnapshot.groups.map((group) => {
    const body = group.teams
      .map(
        (row, index) => `
          <tr>
            <td class="table-rank">${index + 1}</td>
            <td class="table-owner-cell">
              ${ownerMarkup(row.team)}
            </td>
            <td>
              <div class="table-team-cell">
                <span class="table-pot-letter">${potForTeam(row.team)}</span>
                <strong>${row.team}</strong>
              </div>
            </td>
            <td>${row.played}</td>
            <td>${row.wins}</td>
            <td>${row.draws}</td>
            <td>${row.losses}</td>
            <td>${row.gf}</td>
            <td>${row.ga}</td>
            <td>${row.gd > 0 ? `+${row.gd}` : row.gd}</td>
            <td class="table-points">${row.points}</td>
          </tr>
        `
      )
      .join("");

    return `
      <article class="table-card">
        <h3>${group.name}</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Owner</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </article>
    `;
  });

  container.innerHTML = rowsByGroup.join("");
  document.getElementById("group-stage-note").textContent = `${groupStandingsSnapshot.sourceLabel} · ${formatDate(groupStandingsSnapshot.updatedAt)}`;
}

function setActiveView(view) {
  document.body.dataset.view = view;
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === view);
  });
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
  document.getElementById("nav-drawer").setAttribute("aria-hidden", "true");
  document.getElementById("menu-overlay").hidden = true;
}

function openMenu() {
  document.body.classList.add("menu-open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "true");
  document.getElementById("nav-drawer").setAttribute("aria-hidden", "false");
  document.getElementById("menu-overlay").hidden = false;
}

function syncViewForViewport() {
  const currentView = document.body.dataset.view || "home";
  const isCompact = window.matchMedia("(max-width: 1100px)").matches;

  if (!isCompact && (currentView === "pot-winners" || currentView === "conflict-tracker")) {
    setActiveView("home");
  }
}

function bindNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const drawerClose = document.getElementById("drawer-close");
  const overlay = document.getElementById("menu-overlay");

  menuToggle.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
      return;
    }
    openMenu();
  });

  drawerClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveView(button.dataset.viewTarget);
      closeMenu();
    });
  });

  window.addEventListener("resize", syncViewForViewport);
}

function init() {
  const leaderboard = computeLeaderboard();
  setActiveView("home");
  bindNavigation();
  syncViewForViewport();
  renderMeta();
  renderHeroSummary(leaderboard);
  renderLeaderboard(leaderboard);
  renderPotLeaders(leaderboard);
  renderFixtures();
  renderScoringTable();
  renderGroupStageTables();
}

init();
