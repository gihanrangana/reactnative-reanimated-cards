import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import Animated, {Easing} from "react-native-reanimated";

const {
    set,
    cond,
    startClock,
    stopClock,
    clockRunning,
    block,
    timing,
    debug,
    Value,
    Clock
} = Animated;

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: value,
        time: new Value(0),
        frameTime: new Value(0),
    };

    const config = {
        duration: 1000,
        toValue: dest,
        easing: Easing.inOut(Easing.sin),
    };

    return block([

        cond(clockRunning(clock), 0, [

            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock),
        ]),
        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position,
    ]);
}

const Card = (props) => {
    const {data} = props;
    let [height, setHeight] = React.useState(new Value(50));

    const [expand, setExpand] = React.useState(false);

    const toggleCard = () => {

        if (expand) {
            let height = runTiming(new Clock(), new Value(260), new Value(50));
            setHeight(height);
        } else {
            let height = runTiming(new Clock(), new Value(50), new Value(260));
            setHeight(height);
        }
        setExpand(!expand);
    };

    return (
        <View style={styles.cardContainer}>

            <Animated.View style={{height: height}}>
                {!expand &&
                <Animated.ScrollView>
                    <TouchableOpacity onPress={() => toggleCard()}>
                        <View style={styles.content}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={data.img}/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.heading}>{data.heading}</Text>
                                <Text>{data.subHeading}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.ScrollView>
                }

                {expand &&
                <Animated.ScrollView>
                    <TouchableOpacity onPress={() => toggleCard()}>

                        <View style={styles.expandedImageContainer}>
                            <Image style={styles.expandedImage} source={data.img}/>
                            <Image style={styles.tick} source={require('../../assets/tick.png')}/>
                        </View>

                        <Text style={styles.heading}>{data.heading}</Text>
                        <Text>{data.subHeading}</Text>
                    </TouchableOpacity>
                </Animated.ScrollView>
                }
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        overflow: 'hidden',
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: '5px',
        borderRadius: 4
    },
    content: {
        flexDirection: 'row'
    },
    heading: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    imageContainer: {
        display: "flex",
        borderRadius: 4,
        overflow: 'hidden'
    },
    expandedImageContainer: {
        position: 'relative',
    },
    expandedImage: {
        width: "100%",
        height: '210px',
        borderRadius: 4
    },
    image: {
        width: "80px",
        height: "50px"
    },
    tick: {
        width: 50,
        height: 50,
        position:'absolute',
        bottom:10,
        right:10
    },
    textContainer: {
        paddingHorizontal: '10px'
    }
});

export default Card;