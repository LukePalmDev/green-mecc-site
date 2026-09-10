const BASE = import.meta.env.BASE_URL;

export const asset = (path: string): string =>
  `${BASE}${path.replace(/^\//, '')}`;

const normalizeAssetName = (name: string, nameCase: 'upper' | 'lower'): string => {
  const normalized = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\d+/g, '')
    .replace(/[.'’]/g, '')
    .replace(/[^a-zA-Z]+/g, '-')
    .replace(/^-|-$/g, '');

  return nameCase === 'lower' ? normalized.toLowerCase() : normalized.toUpperCase();
};

export const numberedAsset = (
  directory: string,
  prefix: string,
  order: number,
  name: string,
  extension = 'webp',
  nameCase: 'upper' | 'lower' = 'upper',
): string =>
  asset(
    `${directory}/${prefix.toUpperCase()}${order}-${normalizeAssetName(name, nameCase)}.${extension}`,
  );
