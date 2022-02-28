import { View } from 'react-native';
import { Screen } from '../../../ui/components/screen';
import { HistoryList } from '../../../ui/components/history/history-list';
import { HistoryListProps } from '../../../ui/components/history/history-item';

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
                <HistoryList payload={data} />
            </View>
        </Screen>
    );
}
