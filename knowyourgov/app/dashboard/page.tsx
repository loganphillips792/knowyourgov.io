import Image from 'next/image';
import UnitedStatesMap from './UnitedStatesMap';
import variables from '../variables.module.scss';

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <div className={variables.mapContainer}>
            <UnitedStatesMap className={variables.unitedStatesMap} />
        </div>
    )
}