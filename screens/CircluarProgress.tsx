import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useDeferredValue, useEffect } from 'react';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

const { height, width } = Dimensions.get('window');
const circle_length = 1000; // Circumference
const R = circle_length / (2 * Math.PI); // Radius

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const CircularProgress = () => {
  const strokeWidth = 30;
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withTiming(1, {duration:8000})
  }, [])

  const animateProps = useAnimatedProps(() => ({
    // strokeDashoffset: circle_length * progress.value
    // For reverse animation
    strokeDashoffset: circle_length * (1-progress.value)
  }));

  const ProgressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  })

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0?0:1, {duration:8000})
  }, [])
  return (
    <View style={styles.container}>
        {/* <Text style={styles.progressText}>{ProgressText.value}</Text> */}
        <ReText style={styles.progressText} text={ProgressText}/>
      <Svg width={width} height={height} style={{position:'absolute'}}> 
        {/* Background Circle */}
        <Circle
          cx={width / 2}
          cy={height / 2} // Adjusted to fit within view
          r={R}
          stroke="#303858" // Lighter stroke for background
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Foreground Circle */}
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke="#A6E1FA"
          strokeWidth={15}
          fill="none"
          strokeDasharray={circle_length}
          strokeLinecap={'round'}
          animatedProps={animateProps}
        />
      </Svg>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Run</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444B6F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize:80,
    color:'white',
    width:200,
    textAlign:'center'
  },
  button:{
    bottom:80,
    width:width*0.7,
    height:60,
    backgroundColor:'#303858',
    borderRadius:20,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:25,
    color:'white'
  }
});
