import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

export interface UnsplashIamge {
  description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
}
