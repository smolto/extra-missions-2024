export function formatDate(date: string) {
  try {
    const dateSplitted = date.split('-');

    return `${dateSplitted[2]}/${dateSplitted[1]}/${dateSplitted[0]}`;
  } catch (error) {
    return date;
  }
}