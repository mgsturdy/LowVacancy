export interface GeneratedStrategy {
  headline: string;
  targetDemographic: string;
  platforms: string[];
  contentAngles: {
    title: string;
    description: string;
  }[];
  sampleCaption: string;
  estimatedReach: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}