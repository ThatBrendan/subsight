export function formatLabel(label: string): string {
  return label
    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
}
