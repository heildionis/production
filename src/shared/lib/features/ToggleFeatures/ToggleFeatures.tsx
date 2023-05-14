import { ReactElement } from 'react';

import { getFeatureFlags } from '../setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeatureProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}
export const ToggleFeatures = (props: ToggleFeatureProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlags(feature)) {
        return on;
    }

    return off;
};
