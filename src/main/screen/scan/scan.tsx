import { Text, View } from 'react-native';
import { Screen } from '../screen';

export function ScanScreen(): JSX.Element {
    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Scan!</Text>
            </View>
        </Screen>
    );
}
