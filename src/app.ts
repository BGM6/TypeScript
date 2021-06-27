const helper = (str: string) => {
  const hash = {} as any;
  for (let char of str.toLowerCase()) {
    hash[char] ? hash[char]++ : hash[char] = 1;
  }
  return hash;
}

const isAnagram = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false;
  const hash = helper(str1);

  for (let char of str2) {
    if (!hash[char]) return false;
    else hash[char] -= 1;
  }
  return true;
}

console.log(isAnagram('cinema', 'iceman'))