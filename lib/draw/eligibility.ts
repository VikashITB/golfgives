export function isEligible(
  age: number,
  acceptedRules: boolean
) {
  return age >= 18 && acceptedRules;
}
