import { HistoryItem } from '../../../models/history-item';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../style/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonType, CircleButton } from '../button';
import dayjs from 'dayjs';

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
        flex: 1,
    },
    itemTitle: {
        color: colors.textTitle,
        fontFamily: 'Quicksand_500Medium',
    },
    itemContent: {
        color: colors.textDescription,
        fontFamily: 'Quicksand_500Medium',
    },
});

export function HistoryItemCard(props: { data: HistoryItem }): JSX.Element {
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
                <Text style={[historyStyles.itemContent]}>
                    {props.data.content}
                </Text>
                <Text style={historyStyles.itemContent}>
                    {dayjs(props.data.date).format('DD/MM/YYYY HH:mm:ss')}
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <CircleButton
                    style={{ marginRight: 8 }}
                    type={ButtonType.Copy}
                />
                <CircleButton type={ButtonType.Open} />
            </View>
        </View>
    );
}
