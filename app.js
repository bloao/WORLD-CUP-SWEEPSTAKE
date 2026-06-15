const worldCupFixtures = [
  { kickoffUtc: "2026-06-11T19:00:00Z", match: "Mexico vs South Africa", team1: "Mexico", team2: "South Africa" },
  { kickoffUtc: "2026-06-12T02:00:00Z", match: "South Korea vs Czech Republic", team1: "South Korea", team2: "Czech Republic" },
  { kickoffUtc: "2026-06-13T01:00:00Z", match: "United States vs Paraguay", team1: "United States", team2: "Paraguay" },
  { kickoffUtc: "2026-06-13T19:00:00Z", match: "Qatar vs Switzerland", team1: "Qatar", team2: "Switzerland" },
  { kickoffUtc: "2026-06-13T22:00:00Z", match: "Brazil vs Morocco", team1: "Brazil", team2: "Morocco" },
  { kickoffUtc: "2026-06-14T01:00:00Z", match: "Haiti vs Scotland", team1: "Haiti", team2: "Scotland" },
  { kickoffUtc: "2026-06-14T04:00:00Z", match: "Australia vs Türkiye", team1: "Australia", team2: "Türkiye" },
  { kickoffUtc: "2026-06-14T17:00:00Z", match: "Germany vs Curaçao", team1: "Germany", team2: "Curaçao" },
  { kickoffUtc: "2026-06-14T20:00:00Z", match: "Netherlands vs Japan", team1: "Netherlands", team2: "Japan" },
  { kickoffUtc: "2026-06-14T23:00:00Z", match: "Côte d’Ivoire vs Ecuador", team1: "Côte d’Ivoire", team2: "Ecuador" },
  { kickoffUtc: "2026-06-15T02:00:00Z", match: "Sweden vs Tunisia", team1: "Sweden", team2: "Tunisia" },
  { kickoffUtc: "2026-06-15T16:00:00Z", match: "Spain vs Cabo Verde", team1: "Spain", team2: "Cabo Verde" },
  { kickoffUtc: "2026-06-15T19:00:00Z", match: "Belgium vs Egypt", team1: "Belgium", team2: "Egypt" },
  { kickoffUtc: "2026-06-15T22:00:00Z", match: "Saudi Arabia vs Uruguay", team1: "Saudi Arabia", team2: "Uruguay" },
  { kickoffUtc: "2026-06-16T01:00:00Z", match: "Iran vs New Zealand", team1: "Iran", team2: "New Zealand" },
  { kickoffUtc: "2026-06-16T19:00:00Z", match: "France vs Senegal", team1: "France", team2: "Senegal" },
  { kickoffUtc: "2026-06-16T22:00:00Z", match: "Iraq vs Norway", team1: "Iraq", team2: "Norway" },
  { kickoffUtc: "2026-06-17T01:00:00Z", match: "Argentina vs Algeria", team1: "Argentina", team2: "Algeria" },
  { kickoffUtc: "2026-06-17T04:00:00Z", match: "Austria vs Jordan", team1: "Austria", team2: "Jordan" },
  { kickoffUtc: "2026-06-17T17:00:00Z", match: "Portugal vs DR Congo", team1: "Portugal", team2: "DR Congo" },
  { kickoffUtc: "2026-06-17T20:00:00Z", match: "England vs Croatia", team1: "England", team2: "Croatia" },
  { kickoffUtc: "2026-06-17T23:00:00Z", match: "Ghana vs Panama", team1: "Ghana", team2: "Panama" },
  { kickoffUtc: "2026-06-18T02:00:00Z", match: "Uzbekistan vs Colombia", team1: "Uzbekistan", team2: "Colombia" },
  { kickoffUtc: "2026-06-18T16:00:00Z", match: "Czech Republic vs South Africa", team1: "Czech Republic", team2: "South Africa" },
  { kickoffUtc: "2026-06-18T19:00:00Z", match: "Switzerland vs Bosnia and Herzegovina", team1: "Switzerland", team2: "Bosnia and Herzegovina" },
  { kickoffUtc: "2026-06-18T22:00:00Z", match: "Canada vs Qatar", team1: "Canada", team2: "Qatar" },
  { kickoffUtc: "2026-06-19T01:00:00Z", match: "Mexico vs South Korea", team1: "Mexico", team2: "South Korea" },
  { kickoffUtc: "2026-06-19T19:00:00Z", match: "United States vs Australia", team1: "United States", team2: "Australia" },
  { kickoffUtc: "2026-06-19T22:00:00Z", match: "Scotland vs Morocco", team1: "Scotland", team2: "Morocco" },
  { kickoffUtc: "2026-06-20T00:30:00Z", match: "Brazil vs Haiti", team1: "Brazil", team2: "Haiti" },
  { kickoffUtc: "2026-06-20T03:00:00Z", match: "Türkiye vs Paraguay", team1: "Türkiye", team2: "Paraguay" },
  { kickoffUtc: "2026-06-20T17:00:00Z", match: "Netherlands vs Sweden", team1: "Netherlands", team2: "Sweden" },
  { kickoffUtc: "2026-06-20T20:00:00Z", match: "Germany vs Côte d’Ivoire", team1: "Germany", team2: "Côte d’Ivoire" },
  { kickoffUtc: "2026-06-21T00:00:00Z", match: "Ecuador vs Curaçao", team1: "Ecuador", team2: "Curaçao" },
  { kickoffUtc: "2026-06-21T04:00:00Z", match: "Tunisia vs Japan", team1: "Tunisia", team2: "Japan" },
  { kickoffUtc: "2026-06-21T16:00:00Z", match: "Spain vs Saudi Arabia", team1: "Spain", team2: "Saudi Arabia" },
  { kickoffUtc: "2026-06-21T19:00:00Z", match: "Belgium vs Iran", team1: "Belgium", team2: "Iran" },
  { kickoffUtc: "2026-06-21T22:00:00Z", match: "Uruguay vs Cabo Verde", team1: "Uruguay", team2: "Cabo Verde" },
  { kickoffUtc: "2026-06-22T01:00:00Z", match: "New Zealand vs Egypt", team1: "New Zealand", team2: "Egypt" },
  { kickoffUtc: "2026-06-22T17:00:00Z", match: "Argentina vs Austria", team1: "Argentina", team2: "Austria" },
  { kickoffUtc: "2026-06-22T21:00:00Z", match: "France vs Iraq", team1: "France", team2: "Iraq" },
  { kickoffUtc: "2026-06-23T00:00:00Z", match: "Norway vs Senegal", team1: "Norway", team2: "Senegal" },
  { kickoffUtc: "2026-06-23T03:00:00Z", match: "Jordan vs Algeria", team1: "Jordan", team2: "Algeria" },
  { kickoffUtc: "2026-06-23T17:00:00Z", match: "Portugal vs Uzbekistan", team1: "Portugal", team2: "Uzbekistan" },
  { kickoffUtc: "2026-06-23T20:00:00Z", match: "England vs Ghana", team1: "England", team2: "Ghana" },
  { kickoffUtc: "2026-06-23T23:00:00Z", match: "Panama vs Croatia", team1: "Panama", team2: "Croatia" },
  { kickoffUtc: "2026-06-24T02:00:00Z", match: "Colombia vs DR Congo", team1: "Colombia", team2: "DR Congo" },
  { kickoffUtc: "2026-06-24T19:00:00Z", match: "Bosnia and Herzegovina vs Qatar", team1: "Bosnia and Herzegovina", team2: "Qatar" },
  { kickoffUtc: "2026-06-24T19:00:00Z", match: "Switzerland vs Canada", team1: "Switzerland", team2: "Canada" },
  { kickoffUtc: "2026-06-24T22:00:00Z", match: "Morocco vs Haiti", team1: "Morocco", team2: "Haiti" },
  { kickoffUtc: "2026-06-24T22:00:00Z", match: "Scotland vs Brazil", team1: "Scotland", team2: "Brazil" },
  { kickoffUtc: "2026-06-25T01:00:00Z", match: "Czech Republic vs Mexico", team1: "Czech Republic", team2: "Mexico" },
  { kickoffUtc: "2026-06-25T01:00:00Z", match: "South Africa vs South Korea", team1: "South Africa", team2: "South Korea" },
  { kickoffUtc: "2026-06-25T20:00:00Z", match: "Curaçao vs Côte d’Ivoire", team1: "Curaçao", team2: "Côte d’Ivoire" },
  { kickoffUtc: "2026-06-25T20:00:00Z", match: "Ecuador vs Germany", team1: "Ecuador", team2: "Germany" },
  { kickoffUtc: "2026-06-25T23:00:00Z", match: "Japan vs Sweden", team1: "Japan", team2: "Sweden" },
  { kickoffUtc: "2026-06-25T23:00:00Z", match: "Tunisia vs Netherlands", team1: "Tunisia", team2: "Netherlands" },
  { kickoffUtc: "2026-06-26T02:00:00Z", match: "Paraguay vs Australia", team1: "Paraguay", team2: "Australia" },
  { kickoffUtc: "2026-06-26T02:00:00Z", match: "Türkiye vs United States", team1: "Türkiye", team2: "United States" },
  { kickoffUtc: "2026-06-26T19:00:00Z", match: "Norway vs France", team1: "Norway", team2: "France" },
  { kickoffUtc: "2026-06-26T19:00:00Z", match: "Senegal vs Iraq", team1: "Senegal", team2: "Iraq" },
  { kickoffUtc: "2026-06-27T00:00:00Z", match: "Cabo Verde vs Saudi Arabia", team1: "Cabo Verde", team2: "Saudi Arabia" },
  { kickoffUtc: "2026-06-27T00:00:00Z", match: "Uruguay vs Spain", team1: "Uruguay", team2: "Spain" },
  { kickoffUtc: "2026-06-27T03:00:00Z", match: "Egypt vs Iran", team1: "Egypt", team2: "Iran" },
  { kickoffUtc: "2026-06-27T03:00:00Z", match: "New Zealand vs Belgium", team1: "New Zealand", team2: "Belgium" },
  { kickoffUtc: "2026-06-27T21:00:00Z", match: "Croatia vs Ghana", team1: "Croatia", team2: "Ghana" },
  { kickoffUtc: "2026-06-27T21:00:00Z", match: "Panama vs England", team1: "Panama", team2: "England" },
  { kickoffUtc: "2026-06-27T23:30:00Z", match: "Colombia vs Portugal", team1: "Colombia", team2: "Portugal" },
  { kickoffUtc: "2026-06-27T23:30:00Z", match: "DR Congo vs Uzbekistan", team1: "DR Congo", team2: "Uzbekistan" },
  { kickoffUtc: "2026-06-28T02:00:00Z", match: "Algeria vs Austria", team1: "Algeria", team2: "Austria" },
  { kickoffUtc: "2026-06-28T02:00:00Z", match: "Jordan vs Argentina", team1: "Jordan", team2: "Argentina" },
];

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
  fixtures: worldCupFixtures,
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

