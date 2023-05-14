import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const VStack: FC<VStackProps> = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex {...props} align={align} direction='column' />;
};
