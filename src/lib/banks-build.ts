/** Build-time access to the bank (never imported by a client component). */
import A from '../data/questions/rbt-a.json';
import B from '../data/questions/rbt-b.json';
import C from '../data/questions/rbt-c.json';
import D from '../data/questions/rbt-d.json';
import E from '../data/questions/rbt-e.json';
import F from '../data/questions/rbt-f.json';
import BCBA from '../data/questions/bcba.json';
import type { Question } from './engine/exam';
export const BANK: Question[] = [A, B, C, D, E, F, BCBA].flatMap((f) => (f as { questions: Question[] }).questions);
