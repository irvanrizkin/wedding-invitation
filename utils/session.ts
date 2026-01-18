export type SessionNumber = 0 | 1 | 2;

export const SESSION_LABEL: Record<SessionNumber, string> = {
  0: "Pukul 09.00 - 12.30 WIB",
  1: "Pukul 11.30 - 12.30 WIB",
  2: "Pukul 12.30 - 13.30 WIB",
};

export function getSessionLabel(sessionNumber: number): string {
  if (sessionNumber === 0 || sessionNumber === 1 || sessionNumber === 2) {
    return SESSION_LABEL[sessionNumber];
  }

  return "Sesi tidak diketahui";
}

export function getSessionTitle(sessionNumber: number): string {
  if (sessionNumber === 0) {
    return "Panggih Temanten dan Resepsi";
  }

  return "Resepsi";
}
