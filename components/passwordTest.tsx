const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const hasNumber = /[0-9]/;
const hasSpecialChar = /[^A-Za-z0-9]/;

export function getPasswordScore(password: string) {
  let score = 0;

  if (hasUppercase.test(password)) score++;
  if (hasLowercase.test(password)) score++;
  if (hasNumber.test(password)) score++;
  if (hasSpecialChar.test(password)) score++;
  if (password.length >= 7 && password.length) score += 2;
  if (password.length >= 10 && password.length) score += 2;

  return score;
}

export function getPasswordLevel(score: number) {
  if (score === 0) return "";
  if (score <= 5) return "weak";
  if (score <= 7) return "medium";
  return "strong";
}
