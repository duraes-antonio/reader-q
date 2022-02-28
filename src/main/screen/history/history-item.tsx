import { HistoryItem } from '../../../models/history-item';
import { FlatList, SafeAreaView, Text } from 'react-native';

export interface HistoryListProps {
    data: HistoryItem[];
}

export function HistoryItemCard(props: { data: HistoryItem }) {
    return <Text>{props.data.title}</Text>;
}

export function History(props: { payload: HistoryListProps }) {
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
