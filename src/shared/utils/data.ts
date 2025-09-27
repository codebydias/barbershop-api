export function formatDateToBR(date: Date): string {
    return date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}