/**
 * State rules finder: for any state, whether behavior analysts are licensed (year of the law, board,
 * from the BACB list), whether the state adds its own credential for technicians, its fee and renewal,
 * and the full first-year cost with the BACB fees. Everything is read from params-2026.json.
 */
import { useState } from 'react';
import SelectField from '../ui/SelectField';
import P from '../../data/params-2026.json';
import { totalCost, stateById } from '../../lib/engine/rules';
import { money, dateL } from '../../lib/format-l';

type Lic = [string, number, string];
const LIC = P.licensureStates as unknown as Lic[];
const NONE = P.noLicensureStates as string[];
const ALL = [...LIC.map((l) => l[0]), ...NONE].sort();
const idOf = (name: string) => P.states.find((s) => s.name === name)?.id ?? '';

/** `headline`: 'total' (default) puts the first-attempt total in large type, the state fee under it (testeurs naïfs
 *  2026-11-14 tour 2: a large "$70" was read as the cost); 'fee' keeps the state fee in large type, for the state
 *  pages whose main calculator already gives the total. */
interface Props { state?: string; idPrefix?: string; secondary?: boolean; headline?: 'total' | 'fee' }
export default function StateRules({ state: s0 = 'Washington', idPrefix = 'sr', secondary = false, headline = 'total' }: Props) {
  const [name, setName] = useState(ALL.includes(s0) ? s0 : 'Washington');
  const lic = LIC.find((l) => l[0] === name);
  const st = stateById(idOf(name));
  const cost = totalCost({ stateId: st?.id ?? '', trainingCost: 0, backgroundCost: 0, attempts: 1 });
  const tech = st?.techRequired ? st : null;
  return (
    <div data-chrome className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]">
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()} {...(secondary ? { 'data-simulateur-secondaire': '' } : {})}>
        <SelectField id={`${idPrefix}-state`} label="State or district where you will work" value={name} onChange={setName} options={ALL.map((n) => ({ value: n, label: n }))} />
        <table className="w-full text-sm"><tbody className="divide-y divide-navy-200">
          <tr><td className="py-2 pr-3 text-navy-600">Behavior analyst licensure law</td><td className="py-2 text-navy-900">{lic ? `Yes, since ${lic[1]}` : 'None listed by the BACB'}</td></tr>
          {lic && <tr><td className="py-2 pr-3 text-navy-600">Licensing body</td><td className="py-2 text-navy-900">{lic[2]}</td></tr>}
          <tr><td className="py-2 pr-3 text-navy-600">State credential for technicians (separate from the national RBT)</td><td className="py-2 text-navy-900">{tech ? tech.techCredential : st && !st.techRequired ? `None: ${st.techNote}` : 'Not among the states that regulate or register technicians in the BACB brief'}</td></tr>
          {tech && <tr><td className="py-2 pr-3 text-navy-600">Who issues it</td><td className="py-2 text-navy-900">{tech.techAuthority}</td></tr>}
          {tech && <tr><td className="py-2 pr-3 text-navy-600">What the state asks</td><td className="py-2 text-navy-900">{tech.techNote}</td></tr>}
        </tbody></table>
      </form>
      <div {...(secondary ? {} : { 'data-resultat': '' })} aria-live="polite" className="h-fit rounded-lg border-t-4 border-accent-700 bg-navy-50 p-4 lg:sticky lg:top-20">
        {name === s0 && !secondary && <p data-exemple className="mb-2 rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs leading-snug text-amber-900"><strong className="font-semibold">Example for {s0}</strong> — pick the state where you will work to see its own rules and fees</p>}
        {headline === 'total' ? (<>
          <p className="text-sm font-medium text-navy-700">{name}: total fees for a first attempt</p>
          <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{money(cost.total)}</p>
          <p className="text-sm text-navy-700">{tech ? `includes ${st?.techBackgroundFee ? `${money(tech.techFee + st.techBackgroundFee)} of ${name} fees (${money(tech.techFee)} state fee + ${money(st.techBackgroundFee)} state background check)` : `the ${money(tech.techFee)} ${name} state fee`}${tech.techRenewal ? `, then ${money(tech.techRenewal)} per state renewal${tech.techRenewalYears === 1 ? ', every year' : ''}` : ''}` : 'national RBT fees only: no state fee for technicians'}</p>
        </>) : (<>
          <p className="text-sm font-medium text-navy-700">{name}: state fee for a technician</p>
          <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{tech ? money(tech.techFee) : money(0)}</p>
          <p className="text-sm text-navy-700">{tech ? (tech.techRenewal ? `then ${money(tech.techRenewal)} per renewal${tech.techRenewalYears === 1 ? ', every year' : ''}` : 'state renewal fee not given on the state page we read') : 'national RBT fees only'}</p>
        </>)}
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          {cost.lines.filter((l) => l.amount > 0).map((l) => <tr key={l.label}><td className="py-1.5 pr-2 text-navy-700">{l.label}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{money(l.amount)}</td></tr>)}
          <tr><td className="py-1.5 pr-2 font-semibold text-navy-900">Total, first attempt</td><td className="tabular-nums py-1.5 text-right font-semibold text-navy-900">{money(cost.total)}</td></tr>
        </tbody></table>
        <p className="mt-3 text-xs text-navy-700">{st?.techBackgroundFee ? `Counted: the ${st.name} state background check. ` : ''}Not counted: your training, and the checks your employer runs. Licensure list: BACB, read on {dateL(P.retrieved_at)}.</p>
      </div>
    </div>
  );
}
