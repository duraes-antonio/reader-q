import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DonationScreen } from '../screen/donation/donation';
import { ScanScreen } from '../screen/scan/scan';
import { HistoryScreen } from '../screen/history/history';
import { Routes } from '../routes';
import React from 'react';
import { CustomTabBar } from './custom-tab';
import { StyleSheet } from 'react-native';
import { colors } from '../../ui/style/color';
import { Quicksand_600SemiBold, useFonts } from '@expo-google-fonts/quicksand';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Quicksand_600SemiBold',
        color: colors.textDescription,
    },
});

export function BottomTabs(): JSX.Element {
    const [fontsLoaded] = useFonts({ Quicksand_600SemiBold });
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerTitleStyle: fontsLoaded ? styles.header : {},
                }}
                tabBar={(props) => {
                    return <CustomTabBar {...props} />;
                }}
            >
                <Tab.Screen name={Routes.History} component={HistoryScreen} />
                <Tab.Screen name={Routes.Scan} component={ScanScreen} />
                <Tab.Screen name={Routes.Donation} component={DonationScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
