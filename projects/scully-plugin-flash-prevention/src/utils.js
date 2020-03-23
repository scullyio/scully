const headEndTag = `</head>`;

module.exports = {
  appendToHead,
};

async function appendToHead(html, str) {
  const indexOfFirstHeadClose = html.indexOf(headEndTag);
  const start = html.slice(0, indexOfFirstHeadClose);
  const end = html.slice(indexOfFirstHeadClose);
  return `${start}${str}${end}`;
}
