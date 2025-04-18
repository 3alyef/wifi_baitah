export default function isRTL(text: string): boolean {
  if (text.length === 0) return false;

  const firstChar = text[0];
  const code = firstChar.charCodeAt(0);

  // Verifica se o código Unicode está dentro dos intervalos para árabe ou hebraico
  return (
    (code >= 0x0590 && code <= 0x05ff) || (code >= 0x0600 && code <= 0x06ff)
  );
}
