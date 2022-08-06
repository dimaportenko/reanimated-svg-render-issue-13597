import React, { FC } from "react";
import { Circle } from "react-native-svg";

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
} from "react-native-reanimated";

const ReanimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedCircle: FC<{
  color: string;
  circumference: number;
  strokeDashoffset: number;
  radius: number;
  angle: number;
  progress: Animated.SharedValue<number>;
  center: number;
  strokeWidth: number;
  angleOffset: number;
}> = ({
  color,
  radius,
  circumference,
  strokeDashoffset,
  angle,
  progress,
  center,
  strokeWidth,
  angleOffset,
}) => {
  const animatedProps = useAnimatedProps(() => {
    const _strokeDashoffset = interpolate(
      progress.value,
      [0, 1],
      [circumference, strokeDashoffset],
      Extrapolation.CLAMP
    );
    const rotation = interpolate(
      progress.value,
      [0, 1],
      [-angleOffset, angle],
      Extrapolation.CLAMP
    );
    return {
      strokeDashoffset: _strokeDashoffset,
      transform: [
        { translateX: center },
        { translateY: center },
        { rotate: `${rotation}deg` },
        { translateY: -center },
        { translateX: -center },
      ],
    };
  }, [progress.value, angle, strokeDashoffset]);

  return (
    <ReanimatedCircle
      cx="50%"
      cy="50%"
      r={radius}
      stroke={color}
      fill="transparent"
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      // @ts-ignore
      animatedProps={animatedProps}
    />
  );
};
