import React, { FC, useEffect, useMemo } from "react";
import { View } from "react-native";
import Svg from "react-native-svg";

import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { AnimatedCircle } from "./AnimatedCircle";
import { TestData } from "./data/data";

export const PieChart: FC<{
  categories: TestData;
  size?: number;
  strokeWidth?: number;
  viewSize?: number;
  angleOffset?: number;
}> = ({
  categories,
  size = 140,
  strokeWidth = 40,
  viewSize = 120,
  angleOffset = 90,
}) => {
  const radius = size / 2;
  const boxSize = size + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const center = boxSize / 2;
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const measurements = useMemo(() => {
    let angle = 0;
    return categories.map(({ percentage }) => {
      const result = {
        strokeDashoffset: circleCircumference * (1 - Number(percentage) / 100),
        rotation: angle - angleOffset,
      };

      angle += (360 * Number(percentage)) / 100;

      return result;
    });
  }, [categories, circleCircumference, angleOffset]);

  return (
    <View style={{ width: viewSize, height: viewSize }}>
      <Svg
        height={viewSize}
        width={viewSize}
        viewBox={`0 0 ${boxSize} ${boxSize}`}
      >
        {categories.map((category, index) => (
          <AnimatedCircle
            key={`cirlecesection${index}`}
            center={center}
            radius={radius}
            circumference={circleCircumference}
            strokeDashoffset={measurements[index].strokeDashoffset}
            angle={measurements[index].rotation}
            progress={progress}
            color={category.color}
            strokeWidth={strokeWidth}
            angleOffset={angleOffset}
          />
        ))}
      </Svg>
    </View>
  );
};
