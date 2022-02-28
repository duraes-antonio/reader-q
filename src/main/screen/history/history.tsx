import { View } from 'react-native';
import { History, HistoryListProps } from './history-item';
import { Screen } from '../screen';

export function HistoryScreen(): JSX.Element {
    const data: HistoryListProps = {
        data: [
            {
                id: '1',
                date: new Date(),
                title: 'Teste 2',
                content: 'https://teste.com',
            },
        ],
    };
    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <History payload={data} />
            </View>
        </Screen>
    );
}
