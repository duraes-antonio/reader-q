import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import { colors } from '../style/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const enum ButtonType {
    Open,
    Copy,
    CameraFlip,
    FlashOn,
    FlashOff,
}

const iconByType: { [key in ButtonType]: string } = {
    [ButtonType.CameraFlip]: 'camera-switch',
    [ButtonType.Copy]: 'content-copy',
    [ButtonType.FlashOff]: 'lightbulb-off',
    [ButtonType.FlashOn]: 'lightbulb-on',
    [ButtonType.Open]: 'open-in-new',
};

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.94)',
    },
    buttonMedium: {
        height: 40,
        width: 40,
    },
});

export interface ButtonProps extends TouchableOpacityProps {
    type: ButtonType;
    size?: 'm' | 's';
}

function _CircleButton(props: ButtonProps & { iconName: string }) {
    const styles = [
        buttonStyles.button,
        props.style,
        props.size === 'm' ? buttonStyles.buttonMedium : undefined,
    ];
    return (
        <TouchableOpacity {...props} activeOpacity={1 / 2} style={styles}>
            <MaterialCommunityIcons
                color="white"
                /* @ts-ignore */
                name={props.iconName}
                size={props.size === 'm' ? 24 : 16}
            />
        </TouchableOpacity>
    );
}

export function CircleButton(props: ButtonProps) {
    return <_CircleButton {...props} iconName={iconByType[props.type]} />;
}
