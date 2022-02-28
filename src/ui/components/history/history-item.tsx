import { HistoryItem } from '../../../models/history-item';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../style/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface HistoryListProps {
    data: HistoryItem[];
}

const historyStyles = StyleSheet.create({
    item: {
        backgroundColor: colors.primary10,
        minWidth: '100%',
        paddingTop: 8.5,
        paddingBottom: 9.5,
        paddingHorizontal: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        alignSelf: 'center',
    },
    itemTextContainer: {
        marginLeft: 12,
    },
    itemTitle: {
        color: colors.textTitle,
    },
    itemContent: {
        color: colors.textDescription,
    },
});

export function HistoryItemCard(props: { data: HistoryItem }) {
    return (
        <View style={historyStyles.item}>
            <MaterialCommunityIcons
                name="qrcode"
                size={24}
                color={colors.iris60}
                style={historyStyles.itemIcon}
            />
            <View style={historyStyles.itemTextContainer}>
                <Text style={historyStyles.itemTitle}>{props.data.title}</Text>
                <Text style={historyStyles.itemContent}>
                    {props.data.content}
                </Text>
                <Text style={historyStyles.itemContent}>
                    {props.data.date.toLocaleString()}
                </Text>
            </View>
        </View>
    );
}
