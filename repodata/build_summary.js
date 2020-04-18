
// this is cut/paste from running the following, manually in a browser
// https://api.github.com/users/alpiepho/repos?per_page=100&page=1
// https://api.github.com/users/alpiepho/repos?per_page=100&page=2
let jsonData = require('./list.json')

header = '\
---\n\
title: Github Repos\n\
date: "2020-04-16"\n\
description: "Summary of my Github Repos"\n\
---\n\
\n\
(Warning: many images) This a sumary of all the Github Repos I have added over the years.  Some are forks of other projects with minor changes.  Most are orignal works.\n\
\n\
**NOTE:** This page is generated from a set of JSON data gathered from Github.\n\
\n\
**NOTE:** This lists 105 repos, while Github counts 114.  I think it is public vs. private.\n\
\n\
\n';

// these are extra notes to be aded to the generated summary page based on the repo name
extra = [
  {
    "name": "alpine",
    "notes": "Wanted to see how this worked.",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "any-counter",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "anycounter-experiments",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "any_counter_flutter",
    "notes": "Started, but didn' get very far with Dart :(",
    "ideas": ""
  },
  {
    "name": "arduino_12v_led",
    "notes": "Keeping as a reference.",
    "ideas": ""
  },
  {
    "name": "awesome-actions",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "code_challenges",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "css-grid-resume",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "css-grid-resume-mine",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "css-whack-a-mole",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "daemon-challenge",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "esp32-dht11",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "esp32-pir",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "examples",
    "notes": "Keep around as a reminder to get back to this UI for Go language.",
    "ideas": "TODO: remove fork??"
  },
  {
    "name": "fcc-be-file-metadata-ms",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-be-image-search-ms",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-be-req-header-parser-ms",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-be-timestamp-ms",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-be-url-shortener-ms",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-be-voting-app",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-barchart",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-forcedirect",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-gameoflife",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-heatmap",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-leaderboard",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-markdown-previewer",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-recipebox",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-roguelike-game",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-dv-scatterchart",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-fe-simon-game",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-fe-tic-tac-toe",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-fe-tribute",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "fcc-voting-app",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "gatsby",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "gatsby-gh-pages-action",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "gatsby-hooks-todo",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "gatsby-source-github-api",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "gatsby-starter-cv",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "gatsby-starter-slides-theme",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "gc-stats",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "gitprime-patterns",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "globe_bank_php_sql_example",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "go_esst",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "go_tour",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "go_wasm",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "junit-plugin",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "lcwf-daily-jobs-summary",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "leadership",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "markdownLinkTest",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "meld",
    "notes": "Forked this in hopes of fixing an issue.  Author recently completed the fix",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "mental-models",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "my-blog",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "my-blog2",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "my-coronavirus-map",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "my-gatsby-project",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "my-gatsby-project-netlify",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "pi-gen",
    "notes": "TODO: find my version",
    "ideas": "TODO: remove fork?"
  },
  {
    "name": "project-portfolio",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "project-portfolio-html",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "project-portfolio0",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "project-portfolio1",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "project-portfolio2",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "project-portfolio3",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "pup-parse-bsb",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "pure-css-daily-challenges",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "pwa-presentation",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "py-gists",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "py-parse-bsb",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "react-colors",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "react-dice",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "react-grid-layout",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "react-hooks-todo",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "react-native-web-series",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "react-stats-bsb",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "rpi_parking_sensor",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "rpn-calc-chrome-extension",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "rpn-calc-vscode-extension",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "rpn-hex-calculator-mobile",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "scrapy_examples",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "scrapy_learning",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "simple-score-vb-error",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "simple-score-vb-serve",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "simple-score-volleyball-pwa",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-all",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-bauer",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-github",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-larimer-county-workforce-development",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-linkedin",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-madwire",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-nutrien",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-portfolio2",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-template",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "site-evaluation-triplecrown",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "state-web-development-2018-2019-withD3-pwa",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "state-web-development-2018-2019-withD3-static",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "tc-red-18u-summer-2017",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "techstack",
    "notes": "",
    "ideas": "TODO: remove fork"
  },
  {
    "name": "terms-pwa-starter",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "tetris-with-pygame",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "tour",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "ubuntu-18.04-server-setup",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "vscode",
    "notes": "No current changes at this time.  Created a fork to better understand how this awesome tool works.",
    "ideas": "Would like to add a 'meld' like diff; would like to add a smart logfile diff that ignores marked timestamps."
  },
  {
    "name": "vscode-diff",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "vscode-hints",
    "notes": "",
    "ideas": ""
  },
  {
    "name": "website-content",
    "notes": "Forked as a reminder of these ebooks and tutorials",
    "ideas": ""
  },
]

function inExtra(name) {
  for (i=0; i < extra.length; i++) {
    if (name.trim() == extra[i].name.trim())
      return [extra[i].notes, extra[i].ideas];
  }
  return ["", ""];
}


console.log(header)

// DEBUG: dump names in order so they can be cut/paste
// jsonData.forEach(element => { 
//   console.log("  {");
//   console.log("    \"name\": \"" + element.name + "\",");
//   //console.log("    \"description\": \"" + element.description + "\",");
//   [ notes, ideas ] = inExtra(element.name);
//   console.log("    \"notes\": \"" + notes + "\",");
//   console.log("    \"ideas\": \"" + ideas + "\"");
//   console.log("  },");
// }); 

jsonData.forEach((element, index) => { 
  forkStr = "";
  if (element.fork) forkStr = "<span style=\"color:orange;font-weight:200\">[fork]</span> ";
  languageStr = "";
  if (element.language) languageStr = "<span style=\"color:grey;font-weight:200\">[" + element.language.toLowerCase() + "]</span> ";
  console.log("### " + (index+1) + ") " + forkStr + element.name  + languageStr);
  if (element.png) {
    console.log("[](../assets/github-repos__screenshot-" + element.id + ".png)");
  }
  console.log("[" + element.name + "](" + element.html_url + "/blob/master/README.md)");
  description = "(see link)";
  if (element.description) description = element.description;
  console.log(": " + description);
  [ notes, ideas ] = inExtra(element.name);
  if (notes) console.log("- " + notes);
  if (ideas) console.log("- " + ideas);
  console.log("");
}); 
