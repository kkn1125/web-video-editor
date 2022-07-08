import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getStartEnd, getIsCropAndDuration } from '@/store/selectors';
import TimeText from '@/components/atoms/TimeText';
import color from '@/theme/colors';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  border-bottom: 1px solid ${color.BORDER};
`;

const InnerDiv = styled.div`
  padding: 0 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PART_COUNT = 6;

const getTimes = ({ start, end }): number[] => {
  const duration: number = end - start;
  if (!duration) return [];

  const times: number[] = [];
  const gap = duration / PART_COUNT;

  let secs = 0;

  if (duration < 6) {
    for (let count = 0; count <= duration; count += 1) times.push(count);
    return times;
  }

  for (let count = 0; count <= PART_COUNT; count += 1) {
    times.push(Math.round(secs));
    secs += gap;
  }

  return times;
};

const TimeZone: React.FC = () => {
  const { isCrop, duration } = useSelector(getIsCropAndDuration, shallowEqual);
  const { start, end } = useSelector(getStartEnd);

  const parameter = isCrop ? { start: 0, end: duration } : { start, end };
  const times: number[] = getTimes(parameter);

  return (
    <StyledDiv>
      <InnerDiv>
        {!!duration &&
          times.map(time => (
            <TimeText key={time} time={time} color={color.GRAY} />
          ))}
      </InnerDiv>
    </StyledDiv>
  );
};

export default TimeZone;
