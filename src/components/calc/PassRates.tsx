/**
 * First-time RBT exam pass rates of the 40-hour training providers listed by the BACB for 2025: filter
 * by size, sort by rate or by number of candidates, and the pooled rate of the rows shown.
 */
import { useState } from 'react';
import SelectField from '../ui/SelectField';
import PR from '../../data/pass-rates-2025.json';
import { formatNumberL } from '../../lib/format-l';

type Row = { name: string; rate: number; n: number; pass: number; fail: number };
const ROWS = PR.providers as Row[];
const n0 = (x: number, d = 0) => formatNumberL(x, 'en', d);
interface Props { minN?: number; idPrefix?: string; secondary?: boolean }
export default function PassRates({ minN: m0 = 500, idPrefix = 'pr', secondary = false }: Props) {
  const [minN, setMinN] = useState(String(m0));
  const [sort, setSort] = useState('n');
  const rows = ROWS.filter((r) => r.n >= Number(minN)).sort((a, b) => (sort === 'rate' ? b.rate - a.rate : sort === 'name' ? a.name.localeCompare(b.name) : b.n - a.n));
  const n = rows.reduce((s, r) => s + r.n, 0), p = rows.reduce((s, r) => s + r.pass, 0);
  return (
    <div data-chrome className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]">
      <div>
        <form className="grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} {...(secondary ? { 'data-simulateur-secondaire': '' } : {})}>
          <SelectField id={`${idPrefix}-min`} label="Providers with at least" value={minN} onChange={setMinN} options={[10, 100, 500, 1000, 5000].map((k) => ({ value: String(k), label: `${n0(k)} first-time candidates` }))} />
          <SelectField id={`${idPrefix}-sort`} label="Sort by" value={sort} onChange={setSort} options={[{ value: 'n', label: 'Number of candidates' }, { value: 'rate', label: 'Pass rate' }, { value: 'name', label: 'Name' }]} />
        </form>
        <div className="mt-4 max-h-[28rem] overflow-auto"><table className="journal w-full text-sm">
          <thead><tr><th scope="col" className="px-3 py-2 text-left">Training provider</th><th scope="col" className="px-3 py-2 text-right">Pass rate</th><th scope="col" className="px-3 py-2 text-right">Candidates</th></tr></thead>
          <tbody>{rows.map((r) => <tr key={r.name}><td className="border-b border-navy-100 px-3 py-2">{r.name}</td><td className="tabular-nums border-b border-navy-100 px-3 py-2 text-right">{n0(r.rate, 1)}%</td><td className="tabular-nums border-b border-navy-100 px-3 py-2 text-right">{n0(r.n)}</td></tr>)}</tbody>
        </table></div>
      </div>
      <div {...(secondary ? {} : { 'data-resultat': '' })} aria-live="polite" className="h-fit rounded-lg border-t-4 border-accent-700 bg-navy-50 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">Pooled first-time pass rate, {rows.length} providers shown</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{n ? n0((p / n) * 100, 1) : '0'}%</p>
        <p className="text-sm text-navy-700">{n0(p)} passed out of {n0(n)} first-time candidates in {PR.year}</p>
        <p className="mt-3 text-xs text-navy-700">BACB report updated {PR.updated}: providers publicly available with 10 or more first-time candidates; names as applicants entered them.</p>
      </div>
    </div>
  );
}
