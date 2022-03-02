import { BottomTabs } from './src/main/navigation/bottom-tabs';
import {
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    useFonts,
} from '@expo-google-fonts/quicksand';
import { Text } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts({
        Quicksand_500Medium,
        Quicksand_600SemiBold,
    });
    return fontsLoaded ? <BottomTabs /> : <Text>Loading</Text>;
}
