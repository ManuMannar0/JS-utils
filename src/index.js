import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>A collection of js utils - look in console</h1>
`;

const check = "/";
const str1 = "cat/pub/real/";
const str2 = "cat/pub/real/";

/** count all characters in a string */
const countChars = (str1, check) => {
  const counts = {};
  for (const s of str1) {
    if (counts[s]) {
      counts[s]++;
    } else {
      counts[s] = 1;
    }
  }
  return counts;
};
console.log(countChars(str1, check));

/** count a specific character in a string */
const countSpecificChar = (str2, check) => {
  const counts = {};
  for (const s of str2) {
    if (s === check) {
      if (counts[s]) {
        counts[s]++;
      } else {
        counts[s] = 1;
      }
    }
  }
  return counts;
};
console.log(countSpecificChar(str2, check));
