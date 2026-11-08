export interface WebDavConfig {
  serverUrl: string;
  username: string;
  password: string;
  remotePath: string; // Remote root directory
  connected?: boolean;
  lastChecked?: string; // ISO string
}

export interface WebDavFileItem {
  name: string;
  href: string;
  path: string;
  size: number;
  lastModified: string | null;
  isDirectory: boolean;
  isManuscript: boolean; // .ibuku, .epub, or .md
  type: 'ibuku' | 'epub' | 'markdown' | 'other' | 'directory';
  subPath?: string; // Relative parent directory from config.remotePath
  relativePath?: string; // Full relative path from config.remotePath
}

export interface WebDavFileMetadata {
  lastModified: string | null;
  lastModifiedTimestamp: number | null; // Milliseconds timestamp (Date.parse)
  etag: string | null;
  size: number | null;
  exists: boolean;
}

export type StorageTarget = 'local' | 'cloud';

