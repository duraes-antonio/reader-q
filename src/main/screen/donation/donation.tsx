import { Text, View } from 'react-native';
import { Screen } from '../screen';

export function DonationScreen(): JSX.Element {
    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Donation!</Text>
            </View>
        </Screen>
    );
}
