import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Routes } from '../routes';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../style/color';

const tabBarStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 45,
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.3)',

        height: 48,
        width: 242,

        position: 'absolute',
        bottom: 32,

        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
});

const iconByRoute: { [key in Routes]: string } = {
    [Routes.Scan]: 'qrcode-scan',
    [Routes.History]: 'history',
    [Routes.Donation]: 'gift',
};

export function CustomTabBar(props: BottomTabBarProps) {
    const { state, descriptors, navigation } = props;
    return (
        <View style={tabBarStyles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const iconColor = isFocused ? colors.primary : colors.grey;
                const dotColor = isFocused ? colors.primary : 'transparent';
                const { options } = descriptors[route.key];
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={tabBarStyles.item}
                    >
                        <MaterialCommunityIcons
                            color={iconColor}
                            name={iconByRoute[route.name]}
                            size={24}
                        />
                        <View
                            style={{
                                width: 4,
                                height: 4,
                                borderRadius: 4,
                                bottom: -6,
                                backgroundColor: dotColor,
                                position: 'absolute',
                            }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
