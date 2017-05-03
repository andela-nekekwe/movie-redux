export const GENRES = [
  'action',
  'romance',
  'comedy',
  'horror',
  'adventure',
  'crime',
  'fantasy',
  'biography'
];

export const GENRES_MAP = GENRES.reduce((obj, genre) =>
  Object.assign({}, obj, {
    [genre]: 1,
  }), {});

export const IMAGE_SIZES = {
  LARGE: 't300x300',
  XLARGE: 't500x500',
};
