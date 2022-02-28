import { FlatList, SafeAreaView } from 'react-native';
import { HistoryItemCard, HistoryListProps } from './history-item';

export function HistoryList(props: { payload: HistoryListProps }) {
    return (
        <SafeAreaView>
            <FlatList
                data={props.payload.data}
                renderItem={(info) => HistoryItemCard({ data: info.item })}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}
