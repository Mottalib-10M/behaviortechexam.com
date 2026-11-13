/**
 * Question bank in the browser: `loadBank` fetches the files on demand, so a page ships only the
 * questions its first render shows until the visitor asks for a new draw. `BANK` (lib/banks-build.ts)
 * is for the build only.
 */
import type { Question } from './engine/exam';
const strip = (m: { default: unknown }) => (m.default as { questions: Question[] }).questions;
let cache: Promise<Question[]> | null = null;
export function loadBank(): Promise<Question[]> {
  cache ??= Promise.all([
    import('../data/questions/rbt-a.json'), import('../data/questions/rbt-b.json'), import('../data/questions/rbt-c.json'),
    import('../data/questions/rbt-d.json'), import('../data/questions/rbt-e.json'), import('../data/questions/rbt-f.json'),
    import('../data/questions/bcba.json'),
  ]).then((ms) => ms.flatMap(strip));
  return cache;
}