const groupStandingsSnapshot = {
  updatedAt: "2026-06-15T17:58:00Z",
  sourceLabel: "SB Nation standings snapshot",
  groups: [
    {
      name: "Group A",
      teams: [
        { team: "Mexico", played: 1, wins: 1, draws: 0, losses: 0, gf: 2, ga: 0, gd: 2, points: 3 },
        { team: "South Korea", played: 1, wins: 1, draws: 0, losses: 0, gf: 2, ga: 1, gd: 1, points: 3 },
        { team: "Czech Republic", played: 1, wins: 0, draws: 0, losses: 1, gf: 1, ga: 2, gd: -1, points: 0 },
        { team: "South Africa", played: 1, wins: 0, draws: 0, losses: 1, gf: 0, ga: 2, gd: -2, points: 0 },
      ],
    },
    {
      name: "Group B",
      teams: [
        { team: "Canada", played: 1, wins: 0, draws: 1, losses: 0, gf: 1, ga: 1, gd: 0, points: 1 },
        { team: "Bosnia and Herzegovina", played: 1, wins: 0, draws: 1, losses: 0, gf: 1, ga: 1, gd: 0, points: 1 },
        { team: "Qatar", played: 1, wins: 0, draws: 1, losses: 0, gf: 1, ga: 1, gd: 0, points: 1 },
        { team: "Switzerland", played: 1, wins: 0, draws: 1, losses: 0, gf: 1, ga: 1, gd: 0, points: 1 },
      ],
    },
    {
      name: "Group C",
      teams: [
        { team: "Scotland", played: 1, wins: 1, draws: 0, losses: 0, gf: 1, ga: 0, gd: 1, points: 3 },
        { team: "Brazil", played: 1, wins: 0, draws: 1, losses: 0, gf: 1, ga: 1, gd: 0, points: 1 },
        { team: "Morocco", played: 1, wins: 0, draws: 1, losses: 0, gf: 1, ga: 1, gd: 0, points: 1 },
        { team: "Haiti", played: 1, wins: 0, draws: 0, losses: 1, gf: 0, ga: 1, gd: -1, points: 0 },
      ],
    },
    {
      name: "Group D",
      teams: [
        { team: "United States", played: 1, wins: 1, draws: 0, losses: 0, gf: 4, ga: 1, gd: 3, points: 3 },
        { team: "Australia", played: 1, wins: 1, draws: 0, losses: 0, gf: 2, ga: 0, gd: 2, points: 3 },
        { team: "Türkiye", played: 1, wins: 0, draws: 0, losses: 1, gf: 0, ga: 2, gd: -2, points: 0 },
        { team: "Paraguay", played: 1, wins: 0, draws: 0, losses: 1, gf: 1, ga: 4, gd: -3, points: 0 },
      ],
    },
    {
      name: "Group E",
      teams: [
        { team: "Germany", played: 1, wins: 1, draws: 0, losses: 0, gf: 7, ga: 1, gd: 6, points: 3 },
        { team: "Côte d’Ivoire", played: 1, wins: 1, draws: 0, losses: 0, gf: 1, ga: 0, gd: 1, points: 3 },
        { team: "Ecuador", played: 1, wins: 0, draws: 0, losses: 1, gf: 0, ga: 1, gd: -1, points: 0 },
        { team: "Curaçao", played: 1, wins: 0, draws: 0, losses: 1, gf: 1, ga: 7, gd: -6, points: 0 },
      ],
    },
    {
      name: "Group F",
      teams: [
        { team: "Sweden", played: 1, wins: 1, draws: 0, losses: 0, gf: 5, ga: 1, gd: 4, points: 3 },
        { team: "Netherlands", played: 1, wins: 0, draws: 1, losses: 0, gf: 2, ga: 2, gd: 0, points: 1 },
        { team: "Japan", played: 1, wins: 0, draws: 1, losses: 0, gf: 2, ga: 2, gd: 0, points: 1 },
        { team: "Tunisia", played: 1, wins: 0, draws: 0, losses: 1, gf: 1, ga: 5, gd: -4, points: 0 },
      ],
    },
    {
      name: "Group G",
      teams: [
        { team: "Belgium", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Egypt", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Iran", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "New Zealand", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      ],
    },
    {
      name: "Group H",
      teams: [
        { team: "Spain", played: 1, wins: 0, draws: 1, losses: 0, gf: 0, ga: 0, gd: 0, points: 1 },
        { team: "Cabo Verde", played: 1, wins: 0, draws: 1, losses: 0, gf: 0, ga: 0, gd: 0, points: 1 },
        { team: "Saudi Arabia", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Uruguay", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      ],
    },
    {
      name: "Group I",
      teams: [
        { team: "France", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Senegal", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Iraq", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Norway", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      ],
    },
    {
      name: "Group J",
      teams: [
        { team: "Argentina", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Algeria", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Austria", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Jordan", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      ],
    },
    {
      name: "Group K",
      teams: [
        { team: "Portugal", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "DR Congo", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Uzbekistan", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Colombia", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      ],
    },
    {
      name: "Group L",
      teams: [
        { team: "England", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Croatia", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Ghana", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
        { team: "Panama", played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, gd: 0, points: 0 },
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
      <span>Fixture clashes</span>
      <strong>${countConflicts()}</strong>
      <small>Contestants</small>
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
            <td><strong>${row.team}</strong></td>
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
