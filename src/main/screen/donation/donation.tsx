import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Screen } from '../../../ui/components/screen';
import { colors } from '../../../ui/style/color';
import { DONATION } from '../../consts/donation';

const styles = StyleSheet.create({
    text: {
        color: colors.textDescription,
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 16,
        lineHeight: 1.5 * 16,
        marginVertical: 40,
    },
    buttonCopyKeyDonate: {
        borderRadius: 48,
        height: 48,
        paddingHorizontal: 16,
        backgroundColor: colors.primary,
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonCopyKeyText: {
        color: 'white',
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 18,
        lineHeight: 20,
        marginLeft: 8,
    },
});

const text = `
Gostou do app? Apoie o desenvolvimento de apps gratuitos.
    
Basta clicar no botão abaixo para copiar a chave PIX e realizar uma doação de qualquer valor :)
`;

export function DonationScreen(): JSX.Element {
    const copyToClipboard = () => Clipboard.setString(DONATION.pixKey);
    return (
        <Screen>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                }}
            >
                <MaterialCommunityIcons
                    color={colors.primary}
                    name="gift-outline"
                    size={48}
                />
                <Text style={styles.text}>{text.trim()}</Text>
                <TouchableOpacity
                    onPress={copyToClipboard}
                    style={styles.buttonCopyKeyDonate}
                >
                    <MaterialCommunityIcons
                        color="white"
                        name="content-copy"
                        size={24}
                    />
                    <Text style={styles.buttonCopyKeyText}>Copiar chave</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}
