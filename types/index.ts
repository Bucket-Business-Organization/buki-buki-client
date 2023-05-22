export type Bucket = {
    id: number;
    content: string;
    date: string;
    dDay: number;
    writer: string;
    status: string;
    category: string[];
    progress: number;
    members: string[];
    etc: string;
  }
  
  export type Group = {
    id: number;
    name: string;
    category: string;
    isPublic: boolean;
    admin: string;
    members: string[];
    description: string;
    buckets: Bucket[];
  }
  