// @flow
import { GAME_FIELD_HEIGHT, GAME_FIELD_WIDTH } from "../constants";
import { sortBy } from "ramda";
import type { BucketPicture, Position } from "../types";

export const calcPictureSize = (width: number, height: number) => {
  const pictureWidth = width / GAME_FIELD_WIDTH - 5;
  const pictureHeight = height / GAME_FIELD_HEIGHT - 5;

  return Math.min(pictureWidth, pictureHeight);
};

export const isMoveAllowed = (
  bucket: BucketPicture[],
  nextPosition: Position
) => {
  return (
    nextPosition.y < GAME_FIELD_HEIGHT &&
    bucket.find(
      b => b.position.x === nextPosition.x && b.position.y === nextPosition.y
    ) == null
  );
};

const offsets = [
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 },
  { dx: 0, dy: -1 },
  { dx: 0, dy: 1 }
];

const getNeighbors = position =>
  offsets.map(({ dx, dy }) => ({ x: position.x + dx, y: position.y + dy }));

const byPosition = (position: Position) => (pos: Position) =>
  pos.x === position.x && pos.y === position.y;

const byCategory = category => picture => picture.category === category;

export const canDisappear = (
  bucket: BucketPicture[],
  currentPicture: BucketPicture
) => {
  const neighborPositions = getNeighbors(currentPicture.position);
  const neighbors = bucket.filter(
    bPicture => neighborPositions.find(byPosition(bPicture.position)) != null
  );

  return neighbors.filter(byCategory(currentPicture.category));
};

export const getLowestY = (
  bucket: BucketPicture[],
  currentPicture: BucketPicture
) => {
  const lowestPicture = sortBy(p => p.position.y)(
    bucket.filter(bPicture => bPicture.position.x === currentPicture.position.x)
  );
  return lowestPicture.length > 0
    ? lowestPicture[0].position.y - 1
    : GAME_FIELD_HEIGHT - 1;
};

export const updateFallingBlocks = (bucket: BucketPicture[]) => {
  const grid = [];
  for (let i = 0; i < GAME_FIELD_HEIGHT; i++) {
    grid[i] = [];
  }

  bucket.forEach(p => {
    grid[p.position.y][p.position.x] = p;
  });
  for (let y = GAME_FIELD_HEIGHT - 1; y > 0; y--) {
    for (let x = 0; x < GAME_FIELD_WIDTH; x++) {
      if (grid[y][x] == null) {
        const upperPicture = grid[y - 1][x];
        if (upperPicture != null) {
          upperPicture.position.y = y;
          grid[y][x] = grid[y - 1][x];
          grid[y - 1][x] = null;
        }
      }
    }
  }

  return bucket;
};
