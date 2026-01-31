import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TopicMetadata {
  slug: string;
  title: string;
  subtitle: string;
  dateRange: {
    start: string;
    end: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
  keywords: string[];
}

export interface Perspective {
  id: string;
  label: string;
}

export interface PerspectivesData {
  topic: string;
  perspectives: Perspective[];
}

export interface TopicData extends TopicMetadata {
  perspectiveCount?: number;
}

export async function loadTopicMetadata(slug: string): Promise<TopicMetadata | null> {
  try {
    const response = await fetch(`/topics/${slug}/metadata.json`);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export async function loadPerspectives(slug: string): Promise<PerspectivesData | null> {
  try {
    const response = await fetch(`/topics/${slug}/perspectives.json`);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export async function loadTopicWithPerspectives(slug: string): Promise<TopicData | null> {
  const metadata = await loadTopicMetadata(slug);
  if (!metadata) return null;

  const perspectivesData = await loadPerspectives(slug);
  const perspectiveCount = perspectivesData?.perspectives.length ?? 0;

  return {
    ...metadata,
    perspectiveCount,
  };
}

export function estimateReadTime(wordCount: number = 1500): string {
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}
