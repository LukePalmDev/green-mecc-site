const BASE = import.meta.env.BASE_URL;

export const asset = (path: string): string =>
  `${BASE}${path.replace(/^\//, '')}`;

const normalizeAssetName = (
  name: string,
  nameCase: 'upper' | 'lower',
  stripNumbers: boolean,
): string => {
  const withoutAccents = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const normalized = (stripNumbers ? withoutAccents.replace(/\d+/g, '') : withoutAccents)
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
  stripNumbers = true,
): string =>
  asset(
    `${directory}/${prefix.toUpperCase()}${order}-${normalizeAssetName(name, nameCase, stripNumbers)}.${extension}`,
  );
