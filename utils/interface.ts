import { ImageRequireSource } from "react-native/types";

export interface CustomRatingProps {
  initialRating?: number;
  renderStarts?: number;
  startHeight?: number;
  onResult?: (result: number) => void;
  spaceBetween?: number;
  filledImage?: ImageRequireSource;
  unfilledImage?: ImageRequireSource;
  isHalf?: boolean;
  swipeEnabled?: boolean;
}