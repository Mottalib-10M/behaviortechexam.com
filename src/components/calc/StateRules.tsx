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

interface Props { state?: string; idPrefix?: string; secondary?: boolean }
export default function StateRules({ state: s0 = 'Washington', idPrefix = 'sr', secondary = false }: Props) {
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
          <tr><td className="py-2 pr-3 text-navy-600">State credential for technicians</td><td className="py-2 text-navy-900">{tech ? tech.techCredential : st && !st.techRequired ? `None: ${st.techNote}` : 'Not among the states that regulate or register technicians in the BACB brief'}</td></tr>
          {tech && <tr><td className="py-2 pr-3 text-navy-600">Who issues it</td><td className="py-2 text-navy-900">{tech.techAuthority}</td></tr>}
          {tech && <tr><td className="py-2 pr-3 text-navy-600">What the state asks</td><td className="py-2 text-navy-900">{tech.techNote}</td></tr>}
        </tbody></table>
      </form>
      <div {...(secondary ? {} : { 'data-resultat': '' })} aria-live="polite" className="h-fit rounded-lg border-t-4 border-accent-700 bg-navy-50 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{name}: state fee for a technician</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{tech ? money(tech.techFee) : money(0)}</p>
        <p className="text-sm text-navy-700">{tech ? (tech.techRenewal ? `then ${money(tech.techRenewal)} per renewal${tech.techRenewalYears === 1 ? ', every year' : ''}` : 'renewal fee not stated on the page we read') : 'BACB certification only'}</p>
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          {cost.lines.filter((l) => l.amount > 0).map((l) => <tr key={l.label}><td className="py-1.5 pr-2 text-navy-700">{l.label}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{money(l.amount)}</td></tr>)}
          <tr><td className="py-1.5 pr-2 font-semibold text-navy-900">First attempt, fees only</td><td className="tabular-nums py-1.5 text-right font-semibold text-navy-900">{money(cost.total)}</td></tr>
        </tbody></table>
        <p className="mt-3 text-xs text-navy-700">Licensure list: BACB, read on {dateL(P.retrieved_at)}. Not counted here: your training and the background checks your employer runs{st?.techBackgroundFee ? `; the ${st.name} state background clearance above is counted` : ''}.</p>
      </div>
    </div>
  );
}
