import { format, parseISO } from 'date-fns';

export function formatDateWithSuffix(dateStr: string): string {
  const date = parseISO(dateStr);

  const day = format(date, 'd');
  const month = format(date, 'MMMM');
  const year = format(date, 'yyyy');
  const dayWithSuffix = getOrdinalSuffix(Number(day));

  return `${month} ${dayWithSuffix}, ${year}`;
}

function getOrdinalSuffix(day: number): string {
  const j = day % 10;
  const k = day % 100;
  if (j === 1 && k !== 11) return `${day}st`;
  if (j === 2 && k !== 12) return `${day}nd`;
  if (j === 3 && k !== 13) return `${day}rd`;
  return `${day}th`;
}