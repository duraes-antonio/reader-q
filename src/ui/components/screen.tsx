import { StyleSheet, View } from 'react-native';
import React from 'react';

const screenStyles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 16,
    },
});

export function Screen(props: { children: React.ReactNode }) {
    return <View style={screenStyles.screen}>{props.children}</View>;
}
