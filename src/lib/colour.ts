const HEX_BITS = 16;
const HEX_BITS_PER_CHANNEL = 2;
const RGB_SCALING_FACTOR = 255;

const DARK_THRESHOLD = 0.2;

function hexToHSL(hex: string): [number, number, number] {
  const rgb = hex
    .slice(1)
    .match(new RegExp(`.{${HEX_BITS_PER_CHANNEL}}`, 'g'))!
    .map(hex => parseInt(hex, HEX_BITS) / RGB_SCALING_FACTOR);

  const max = Math.max(...rgb);
  const min = Math.min(...rgb);

  const sum = max + min;
  const diff = max - min;

  const l = sum / 2;

  if (diff === 0) {
    return [0, 0, l];
  }

  const h = l < 0.5 ? diff / sum : diff / (2 - sum);
  const s = diff / (1 - Math.abs(2 * l - 1));
  return [h, s, l];
}

function isDark(hex: string): boolean {
  const [, , l] = hexToHSL(hex);
  return l < DARK_THRESHOLD;
}

export { isDark };
