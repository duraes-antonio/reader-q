import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DonationScreen } from '../screen/donation';
import { ScanScreen } from '../screen/scan';
import { HistoryScreen } from '../screen/history';
import { Routes } from '../routes';
import React from 'react';
import { CustomTabBar } from './custom-tab';

const Tab = createBottomTabNavigator();

export function BottomTabs(): JSX.Element {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <CustomTabBar {...props} />}
            >
                <Tab.Screen name={Routes.History} component={HistoryScreen} />
                <Tab.Screen name={Routes.Scan} component={ScanScreen} />
                <Tab.Screen name={Routes.Donation} component={DonationScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
