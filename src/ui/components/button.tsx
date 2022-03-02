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
    [ButtonType.CameraFlip]: 'camera-flip',
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
});

export interface ButtonProps extends TouchableOpacityProps {
    type: ButtonType;
}

function _CircleButton(props: ButtonProps & { iconName: string }) {
    return (
        <TouchableOpacity
            activeOpacity={1 / 2}
            style={[props.style, buttonStyles.button]}
        >
            <MaterialCommunityIcons
                color="white"
                /* @ts-ignore */
                name={props.iconName}
                size={16}
            />
        </TouchableOpacity>
    );
}

export function CircleButton(props: ButtonProps) {
    return <_CircleButton {...props} iconName={iconByType[props.type]} />;
}
