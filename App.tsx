import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabs } from './src/main/navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
    return <BottomTabs />;
}
