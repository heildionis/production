import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './RatingCard.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard: FC<RatingCardProps> = memo(
    (props: RatingCardProps) => {
        const {
            className,
            title,
            feedbackTitle,
            hasFeedback,
            onCancel,
            onAccept,
            rate = 0,
        } = props;
        const { t } = useTranslation();
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [starsCount, setStarsCount] = useState(rate);
        const [feedback, setFeedback] = useState('');
        const isMobile = useDevice();

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount);
                if (hasFeedback) {
                    setIsModalOpen(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept]
        );

        const onAcceptHandler = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        }, [feedback, onAccept, starsCount]);

        const onCancelHandler = useCallback(() => {
            setIsModalOpen(false);
            onCancel?.(starsCount);
        }, [onCancel, starsCount]);

        const modalContent = (
            <>
                <Text title={feedbackTitle} />
                <Input
                    value={feedback}
                    onChange={setFeedback}
                    placeholder={t('Ваш отзыв')}
                    data-testid='RatingCard.Input'
                />
            </>
        );

        return (
            <Card
                fullWidth
                className={classNames(cls.RatingCard, {}, [className])}
                data-testid='RatingCard'
            >
                <VStack align='center' gap='8'>
                    <Text
                        title={starsCount ? t('Спасибо за оценку!!!') : title}
                    />
                    <StarRating
                        selectedStars={starsCount}
                        size={40}
                        onSelect={onSelectStars}
                    />
                </VStack>
                {!isMobile ? (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack fullWidth gap='32'>
                            {modalContent}
                            <HStack fullWidth gap='16' justify='end'>
                                <Button
                                    onClick={onCancelHandler}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    data-testid='RatingCard.Close'
                                >
                                    {t('Закрыть')}
                                </Button>
                                <Button
                                    onClick={onAcceptHandler}
                                    theme={ButtonTheme.OUTLINE}
                                    data-testid='RatingCard.Send'
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                ) : (
                    <Drawer isOpen={isModalOpen} lazy onClose={onCancelHandler}>
                        <VStack gap='32'>
                            {modalContent}
                            <Button
                                fullWidth
                                onClick={onAcceptHandler}
                                data-testid='RatingCard.Send'
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                )}
            </Card>
        );
    }
);
