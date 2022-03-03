import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ButtonType, CircleButton } from '../../../ui/components/button';
import { CameraType } from 'expo-camera/build/Camera.types';

export function ScanScreen(): JSX.Element {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [cameraFacing, setCameraFacing] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Aguardando permissão para usar a camera</Text>;
    }

    if (hasPermission === false) {
        return <Text>Sem acesso à camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CircleButton
                size={'m'}
                style={[styles.button, styles.buttonFlipCamera]}
                type={ButtonType.CameraFlip}
                onPress={() =>
                    setCameraFacing((prev) =>
                        prev === CameraType.front
                            ? CameraType.back
                            : CameraType.front
                    )
                }
            />
            <BarCodeScanner
                type={cameraFacing}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <Button
                    title={'Tap to Scan Again'}
                    onPress={() => setScanned(false)}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    button: {
        position: 'absolute',
        right: 16,
        zIndex: 1,
    },
    buttonFlipCamera: {
        bottom: 120,
    },
});
