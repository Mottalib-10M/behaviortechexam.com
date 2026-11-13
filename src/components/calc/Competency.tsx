/**
 * Initial competency assessment tracker: the 19 tasks of the 2026 packet, the assessment type used for
 * each, and the rule that three of tasks 6 to 14 are shown with a client. Ticks stay in this browser.
 */
import { useEffect, useState } from 'react';
import P from '../../data/params-2026.json';

type Task = { n: number; section: string; name: string; types: string[] };
const TASKS = P.rules.competency.list as Task[];
const [LO, HI] = P.rules.competency.clientRange as [number, number];
const NEED = P.rules.competency.withClientMin;
const TYPE: Record<string, string> = { client: 'With a client', roleplay: 'Role-play', interview: 'Interview' };
const KEY = 'bte-competency-v1';
interface Props { idPrefix?: string; secondary?: boolean }
export default function Competency({ idPrefix = 'ca', secondary = false }: Props) {
  const [done, setDone] = useState<Record<number, string>>({});
  useEffect(() => { try { const s = localStorage.getItem(KEY); if (s) setDone(JSON.parse(s)); } catch { /* storage blocked */ } }, []);
  const set = (n: number, t: string) => setDone((o) => { const x = { ...o }; if (x[n] === t) delete x[n]; else x[n] = t; try { localStorage.setItem(KEY, JSON.stringify(x)); } catch { /* storage blocked */ } return x; });
  const count = Object.keys(done).length;
  const withClient = TASKS.filter((t) => t.n >= LO && t.n <= HI && done[t.n] === 'client').length;
  const sections = [...new Set(TASKS.map((t) => t.section))];
  const missing = TASKS.filter((t) => !done[t.n]).map((t) => t.n);
  return (
    <div data-chrome className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()} {...(secondary ? { 'data-simulateur-secondaire': '' } : {})}>
        {sections.map((s) => (
          <fieldset key={s} className="rounded-lg border border-navy-200 bg-white p-3">
            <legend className="px-1 text-sm font-semibold text-navy-900">{s}</legend>
            <ul className="space-y-2">{TASKS.filter((t) => t.section === s).map((t) => (
              <li key={t.n} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="text-navy-800"><span className="tabular-nums mr-1 font-semibold">{t.n}.</span>{t.name}</span>
                <span className="flex flex-wrap gap-1">{t.types.map((ty) => <button key={ty} id={`${idPrefix}-${t.n}-${ty}`} type="button" aria-pressed={done[t.n] === ty} onClick={() => set(t.n, ty)} className={`h-9 rounded border px-2 text-xs font-medium ${done[t.n] === ty ? 'border-accent-700 bg-accent-700 text-white' : 'border-navy-300 bg-white text-navy-700 hover:bg-navy-50'}`}>{TYPE[ty]}</button>)}</span>
              </li>))}</ul>
          </fieldset>
        ))}
      </form>
      <div {...(secondary ? {} : { 'data-resultat': '' })} aria-live="polite" className="h-fit rounded-lg border-t-4 border-accent-700 bg-navy-50 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">Tasks signed off</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{count}<span className="text-xl font-semibold text-navy-700"> / {TASKS.length}</span></p>
        <p className={`mt-2 text-sm font-semibold ${withClient >= NEED ? 'text-green-800' : 'text-navy-800'}`}>{withClient} of tasks {LO} to {HI} with a client ({NEED} needed)</p>
        <p className="mt-2 text-sm text-navy-700">{missing.length ? `Still to do: ${missing.join(', ')}` : 'Every task has an assessment type.'}</p>
        <p className="mt-3 text-xs text-navy-700">Press the type the assessor used for each task. Kept in this browser only. The signed form from your assessor is what counts.</p>
      </div>
    </div>
  );
}
